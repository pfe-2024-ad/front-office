import React, { useEffect, useState } from 'react';
import {getClient} from '../../../../ApiService';
import './greetingClient.css';

interface typeDonnees {
    prenom: string|undefined ;
  }

const GreetingClient = () => {
    
    const [donneesClient, setDonneesClient] = useState<typeDonnees>
    ({  prenom: ''});
  
    useEffect(() => {
      getClient()
          .then(data =>{
              setDonneesClient({  
                  prenom: data.prenom,
              });
          })
          .catch(error => console.error(error));
  }, []);
  return (
        <div className="setColorbackg-x0">
           <div className="center-content-x0">
           <h1 className="welcome-mess-user-x0 ">Bonjour {donneesClient.prenom}</h1>
           <p className="welcome-mess-x0">Bienvenue sur votre espace personnel de demande d'ouverture de compte BANK OF AFRICA</p>
           </div>
        </div> 
  )
}

export default GreetingClient;