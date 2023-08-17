interface Props {
  onClick: () => void;
}

const Contact = ({ onClick }: Props) => {
  return (
    <div className="panel">
      <div className="panel-container">
        <div className="flex">
          <h1>Contact</h1>
          <button onClick={onClick}>x</button>
        </div>
        <form action="" method="post" className=" text-center">
          <label htmlFor="">Name</label>
          <br />
          <input type="text" name="" id="" /> <br />
          <label htmlFor="">Message</label>
          <br />
          <textarea name="" id=""></textarea>
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
