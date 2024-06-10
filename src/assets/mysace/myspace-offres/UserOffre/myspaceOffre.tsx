import React from 'react';
import ProduitService from '../offres-composants/Produit-et-service/ProduitService';
import MyspaceText from '../../myspace-text/myspaceText';
import MyspaceNavbar from '../../myspace-navbar/myspaceNavbar';
import './myspaceOffre.css'

const MyspaceOffre: React.FC = () => {
  return (
    <div className="container-background-x0">
      <div className="setColorbackg-x0">
        <div className="center-content-x0">
        <h1 className="welcome-mess-user-x0 ">Bonjour MockedFirstName</h1>
      <p className="welcome-mess-x0">Bienvenue sur votre espace personnel de demande d'ouverture de compte BANK OF AFRICA</p>
      </div>
      </div>
      
      <div className="header-style-x0"><MyspaceNavbar/></div>
      <ProduitService/>
      <MyspaceText/>
      <div className="empty-space-x0"></div>
    </div> 
    
  );
};

export default MyspaceOffre;