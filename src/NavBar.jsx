import { useState, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import Hamburger from "hamburger-react";
import { links, social } from "./data";
import logo from "./assets/react.svg";

function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const visibleState = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: isOpen
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-header">
        <img className="logo" src={logo} alt="React logo" />
        <button className="nav-toggle">
          <Hamburger
            toggled={isOpen}
            toggle={() => setOpen(!isOpen)}
            size={"20"}
          />
        </button>
        <div className="links-container" style={linkStyles} ref={visibleState}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social-icons">
          {social.map((socialIcon) => {
            const { id, url } = socialIcon;
            return (
              <SocialIcon
                key={id}
                target="_blank"
                url={url}
                style={{ height: "20px", width: "20px" }}
              />
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
