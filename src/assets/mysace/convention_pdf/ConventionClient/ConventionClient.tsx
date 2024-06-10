import React, { useEffect } from 'react';
import './ConventionClient.css'
import RegisteredClient from '../registeredClient/RegisteredClient';
import TermsAcceptance from '../TermsAcceptance/TermsAcceptance';
import Condition from '../Conditions/Condition';



const ConventionClient : React.FC <{ setShowNavBar: (show: boolean) => void }> = ({ setShowNavBar }) => {
   
  useEffect(() => {
    setShowNavBar(false);
    return () => setShowNavBar(true);
  }, [setShowNavBar]);

  
  return (
  
    <div className='convention-client' id='convention-com'>
     
    <RegisteredClient/>
    <TermsAcceptance/>
    <Condition/>
    </div>
  )
}

export default ConventionClient;