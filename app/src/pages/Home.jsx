import img from "../assets/home-img.jpg"

function Home() {
  return (
    <>
      <div className="home-container">
        <img src={img} className="home-img" />
        <h1 className="home-text"> Harmony at Your Fingertips: Your Music, Your Way! </h1>
      </div>
    </>
  );
}

export default Home;
