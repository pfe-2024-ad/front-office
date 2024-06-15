import "./UserDocument.css";
import React from 'react';
import FicheFatca from "../FicheFACTA/FicheFatca";

const UserDocument: React.FC = () => {
  return (
    <div className="centered-container-doc-x0"> 
    <div className="card-doc-x0">
      <div className="card-header-doc-x0"> 
        <h3 className="title-doc-x0">Mes documents complémentaires</h3>
        </div>
      <div className="card-doc-content-x0">
        <ol>
          <li>Veuillez consulter le guide téléchargeable ci-dessous pour vérifier si vous êtes soumis à la <br/>réglementation FATCA</li><br/>
          <li>Si oui, imprimez, renseignez et signez un des formulaires téléchargeable ci-dessous.</li><br/>
        </ol>
        </div>
        <FicheFatca/>
      </div>
    </div>
    
    );
    
};

export default UserDocument;