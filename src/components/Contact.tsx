interface Props {
  onClick: () => void;
}

const Contact = ({ onClick }: Props) => {
  return (
    <div className="panel bg-gray-300 dark:bg-zinc-800 dark:text-white shadow-xl">
      <div className="panel-container">
        <div className="flex">
          <h1>Contact</h1>
          <button onClick={onClick}>x</button>
        </div>
        <form action="" method="post" className=" text-center">
          <label htmlFor="">Name</label>
          <br />
          <input className=" dark:bg-zinc-700" type="text" name="" id="" />{" "}
          <br />
          <label htmlFor="">Message</label>
          <br />
          <textarea className="dark:bg-zinc-700" name="" id=""></textarea>
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};
export default Contact;
