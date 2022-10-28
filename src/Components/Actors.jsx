import React, { useState, useEffect } from "react";
import "../App.css";
import '@fontsource/roboto/300.css';


function Actor() {
  const [inputVal, setInputVal] = useState("");
  const [actorsData, setActorsData] = useState([]);

  let dataUrl = "";
  if (inputVal.length > 0) {
    dataUrl = `https://api.tvmaze.com/search/people?q=${inputVal}`;
  } 
  


  

  const getActorsData = async () => {
    try {
      let respone = await fetch(dataUrl);
      let resData = await respone.json();
      setActorsData(resData);
      console.log(resData)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(()=>{
      getActorsData()
    },2000)
  }, [inputVal]);
  // console.log(actorsData);
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="form-control"
                placeholder="Search by Actors name...."
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-4">
          <div className="row">
            {actorsData.map((element) => {
              return (
                <div className="col-md-3 mb-3">
                  <div className="card">
                    <a href={element.person.url} target="_aayush">
                    {element.person.image ? (
                      <img
                        src={element.person.image.medium}
                        className="poster"
                        style={{ width: "16vw", height: "34vh" ,marginLeft:"1.3vw" }}
                        alt={
                          element.person.name != null
                            ? element.person.name
                            : "Not found"
                        }
                      />
                    ) : (
                      <div className="poster" style={{ height: "27vh", width: "16vw" , marginLeft:"1.3vw" }}>
                        <img
                          src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                          style={{ width: "20vw", height: "30vh" }}
                          alt = "Not Found"
                        />
                      </div>
                    )}
                    </a>
                    <div className="card-body">
                      <p
                        className="card-text overflow-hidden"
                        style={{ height: "15vh" , width: "20vw" }}
                      >
                        <h3 >{actorsData.name}</h3>
                      </p>
                    </div>
                    <h5 className="text-danger text-center">
                      {element.person.name}
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Actor;
