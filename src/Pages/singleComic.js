/* eslint-disable react-hooks/rules-of-hooks */

 import axios from "axios";
 import { useEffect, useState } from "react";
 import { useParams} from "react-router-dom";
 import {
   REACT_APP_ts,
   REACT_APP_md5,
   REACT_APP_key_public,
 } from "../Components/ApiKey";
 import Message from "../Components/Alert";
 import DettailsComic from '../Components/DettailsComic'


const singleComic = () => {

    const [items, setItems] = useState([]);
    const [copy, setCopy] = useState("");
  

    let params= useParams()
    const id= params.id

    useEffect(() => {
      const fetch = async () => {
        try {
          const marvelData = await axios.get(
            `https://gateway.marvel.com:443/v1/public/comics/${id}?&ts=${REACT_APP_ts}&apikey=${REACT_APP_key_public}&hash=${REACT_APP_md5}`
          );
          setCopy(marvelData.data.copyright);
          await setItems(marvelData.data.data.results);
        } catch (error) {
          
            <Message
              variant="danger"
              text={"An error has occurred, please try again later"}
            />
          
        }
      };
      fetch();
    }, [id]);
    

  return (<div>
      
      {items.map((item, i) => (
        <DettailsComic key={i} item={item} copy={copy} />
      )
    
      
      )}
      
    </div>
      
  );
        
  
};
export default singleComic;
