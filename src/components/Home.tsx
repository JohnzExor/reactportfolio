import profile from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <div className="home text-white w-full">
      <div className="home-container">
        <img className="home-profile" src={profile} />

        <div className="home-text">
          <h1>
            <strong className="user-name">Johnzyll Jimeno</strong>
          </h1>
          <p className="description">Future Web/Game Developer.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
