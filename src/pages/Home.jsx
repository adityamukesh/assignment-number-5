import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>ricky and  morty explorer</h1>
      
      <Link to="/characters">see characters</Link>
    </div>
  );
}
 export default Home;