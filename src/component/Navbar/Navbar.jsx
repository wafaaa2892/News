import React from 'react'
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top opacity-75">
        <div className="container-fluid fixed-top bg-dark">
            <Link className="navbar-brand text-white ps-5" to="#"><h2 className={`${style.logo}`}>News</h2></Link>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ms-auto">
                <li className="nav-item pe-5">
                <Link className="nav-link active text-white" aria-current="page" to="">Sports</Link> 
                </li>
                <li className="nav-item pe-5">
                <Link className="nav-link text-white" to="business">Business</Link>
                </li>
                <li className="nav-item pe-5">
                <Link className="nav-link text-white" to="science">Science</Link>
                </li>
                <li className="nav-item pe-5">
                <Link className="nav-link text-white" to="health">Health</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        {/* <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> */}


{/* <nav ClassName="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div ClassName="container-fluid">
    <link ClassName="navbar-brand" at="#" />Wafaa
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon" />
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div ClassName="navbar-nav">
        <link ClassName="nav-link active" aria-current="page" at="#">Home</link>
        <link ClassName="nav-link" to="#">Features</link>
        <link ClassName="nav-link" to="#"></link>
        <link ClassName="nav-link disabled" to="#" tabIndex={-1} aria-disabled="true">Disabled</link>
      </div>
    </div>
  </div>
</nav> */}


    </>
}
