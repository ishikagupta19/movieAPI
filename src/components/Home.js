import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getNews = async() => {
    const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=all"
      )
      .then((response) => response.json());

      setData(response);
  };
  useEffect(() => {
    getNews();
  }, []);
  const getDetails = () =>{
    navigate("/homenext");
  }
  return (
    <>
      
      <div className="container">
        <div className="row">
          {data && data.map((value) => {
            return (
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style={{fontSize:"20px", paddingTop:"5vh", fontWeight:"900"}}>{value.show.name}</th>
                  </tr>
                </thead>
               
                <button className="btn btn-dark" onClick={getDetails} style={{marginTop:"2vh"}}>
          Fetch Summary details
        </button>
              </table>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
