import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";

import Header from "./Header";
import Footer from "./Footer";

const site_wrapper = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const main = css`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Layout() {
  return (
    <>
      <div css={site_wrapper}>
        <Header />

        <main css={main}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Layout;
