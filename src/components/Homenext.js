import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

function HomeNext() {
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

  const bookTicket = () =>{
    navigate("/formdata");
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
                <tbody>
                  <tr>
                  
                    <td style={{fontSize:"15px", fontWeight:"400", display:"flex"}}>{value.show.summary}</td>
                    <br/>
                  </tr>
                </tbody>
                <button className="btn btn-dark" onClick={bookTicket} style={{marginTop:"1vh"}}>
          Book Ticket
        </button>
              </table>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomeNext;
