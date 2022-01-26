import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  REACT_APP_ts,
  REACT_APP_md5,
  REACT_APP_key_public,
} from "../Components/ApiKey";
import Message from "../Components/Alert";

const Characters = ({ name, link}) => {
  const [items, setItems] = useState([]);
  const [errore, setErrore] = useState("");
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
        setErrore(
          <Message
            variant="danger"
            text={"An error has occurred, please try again later"}
          />
        );
      }
    };
    fetch();
  }, [link]);

  
  return (
    <div>
      {items.map((characters) => (
        <Link to={`/hero/${characters.id}`} key={characters.id} style={{textDecoration: 'none', color: 'black'}}>
          <Card
            title={name}
            text={copy}
            image={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
          />
        </Link>
      ))}
      {errore}
    </div>
  );
};
export default Characters;
