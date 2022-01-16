import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-detailes">
          <div className="colz">
              <div className="colz-icon">            
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>
        
        <div className="profile-details-name">
            <span className="primary-text">
                {" "}
                Hola, Soy <span className="highlighted-text">Jorge Carlotto</span>
            </span>
        </div>
        <div className="profile-details-role">
            <span className="primary-text">
                {" "}
                <h1>
                   {" "}
                   <Typical 
                   loop ={Infinity}
                   steps={[
                       "Desarrollador Junior 🚀",
                       1000,
                       "Full Stack Developer 💻 ",
                       1000,
                       "Node Js Dev 🤓",
                       1000,
                       "React Dev 😎",
                       1000,
                   ]}
                   /> 
                </h1>
                <span className="profile-role-tagline">
                lorem ipsum dolor sit amet, consectetur adip.
                </span>
            </span>
        </div>
        <div className="profile-options">
            <button className="btn primary-btn">
                {" "}
                Contactame{" "}
            </button>
            <a href="Cv-Jorge Carlotto.pdf" download="Cv-Jorge Carlotto.pdf">
                <button className="btn highlighted-btn">Mi Curriculum</button>
            </a>
        </div>
        </div>
        <div className="profile-picture">
            <div className="profile-background"></div>     
        </div>
      </div>
    </div>
  );
}
