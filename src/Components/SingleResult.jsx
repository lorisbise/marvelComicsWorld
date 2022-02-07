import Card from './Card'
import { Link } from "react-router-dom";

const SingleResult = ({ copy, dati }) => {


  return (
    <div className="comics">
      
      <Link to={`/hero/${dati.id}`} style={{ textDecoration: "none" }}>
        <Card
          key={dati.id}
          text={copy}
          title={dati.name}
          image={`${dati.thumbnail.path}.${dati.thumbnail.extension}`}
        />
      </Link>
    </div>
  );
};
export default SingleResult; 
