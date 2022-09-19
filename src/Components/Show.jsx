import React, { useState, useEffect } from "react";
import "../App.css";
import '@fontsource/roboto/300.css';



function Actor() {
    const [inputVal, setInputVal] = useState("");
    const [showData, setshowData] = useState([]);

    let dataUrl = "";
    if (inputVal.length > 0) {
        dataUrl = `https://api.tvmaze.com/search/shows?q=${inputVal}`;
    } 
    
   
    const getshowData = async () => {
        try {
            let respone = await fetch(dataUrl);
            let resData = await respone.json();
            setshowData(resData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getshowData();
    }, [inputVal]);
    console.log(showData);
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
                                placeholder="Search by Show name...."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-4">
                    <div className="row">
                        {showData.map((element) => {
                            return (
                              <div className="col-md-3 mb-3">
                                <div className="card">
                                  <a href={element.show.url} target="_blank">
                                  {element.show.image ? (
                                    <img
                                      src={element.show.image.medium}
                                        style={{
                                          height: "32vh", width: "16vw", marginLeft:"1.3vw", marginTop:"1vh"
                                        }}
                                      alt={
                                        element.show.name != null
                                          ? element.show.name
                                          : "Not found"
                                      }
                                    />
                                  ) : (
                                    <div
                                      className="poster"
                                      style={{ height: "32vh", width: "16vw" , marginLeft:"1.3vw", marginTop:"1vh" }}
                                    >
                                      <img
                                        src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                                        style={{
                                          height: "32vh", width: "20vw"
                                        }}
                                        alt = {element.show.name}
                                      />
                                    </div>
                                  )}
                                  </a>
                                  <div className="card-body">
                                     
                                     {/* <paragraph
                                      className="card-text overflow-hidden"
                                      style={{ height: "10px", width:"19px" }} >
                                      {element.show.summary}
                                    </paragraph>  */}
                                    <span>
                                      <i
                                        class="fa fa-star text-success"
                                        aria-hidden="true"
                                      ></i>{" "}
                                      {element.show.rating.average}
                                    </span>
                                  </div>

                                  <h5 className="text-danger text-center"
                                  style={{height:"auto"}}>
                                    {element.show.name}
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
