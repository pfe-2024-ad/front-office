import React from 'react';
import './TermsAcceptance.css';
import conventionLogoBmce from '../../../../../assets/bmce-logo.png';

const TermsAcceptance : React.FC = () => {
  return (
    <>
         
         <img style={{ width: "140px", position: "absolute", left: "40px", top: "1000px"}} src={conventionLogoBmce}  alt="bmce logo" />
         <div className="container-Termsacccep">
    Je déclare avoir pris connaissance et accepte que :<br/>
    • Toute délivrance de moyen de paiement (carte, chéquier),<br/>
    • Tout mouvement au débit de mon compte,<br/>
    • Toute opération à effectuer sur le site BMCE DIRECT, à l’exception de la consultation de mon compte <br/>
    et des opérations au crédit, ne pourront être effectués qu’après cet entretien et signature d'un document <br/> 
    complémentaire relatif au compte bancaire.<br/>
    • Au moment de l’entretien, je dois être muni des originaux des documents d’identité et justificatifs d’adresse <br/>
    dont les copies vous ont été envoyées. » <br/>
    Dans le cas où ces formalités ne sont pas accomplies dans un délai maximum de 6 mois si vous êtes résident <br/>
    au Maroc, ou dans un délai de 12 mois maximum si vous êtes marocain résidant à l'étranger, à partir de la <br/>
    date des présentes, BANK OF AFRICA pourra procéder à la clôture de ce compte sans préavis ni formalité <br/>
    aucune
   </div> 
   <div className="center-to-the-left">
    <div>
       <div className="text-Termsacccep">SIGNATURE DU SOUSCRIPTEUR</div>
   <div className="lu-approuvé-titre-terms">LE / / <br/> PRÉCÉDÉ DE LA MENTION « LU ET APPROUVÉ »</div>          
   <div className="lu-approuvé-terms"></div> 
   <div className="initials-title-Termsacccep">MERCI DE PARAPHER DE VOS INITIALES</div>
   <div className="initials-Termsacccep"></div> 
    </div>
  
   </div>
  
    </>  
  );
};

export default TermsAcceptance;