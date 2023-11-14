import { css } from "@emotion/react";

const del_container = css `
display: flex;
flex-direction: column;
align-items: center;
`

const button = css`
  background-color: #422226;
  color: #f6edef;
  font-size: 1rem;
  cursor: pointer;
  border: solid #422226 2px;
  border-radius: 20px;
  width: 100px;
  height: 50px;

  &:hover {
    background-color: #d1a6ac;
  }
`;

const button_container = css `
display: flex;
gap: 10px;
justify-content: center;
`

function DeleteSong() {
  return (
    <>
      <div css={del_container}>
        <h1>Delete Song</h1>
        <p>Are you sure you want to delete this song?</p>
        <div css={button_container}>
          <button css={button}>Yes</button>
          <button css={button}>No</button>
        </div>
      </div>
    </>
  );
}

export default DeleteSong;
