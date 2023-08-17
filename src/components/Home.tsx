import profile from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <div className="home bg-gray-950 text-white">
      <div className="home-container flex gap-20">
        <div className="home-text">
          <h1>
            <strong className="user-name font-100">Johnzyll Jimeno</strong>
          </h1>
          <p className="description">Future Web/Game Developer.</p>
        </div>

        <img className="home-profile" src={profile} />
      </div>
    </div>
  );
};

export default Home;
