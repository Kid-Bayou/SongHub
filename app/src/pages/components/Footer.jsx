import { css } from "@emotion/react";

const footer = css`
  height: 100px;
  background-color: #422226;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const copyright_container = css`
  color: #f6edef;
`;

function Footer() {
  return (
    <footer css={footer}>
      <div css={copyright_container}>
        <p>© 2023 SongHub. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
