import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search,setSearch]=useState("");
   const [status, setStatus] = useState("");
  const[loading,setLoading]=useState(true);

  useEffect(() => {
    async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=" + page +"&name="+search+"&status=" + status);

 const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
     
    }
    getCharacters();
  }, [page,search,status]);

  

  return (
    <div>
      <h1>Characters</h1>

      <div className="filters">
        <input type="text" placeholder="Search " value={search}
          onChange={(aditya) => {
            setSearch(aditya.target.value);
            setPage(1);
          }}
         
        />

        <select value={status} onChange={(event) => {
            setStatus(event.target.value);
            setPage(1);
          }}
          
        >
          <option value="">All statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        </div>
<input type="text" placeholder="Search characters" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <div >
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
       <p>{page} of {totalPages}</p>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>

       

      <div >
    {characters.map((character) => (
   <Link to={"/characters/" + character.id} key={character.id} >
            <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
          <p>{character.species}</p>
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Characters;