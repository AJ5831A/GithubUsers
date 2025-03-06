import { useState } from "react";
import Searchbar from "../components/Searchbar";
import UserCard from "../components/Usercard";
import Loader from "../components/Loader";
import Errormessage from "../components/Errormessage";
import useGitHubUser from "../hooks/useGitHubUser";
import "../styles/app.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const { user, error, loading } = useGitHubUser(username);

  return (
    <div>
      <h1>Github User Detective ...</h1><br/><br/><br/>
      <Searchbar onSearch={setUsername} /> 
      
      {loading && <Loader />}
      {error && <Errormessage message={error} />}
      {user && <UserCard user={user} />}
    </div>
  );
};

export default Home;
