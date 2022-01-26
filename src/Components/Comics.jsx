import Card from './Card'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  REACT_APP_ts,
  REACT_APP_md5,
  REACT_APP_key_public,
} from "../Components/ApiKey";
import '../Style/style.css'

const Comics=({name, link})=>{
  
     const [items, setItems] = useState([]);
     const [copy, setCopy] = useState("");


    useEffect(() => {
      const fetch = async () => {
        
        try {
          const marvelData = await axios.get(
            `${link}?ts=${REACT_APP_ts}&apikey=${REACT_APP_key_public}&hash=${REACT_APP_md5}`
          );
          setCopy(marvelData.data.copyright);
           setItems(marvelData.data.data.results);
          
        } catch (errore) {
          console.log(errore);
        }
      };
      fetch();
    }, [link]);

    return (
      <div className="comics">
        {items.map((comic, i) => (
          <Link
            to={`/comic/${comic.id}`}
            style={{ textDecoration: "none", color: "black" }}
            key={name}
          >
            <Card
              title={name}
              text={copy}
              image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            />
          </Link>
        ))}
      </div>
    );
}
export default Comics;