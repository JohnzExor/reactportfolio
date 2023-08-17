import profile from "../assets/images/profile.jpg";

const Home = () => {
  return (
    <div className="home w-full dark:bg-zinc-900 dark:text-white">
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
