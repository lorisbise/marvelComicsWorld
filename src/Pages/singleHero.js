import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatailsHero from "../Components/DetailsHero";
import {
  REACT_APP_ts,
  REACT_APP_md5,
  REACT_APP_key_public,
} from "../Components/ApiKey";
import Message from "../Components/Alert";


const SingleHero = () => {
  let params = useParams();
  const id = params.id;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState('true')
  const [errore, setErrore] = useState("");
  const [copy, setCopy] = useState('')
  console.log(loading + errore);
  
  useEffect(() => {
    const fetch = async () => {
      try {
        const marvelData = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?&ts=${REACT_APP_ts}&apikey=${REACT_APP_key_public}&hash=${REACT_APP_md5}`
        );
          setCopy(marvelData.data.copyright);
          setItems(marvelData.data.data.results);
          setLoading('false')
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
  }, [id]);

  return (<>
    {items.map(item =>
                  <DatailsHero  item={item} copy={copy} key={item.id} />

            )
                
      }
    
    </>
    
  );
  
};

export default SingleHero;
