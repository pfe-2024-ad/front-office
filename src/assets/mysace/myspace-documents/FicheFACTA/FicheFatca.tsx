import "./FicheFatca.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'


const FicheFatca: React.FC = () => {
  return (
    <div className="centered-container-fiche-x0">
      <div className="card-for-fiche-x0">
        <h3 className="card-fiche-title-x0"><b>Ma fiche FATCA</b></h3>
        <p className="card-fiche-message-x0">Veuillez charger le formulaire renseigné ici</p>
      <button className="card-fiche-button-x0" >
      <FontAwesomeIcon icon={faCloudArrowUp} />  <div className="charger-fiche">Charger ma pièce jointe </div>
        </button>
      </div>
    </div>  
    
  );
};

export default FicheFatca;