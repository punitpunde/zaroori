import React from "react";
import "./nav_bar.css";
function NavBar() {
  return (
    <div className="container header-container">
      <div className="row header d-flex justify-content-center ">
        <div className="col-12 text-center align-items-center top-header">
          <img
            className="logo d-inline-block pb-3"
            src="/assets/images/logo.jpg"
            alt="logo"
          />
          <h1 className="d-inline-block title fs-1 ps-3 pt-1">Zaroori</h1>
        </div>

        <div className="col-12 row p-0  down-header">
          <div className="col-lg-2 col-md-4 col-sm-6 link-container d-flex justify-content-center align-items-center">
            <a href="">Bollywood</a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 link-container d-flex justify-content-center align-items-center">
            <a href="">New</a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 link-container d-flex justify-content-center align-items-center">
            <a href="">Popular</a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 link-container d-flex justify-content-center align-items-center">
            <a href="">Punjabi</a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 link-container d-flex justify-content-center align-items-center">
            <a href="">Artist</a>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 link-container d-flex justify-content-center align-items-center">
            <a href="">Devotional</a>
          </div>
        </div>

        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center search-box-container">
          <input
            type="text"
            placeholder="Search here..."
            name="search"
            className="search-box"
          />
          <button className="search-btn">Search</button>

          <div className="dropdown ms-5 ">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search Movie Album 
          </a>

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                2015
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
               2016
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2017
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2018
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2019
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2020
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2020
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2022
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2022
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2023
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                2024
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
