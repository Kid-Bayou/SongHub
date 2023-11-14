import { css } from "@emotion/react";

const upd_container = css `
display: flex;
flex-direction: column;
align-items: center
`

const upd_form = css `
display: flex;
flex-direction: column;
gap: 5px;
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
  margin-top: 20px;

  &:hover {
    background-color: #d1a6ac;
  }
`;

function UpdateSong() {
  return (
    <>
      <div css={upd_container}>
        <h1>Update Song</h1>
        <form css={upd_form}>
          <div>
            <label>Title:</label>
            <input type="text" />
          </div>
          <div>
            <label>Artist:</label>
            <input type="text" />
          </div>
          <button css={button}>Update Song</button>
        </form>
      </div>
    </>
  );
}

export default UpdateSong;
