import React from "react";
import "../App.css"
import '@fontsource/roboto/300.css';




function NavBar() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="container">
              <h1 className="text-success text-center">
              <img src="https://static.tvmaze.com/images/tvm-header-logo.png" alt="Tv-Maze" />
              </h1>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
