import { Link } from "react-router-dom";
import "./Board.scss";

const Board = (props) => {
  return (
    <div className="board">
      <Link
        className="board__item"
        to={"/board"}
        state={{ boardId: props.id }}
        key={props.id}
      >
        <h2 className="board__title">{props.title}</h2>
      </Link>
    </div>
  );
};

export default Board;
