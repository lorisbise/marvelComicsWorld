import Input from "../Components/input";
import Button from "../Components/btn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useState, useEffect } from "react";
import Results from "../Components/Result";
import style from "../Style/Spinner.module.css";

import ReactPaginate from "react-paginate";
import Message from "../Components/Alert"


const Home = () => {
  const [heroesIn, setHeroesIn] = useState("");
  const [errore, setErrore] = useState("");
  const [item, setItem] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(20);
  const ts = process.env.REACT_APP_ts;
  const key_public = process.env.REACT_APP_key_public;
  const md5 = process.env.REACT_APP_md5; 
  

  //fetch data characters
  useEffect(() => {
    setloading(true);
    const fetch = async () => {
      try {
        const marvelData = await axios.get(
          `https://gateway.marvel.com:443/v1/public/characters?limit=25&offset=0&ts=${ts}&apikey=${key_public}&hash=${md5}`
        );
        setItem(marvelData.data);
        setloading(false);
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

  },[ts, key_public, md5]);

  //Valore inserito dall'utente
  const valueInOnChange = (e) => {
    setHeroesIn(e.target.value);
  };

 

  //fetch data richiesta utente
  const search = async () => {
    try {
      const marvelData = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroesIn}&orderBy=name&limit=100&offset=0&ts=${ts}&apikey=${key_public}&hash=${md5}`
      );
      setItem(marvelData.data);
      setloading(false);
    } catch (errore) {
      setErrore(<Message variant="danger" text={"An error has occurred, please try again later"} />);
    }
  };

  const fetchSelected = async (selected) => {
    
    let currentPage = 0;
    currentPage = selected * 25;
    const marvelData = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=25&offset=${currentPage}&ts=${ts}&apikey=${key_public}&hash=${md5}`
    );
    setPage(Math.floor(item.data.total / 25));
    setloading(false);
    return marvelData.data;
  };

  const handlePage = async (data) => {
    
    let selected = data.selected;
    const fetchPage = await fetchSelected(selected);
    setItem(fetchPage);

  };

  return (
    <div>
      {loading ? (
        <div className={style.loader}></div>
      ) : (
        <Container style={{ marginTop: "20px",  }}>
          <Row >
            <Input
              placeholder="Enter super hero name"
              onChange={valueInOnChange}
            />
          </Row>
          <Row>
            <Button variant="dark" text="Cerca" onClick={search} />
          </Row>
          {errore}
          {heroesIn !== "" ? null : (
            <div style={{ marginTop: "30px", marginBottom: "30px", color: 'black' }}>
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={page}
                marginPagesDisplay={1}
                pageRangeDisplay={1}
                onPageChange={handlePage}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                activeLinkClassName={"page-link"}
              />
            </div>
          )}

          <Results
            copy={item.copyright}
            items={item}
            loading={loading}
            error={errore}
          />
          {heroesIn !== "" ? null : (
            <div style={{ marginTop: "30px", marginBottom: "30px" }}>
              <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={page}
                marginPagesDisplay={6}
                pageRangeDisplay={6}
                onPageChange={handlePage}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                activeLinkClassName={"page-link"}
              />
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Home;
