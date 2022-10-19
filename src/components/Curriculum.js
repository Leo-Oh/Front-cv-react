import React from 'react';
import ImageProfile from './../images/profile.jpg';

import '../styles/Curriculum.css';

import { FaEnvelope, FaFilm, FaGamepad, FaLinkedin, FaMapMarker, FaMusic, FaPhone } from "react-icons/fa";

const Curriculum = () => {

  return (
    <div className="container">
    <div className="left_side">
        <div className="profileText">
            <div className="imgBox">
                <img src={ImageProfile} />
            </div>
            <h2>Leonardo Martinez
                <br/>
                <span>Ingeniero de Software</span>
            </h2>
        </div>
        <div className="contactInfo">
            <h3 className="title">
                Información de contacto
            </h3>
            <ul>
                <li>
                 
                    <FaPhone style={{color: 'white' }} aria-hidden='true'/>-
                    <span className="text"><a href="tel:+522711426743">+52 2711426743</a></span>
                </li>
                <li>
                    <FaEnvelope style={{color: 'white' }} aria-hidden="true"/>-
                    <span className="text"><a href="mailto:leonardo.m2349@gmail.com">leonardo.m2349@gmail.com</a></span>
                </li>
                <li>
                   
                    <FaLinkedin style={{color: 'white' }} aria-hidden="true"/>-
                    <span className="text"><a href="www.linkedin.com/in/se-leonardo-martinez">Leonardo Martinez</a></span>
                </li>
                <li>
                    <FaMapMarker style={{color: 'white',  }} aria-hidden="true"/>-
                    <span className="text">Córdoba, Ver.México</span>
                </li>
            </ul> 
        </div>
        <div className="contactInfo education">
            <h3 className="title">
                Educación
            </h3>
            <ul>
                <li>
                    <h5>2019 - Actualmente estudiando</h5>
                    <h4>Lic. Ingeniería de Software</h4>
                    <h4>Universidad Veracruzana</h4>
                </li>
                <li>
                    <h5>2019 - Actualmente estudiando</h5>
                    <h4>Inglés lectura y conversación</h4>
                    <h4>Universidad Veracruzana</h4>
                </li>
            </ul>
        </div>


        <div className="contactInfo language">
            <h3 className="title">
                Idiomas
            </h3>
            <ul>
                <li>
                    <span className="text">Inglés</span>
                    <span className="percent">

                        <div style={{width: "55%"}}></div>
                    </span>
                </li>
                <li>
                    <span className="text">Español</span>
                    <span className="percent">
                        <div style={{width: "90%"}}></div>
                    </span>
                </li>
            </ul>
        </div>
    </div>



    <div className="right_side">
        <div className="about">
            <h2 className="title2">Perfil</h2>
            <p>
                Mi nombre es Leonardo Daniel Montiel Martinez, actualmente me encuentro estudiando 
                la Licenciatura en Ingeniería de Software en la Universidad Veracruzana y estoy cursando 
                el 7 semestre. Tengo poca experiencia en el desarrollo de software en el mundo laboral, 
                pero me gusta aprender y poner en práctica las tecnologías que aprendo, busco mejorar constantemente
                mis habilidades y superarme a mí mismo.

            </p>
        </div>
        <div className="about">
            <h2 className="title2">Experiencia</h2>
            <div className="box">
                <div className="year_company">
                    <h5>Diciembre 2021 - Marzo 2021</h5>
                    <h5>Adesoft S.A. DE C.V</h5>
                </div>
                <div className="text">
                    <h4>Junior Fronted</h4>
                    <p>Desarrollador fronted usando el framework angular 10 para el desarrollo de un modulo para una aplicación web ecomercer, con funciones basicas tipo CRUD.</p>
                </div>
            </div>
            <div className="box">
                <div className="year_company">
                    <h5>Junio 2022 - Actualmente</h5>
                    <h5>Aiar</h5>
                </div>
                <div className="text">
                    <h4>Junior Full Stack</h4>
                    <p>Desarrollador Junior Full Stack elaborando aplicación web ecomerce, embebiendo aplicación web en aplicación movil, uso de sistema operativo linux y manejo de repositorios.</p>
                </div>
            </div>
        </div>

        <div className="about skills">
            <h2 className="title2">Habilidades Profesionales</h2>
            <h5>Lenguajes de programación</h5>
            <div className="box">
                <h4>Java</h4>
                <div className="percent">
                    <div style={{width:"70%"}}></div>
                </div>
            </div>
            <div className="box">
                <h4>Python</h4>
                <div className="percent">
                    <div style={{width:"50%"}}></div>
                </div>
            </div>
            <div className="box">
                <h4>JavaScript</h4>
                <div className="percent">
                    <div style={{width:"55%"}}></div>
                </div>
            </div>
            <h5>Gestores de base de datos</h5>
            <div className="box">
                <h4>PostgreSQL</h4>
                <div className="percent">
                    <div style={{width:"60%"}}></div>
                </div>
            </div>
            <div className="box">
                <h4>MySQL</h4>
                <div className="percent">
                    <div style={{width:"60%"}}></div>
                </div>
            </div>
            <div className="box">
                <h4>MongoDB</h4>
                <div className="percent">
                    <div style={{width:"20%"}}></div>
                </div>
            </div>
        </div>

        <div className="about interest">
            <h2 className="tile2">Intereses</h2>
            <ul>
                <li>
                    <FaGamepad style={{color: 'blue' }} aria-hidden="true"/>
                    Videojuegos
                </li>
                <li>
                    <FaMusic style={{color: 'blue' }} aria-hidden="true"/>
                    Música
                </li>
                <li>
                    <FaFilm style={{color: 'blue' }} aria-hidden="true"/>
                    Peliculas
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};


export default Curriculum;
