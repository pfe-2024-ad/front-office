
import "./myspaceNavbar.css";
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import PackName from "../../../../enums/PackName";
import { getClient } from "../../../../ApiService";

interface typeDonnees {
  pack: PackName|undefined;
}

const MyspaceNavbar: React.FC = () => {

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

export default MyspaceNavbar;