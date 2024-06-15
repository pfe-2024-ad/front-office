import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import MyspaceText from "./myspace-text/myspaceText";
import "./myspace.css";
import PackName from '../../../enums/PackName';
import { getClient } from '../../../ApiService';

interface typeDonnees {
  pack: PackName|undefined;
}

const Myspace: React.FC = () => {
  
  const [donneesClient, setDonneesClient] = useState<typeDonnees>
  ({ 
       pack: undefined
  });
  
  useEffect(() => {
    getClient()
        .then(data =>{
            setDonneesClient({
                pack: data.pack,
            });
        })
        .catch(error => console.error(error));
}, []);

const navigate = useNavigate();

const handleTerminerClick = () => {
  
    navigate('/my-space-offre');
  
};

  return (
    <div className="homePage-background-myspace">
        <div className="home-container-myspace">
     <span  style={{color:"#007bff "}} className="fas fa-solid fa-circle-check" ></span>
      <h3 className="home-title-myspace">Bienvenue chez BANK OF AFRICA</h3>
       <p className="home-text-myspace">
        Nous avons le plaisir de vous compter parmis nos clients.<br/> Votre demande d'ouverture de compte est bien reçue.Elle sera finalisée à la suite du redez-vous en visio <br/>
       conférence avec un de nos conseillers.<br/>Vous pourrez procéder à la signature électronique de vos contrats
       durant cet appel ou ultérieurement.<br/>Vous pourrez ensuite profiter pleinement de votre compte.
       </p>
      
   
    
      <button className="card-button4-myspace"  onClick={handleTerminerClick}>Terminer</button>

      </div>
      <div className="homePage-text-myspace"><MyspaceText/></div>     
    </div> 
  );
};

export default Myspace;