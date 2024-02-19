import { Link } from "react-router-dom";
import MainLayout from "../components/layout/main";
import Header from "../components/ui/Header";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const form = useSelector((state) => state.formReducer);

  return (
    <MainLayout>
      <Header>Home</Header>
      <div>
        <Link to={"/form"}>
          <button>Add new Form</button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Home;
