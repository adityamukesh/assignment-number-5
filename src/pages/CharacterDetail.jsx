import { useParams } from "react-router-dom";

function CharacterDetail() {
  const { id } = useParams();
  return <h1>Character  {id}</h1>;
}export default CharacterDetail;