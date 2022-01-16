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

const Characters = ({ name, link }) => {


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState("true");
  const [errore, setErrore] = useState("");
  const [copy, setCopy] = useState("");
  console.log(loading);
  console.log(errore);
  useEffect(() => {
    const fetch = async () => {
      setLoading("true");
      try {
        const marvelData = await axios.get(
          `${link}?ts=${REACT_APP_ts}&apikey=${REACT_APP_key_public}&hash=${REACT_APP_md5}`
        );
        setCopy(marvelData.data.copyright);
        await setItems(marvelData.data.data.results);
        setLoading("false");
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
      {items.map((characters, i) => (
        <Link
          to={`/hero/${characters.id}`}
          
        >
          <Card
            key={i}
            title={name}
            text={copy}
            image={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
          />
        </Link>
      ))}
    </div>
  );
};
export default Characters;
