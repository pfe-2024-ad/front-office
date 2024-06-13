import React, { useEffect, useState } from 'react';
import RIB from '../RIB/RIB';
import Convention from '../convention/convention';
import  './ProduitService.css';
import Pack from '../Pack/pack';
import PackName from '../../../../../../enums/PackName';
import { getClient } from '../../../../../../ApiService';
import CompteService from '../../compte-service/CompteService';
import ProduitServiceSupl from '../../compte-service/ProduitServiceSupl';

interface typeDonnees {
  pack: PackName | undefined;
}

const ProduitService: React.FC = () => {
  
    const [donneesClient, setDonneesClient] = useState<typeDonnees>({
      pack: undefined
    });

    useEffect(() => {
      getClient()
        .then(data => {
          setDonneesClient({
            pack: data.pack,
          });
        })
        .catch(error => console.error(error));
    }, []);
    async function getData() {
      try {
          const data = await getClient();
          return {
            nom: data.nom,
            prenom: data.prenom,
            dateNaissance: data.dateNaissance,
            cin: data.cin,
            adresseResidence: data.adresseResidence,
            ville: data.ville,
            email: data.email,
            tel: data.phone,
            pack: data.pack,
            adressAgence: data.agence
        };
      } catch (error) {
        console.error('hh');  
      }
    }
    
  return (
    <div >
      {donneesClient.pack ?  ( // If pack exists and is not null
      <div className="product-services-card-x0">
       <h3  className="title-service-x0">Mes produits et services souscris</h3>
        <h4 className="title-pack-x0">Mes packs</h4>
        <Pack/>
        <Convention/>   
        <h4 className="title-info-x0">Information de mon compte</h4> 
        <RIB/>
      </div>
       
        ) : ( // If pack is null
        <div className="product-services-card-x1">
        <h3  className="title-service-cpt-uni">Mes produits et services souscris</h3>
        <h4 className="title-pack-cpt-uni-inf">Information de mon compte</h4>
        <div className="cpt-service"><CompteService selectedOption={undefined}/></div>
        <h4 className="title-pack-cpt-uni-ps">Mes produits et services souscris</h4>
        <div className="service-cpt-uni"><ProduitServiceSupl/></div>
        <div className="convention-cpt-uni"><Convention /></div> 
        <h4 className="title-info-cpt-info">Information de mon compte</h4> 
        <div className="cpt-uni-rib"><RIB/></div>
        </div>
    )}
      </div>   
  );
};

export default ProduitService;