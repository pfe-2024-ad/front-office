import React from 'react';
import { Link } from "react-router-dom";
import MyspaceText from "./myspace-text/myspaceText";
import "./myspace.css";

const myspace: React.FC = () => {
  return (
    <div className="homePage-background-myspace">
        <div className="home-container-myspace">
      <h3 className="home-title-myspace">Bienvenue chez BANK OF AFRICA</h3>
       <p className="home-text-myspace">
        Nous avons le plaisir de vous compter parmis nos clients.<br/> Votre demande d'ouverture de compte est bien reçue.Elle sera finalisée à la suite du redez-vous en visio <br/>
       conférence avec un de nos conseillers.<br/>Vous pourrez procéder à la signature électronique de vos contrats
       durant cet appel ou ultérieurement.<br/>Vous pourrez ensuite profiter pleinement de votre compte.
       </p>
      
      {/*naviguer vers la page 'myspaceOffre' */}
      <Link to="/my-space-offre">
      <button className="card-button4-myspace">Terminer</button>
      </Link>
      </div>
      <div className="homePage-text-myspace"><MyspaceText/></div>     
    </div> 
  );
};

export default myspace;