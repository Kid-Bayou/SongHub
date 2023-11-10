import { css } from "@emotion/react";

const button = css `
 background-color: #422226;
 color: #F6EDEF;
 font-size: 1rem;
 cursor: pointer;
 border: solid #422226 2px;
 border-radius: 20px;
 width: 100px;
 height: 50px;

 &:hover {
    background-color: #D1A6AC;
 }
`

function Songs() {

  return (
    <>

      <button css={button}>Add Song</button>
      
    </>
  );
}

export default Songs;
