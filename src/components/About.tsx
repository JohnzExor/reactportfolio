interface Props {
  onClick: () => void;
}

const About = ({ onClick }: Props) => {
  return (
    <div className="panel bg-gray-300 dark:bg-zinc-800 dark:text-white shadow-xl">
      <div className="panel-container">
        <div className="flex gap-14">
          <h1>About me</h1>
          <button className="" onClick={onClick}>
            X
          </button>
        </div>
        <div className="about-description">
          <p>
            Hello, dear readers! My name is Johnzyll Jimeno, and I invite you to
            join me on a journey through my aspirations, passions, and creative
            endeavors as I set my sights on becoming a future web and game
            developer. As technology evolves and shapes the world around us, I
            am committed to harnessing its potential to craft immersive digital
            experiences that captivate and inspire audiences worldwide.
          </p>
          <br />
          <p>
            My fascination with the world of technology ignited at an early age,
            driven by the endless possibilities that coding and design could
            offer. From the moment I crafted my first rudimentary webpage, I was
            hooked. The ability to weave lines of code into interactive
            interfaces and dynamic visuals felt like a superpower, a sentiment
            that has only grown stronger with time.
          </p>
          <br />
          <p>
            Passion Web Development: With each project I undertake, I find
            myself diving deeper into the world of web development. From HTML
            and CSS to JavaScript and beyond, I relish the challenge of creating
            seamless, user-friendly websites that not only deliver information
            but also engage and delight visitors. The responsive design
            principles I've honed ensure that my creations adapt effortlessly to
            various devices, enabling users to enjoy a consistent experience
            regardless of their chosen platform.
          </p>
          <br />
          <p>
            Game Development: In parallel with web development, the realm of
            game development has captured my heart and imagination. The prospect
            of crafting interactive worlds, designing captivating characters,
            and scripting intricate gameplay mechanics exhilarates me. I am
            captivated by the idea of creating games that transport players to
            alternate realities, where they can explore, learn, and be
            entertained in ways they never thought possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
