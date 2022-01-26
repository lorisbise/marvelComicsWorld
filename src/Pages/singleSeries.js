/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "../Components/Alert";
import DettailsSerie from "../Components/DettailsSerie";
import {
  REACT_APP_ts,
  REACT_APP_md5,
  REACT_APP_key_public,
} from "../Components/ApiKey";


const singleSerie = () => {
  const [items, setItems] = useState([]);
  const [copy, setCopy] = useState("");

  let params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetch = async () => {
      try {
        const marvelData = await axios.get(
          `https://gateway.marvel.com:443/v1/public/series/${id}?&ts=${REACT_APP_ts}&apikey=${REACT_APP_key_public}&hash=${REACT_APP_md5}`
        );
        setCopy(marvelData.data.copyright);
        setItems(marvelData.data.data.results);
      } catch (error) {
        <Message
          variant="danger"
          text={"An error has occurred, please try again later"}
        />;
      }
    };
    fetch();
  }, [id]);

  return (
    <div>
      {items.map((item, i) => (
        <DettailsSerie key={i} item={item} copy={copy} />
      ))}
    </div>
  );
};
export default singleSerie;
