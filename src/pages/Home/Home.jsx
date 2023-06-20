import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import AddBoard from "../../components/AddBoard/AddBoard";
import Board from "../../components/Board/Board";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get("http://localhost:3000/boards");
        setBoards(response.data);
      } catch (error) {
        console.log("error:", error);
        setError(error.message);
      }
    };
    fetchBoards();
  }, []);

  return (
    <Layout title={"ToDo App"}>
      <div className="page-home">
        <div className="page-home__contents">
          {error && <p>{error}</p>}
          {boards.map((board) => {
            return <Board key={board.id} title={board.title} />;
          })}
          <AddBoard />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
