import "./Home.scss";
import Layout from "../../components/Layout/Layout";
import AddBoard from "../../components/AddBoard/AddBoard";
import Board from "../../components/Board/Board";

const boards = [
  {
    id: 1,
    title: "Weekly tasks",
  },
  {
    id: 2,
    title: "Private tasks",
  },
];

const Home = () => {
  return (
    <Layout title={"ToDo App"}>
      <div className="page-home">
        <div className="page-home__contents">
          {boards.map((board, index) => {
            return <Board key={index} {...board} />;
          })}
          <AddBoard />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
