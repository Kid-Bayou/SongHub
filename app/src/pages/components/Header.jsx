import { Link, NavLink } from "react-router-dom";
import { css } from "@emotion/react";

import logo from "../../assets/logo.png";

const header = css`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 50px;
  margin-left: 50px;
`;

const logo_container = css`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;

`;

const logo_ = css`
  height: 55px;
`;

const logo_name = css`
  font-size: 1.8rem;
  color: #422226;

  &:hover {
    color: #d1a6ac;
  }

`;

const nav = css`
  display: flex;
  gap: 20px;
`;

const nav_text = css`
  font-size: 1.2rem;
  text-decoration: none;
  color: #422226;

  &:hover {
    color: #d1a6ac;
  }
`;

function Header() {
  return (
    <>
      <header css={header}>
        <Link css={logo_container} to="/">
          <img src={logo} css={logo_} />
          <p css={logo_name}>SongHub</p>
        </Link>
        <nav css={nav}>
          <NavLink to="/about" css={nav_text}>
            About
          </NavLink>
          <NavLink to="/songs" css={nav_text}>
            Songs
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
