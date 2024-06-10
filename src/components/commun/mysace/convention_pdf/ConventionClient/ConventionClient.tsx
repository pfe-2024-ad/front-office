import React, { useEffect, useState } from 'react';
import './ConventionClient.css'
import RegisteredClient from '../registeredClient/RegisteredClient';
import TermsAcceptance from '../TermsAcceptance/TermsAcceptance';
import Condition from '../Conditions/Condition';



interface ConventionClientProps {
  setShowNavBar: (show: boolean) => void;
  donneesClient: any;

}

const ConventionClient: React.FC<ConventionClientProps> = ({ setShowNavBar,donneesClient }) => {  

  useEffect(() => {
    setShowNavBar(false);
    return () => setShowNavBar(true);
  }, [setShowNavBar]);

  return (
  
    <div className='convention-client' id='convention-com'>
     
    <RegisteredClient donneesClient={donneesClient}  />
    <TermsAcceptance/>
    <Condition/>
    </div>
  )
}

export default ConventionClient;