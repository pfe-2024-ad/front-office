
import "./myspaceNavbar.css";
import React, { useEffect, useState } from 'react';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import PackName from "../../../enums/PackName";
import { getClient } from "../../../ApiService";

interface typeDonnees {
  pack: PackName|undefined;
}

const myspaceNavbar: React.FC = () => {

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
  if (donneesClient.pack) {
    navigate('/my-space-offre');
  } else {
    navigate('/my-space-compte-unitaire-offre');
  }
};

  return (
    
    <div className="tab-container-x0">
      <div className="tab-x0">       
      <span className="tab-link-x1" onClick={handleTerminerClick}>Mon offre</span>
      <Link to ="/my-space-documents">
      <span className="tab-link-x2">Mes documents</span> 
      </Link>
    </div>
    </div>    
  );
};

export default myspaceNavbar;