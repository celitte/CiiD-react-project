import { useState } from "react";
import "./AddBoard.scss";

const AddBoard = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title) {
      setTitle("");
      console.log(title);
    }
  };

  return (
    <form className="add-board" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new board"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBoard;
