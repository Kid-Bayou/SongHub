import { css } from "@emotion/react";
import img from "../assets/home-img.jpg";

const home_container = css`
  display: flex;
  width: 80%;
`;

const home_img = css`
  width: 40%;
`;

const home_text = css`
  color: #422226;
`;

function Home() {
  return (
    <>
      <div css={home_container}>
        <img src={img} css={home_img} />
        <h1 css={home_text}>
          {" "}
          Harmony at Your Fingertips: Your Music, Your Way!{" "}
        </h1>
      </div>
    </>
  );
}

export default Home;
