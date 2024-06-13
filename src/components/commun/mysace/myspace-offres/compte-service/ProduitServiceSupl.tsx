import React, { useEffect, useState } from 'react'
import './ProduitServiceSupl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import PackName from '../../../../../enums/PackName';
import PackOffres from '../../../../../enums/PackOffres';
import Services from '../../../../../enums/Services';
import { getClient } from '../../../../../ApiService';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale'; 

interface typeDonnees {
  pack: PackName|undefined;
  packOffre: PackOffres | undefined;
  service : Services | undefined;
  dateCreation: string | undefined;
}

const ProduitServiceSupl: React.FC =()=> {

  const [donneesClient, setDonneesClient] = useState<typeDonnees>
  ({pack: undefined, packOffre: undefined, service: undefined, dateCreation: undefined});

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return format(date, 'dd MMMM yyyy', { locale: fr });
  };

  useEffect(() => {
    getClient()
        .then(data =>{
            setDonneesClient({
                pack: data.pack,
                packOffre : data.packOffre,
                service: data.service,
                dateCreation: data.dateCreation
            });
        })
        .catch(error => console.error(error));
}, []);

let displayService: string;

switch (donneesClient.service) {
    case Services.CARNET:
      displayService = "Compte sur carnet";

      break;
    case Services.DABA_TRANSFER:
      displayService = "DabaTransfer - Application de Transfert de BMCE EuroServices";

      break;
    case Services.SALAMA:
      displayService = "Salama (assistance)";
      
      break;
    default:
      displayService = ""; 
  }
  
  return (
    <div className="centered-container2-myspace"> 
    <div className="card2-myspace">
      <h6 className="card2-header-myspace">{displayService}</h6>
      <p className="card2-info-myspace" >Activé le {formatDate(donneesClient.dateCreation)} <FontAwesomeIcon icon={faCircleCheck} /></p>
    </div>
    </div>
  )
}

export default ProduitServiceSupl