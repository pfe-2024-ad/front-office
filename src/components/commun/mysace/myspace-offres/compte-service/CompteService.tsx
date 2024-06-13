import React, { FC, useEffect, useState } from 'react'
import './CompteService.css'
import PackOffres from '../../../../../enums/PackOffres';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import  PackName from '../../../../../enums/PackName'
import { getClient } from '../../../../../ApiService';
import Services from '../../../../../enums/Services';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale'; 

interface typeDonnees {
  pack: PackName|undefined;
  packOffre: PackOffres | undefined;
  service : Services | undefined;
  dateCreation: string | undefined;
}

const CompteService: FC<{ selectedOption: string | undefined }> = ({selectedOption}) =>{

  const [donneesClient, setDonneesClient] = useState<typeDonnees>
  ({ pack: undefined, packOffre: undefined, service: undefined, dateCreation: undefined});

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


    let displayText: string;

    switch (donneesClient.packOffre) {
        case PackOffres.CHEQUE_DH :
          displayText = "Compte chèque en Dhs";
          
          break;
        case PackOffres.DHS_CONV:
          displayText = "Compte chèque en Dhs convertible";
          break;
          
        case PackOffres.DEVISES:
          displayText = "Compte en devises";

          break;
        default:
          displayText = ""; 
      }
      
  return (
      <div className="centered-container1-myspace"> 
      <div className="card1-myspace">
        <h6 className="card1-header-myspace">{displayText}</h6>
        <p className="card1-info-myspace" >Activé le {formatDate(donneesClient.dateCreation)} <FontAwesomeIcon icon={faCircleCheck} /></p>
      </div>
      </div>

  )
}

export default CompteService