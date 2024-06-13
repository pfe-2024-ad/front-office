import React from 'react';
import {useState, useEffect} from 'react';
import ProduitService from '../offres-composants/Produit-et-service/ProduitService';
import MyspaceText from '../../myspace-text/myspaceText';
import MyspaceNavbar from '../../myspace-navbar/myspaceNavbar';
import GreetingClient from '../../greetingClient/greetingClient';
import './myspaceOffre.css'


const MyspaceOffre: React.FC = () => {
  
  return (
    <div className="container-background-myspace">
      <GreetingClient/>
      <div className="header-style-myspace"><MyspaceNavbar/></div>
      <ProduitService/>
      <MyspaceText/>
      <div className="empty-space-myspace"></div>
    </div> 
    
  );
};

export default MyspaceOffre;