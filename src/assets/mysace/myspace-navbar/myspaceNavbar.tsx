
import "./myspaceNavbar.css";
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

const myspaceNavbar: React.FC = () => {
  return (
    
    <div className="tab-container-x0">
      <div className="tab-x0">       
      <Link to="/my-space-offre">
      <span className="tab-link-x1">Mon offre</span>
      </Link>
      <Link to ="/my-space-documents">
      <span className="tab-link-x2">Mes documents</span> 
      </Link>
    </div>
    </div>    
  );
};

export default myspaceNavbar;