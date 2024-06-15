import React from 'react';
import RIB from '../RIB/RIB';
import Convention from '../convention/convention';
import  './ProduitService.css';


const myspaceOffre: React.FC = () => {
  return (
    <div className="product-services-card-x0">
        <h3  className="title-service-x0">Mes produits et services souscris</h3>
        <h4 className="title-pack-x0">Mes packs</h4>
        
        <Convention />   
        <h4 className="title-info-x0">Information de mon compte</h4> 
        <RIB/>
      </div>   
  );
};

export default myspaceOffre;