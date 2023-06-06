import "./Board.scss";
import Layout from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";

const Board = () => {
  const { state } = useLocation();

  return (
    <Layout title={"ToDo App"}>
      <div className="page-board">
        <div className="page-board__contents">
          This Board ID is {state.boardId}
        </div>
      </div>
    </Layout>
  );
};

export default Board;
