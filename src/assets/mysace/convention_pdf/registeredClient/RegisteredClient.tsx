import React from 'react';
import conventionLogo from '../../../../../assets/bmce-logo.png'
import './RegisteredClient.css';



const RegisteredClient: React.FC = () => {
    
  return (
    <>
     <img style={{ width: "140px", position: "absolute", left: "40px", top: "-25px"}} src={conventionLogo}  alt="bmce logo" />
    <div className="container-conv"  id="page1-content">
    
    <div className="title-conv">Produit souscrit : Compte bancaire</div> <br/><br/>
    
    <div className="text1-conv">
        <b>Entre les soussignés</b><br/>
    Entre les soussignés BANK OF AFRICA, Société anonyme au capital de 2.087.698.270 Dirhams, dont le siège social est à Casablanca, 140 Avenue Hassan II, suivant décision d’agrément du Ministère des Finances n° 2384-94 du 23.08.1994, immatriculée au Registre de Commerce n° 27129 <br/>  <br/> Et  <br/><br/><br/>
    </div>
    
    
    <table>
      <tr>
        <th>Vos données personnelles (à vérifier)</th> 
        <br/>
      </tr>
      
      <tr>
        <td>Civilité   M <span > Téléphone   +212771705545</span></td>
      </tr> 
      <tr>
        <td>Nom   mockedLastName <span> Email   souhaib.eai+mrfffee@gmail.com</span></td>
      </tr>   
      <tr>
        <td>Prénom   mockedFirstName <span> Ville de résidence   kech</span></td>
      </tr>    
      <tr>
        <td>Date de naissance   2000-10-08 <span> Pays   Morocco</span></td>
      </tr>
      <tr>
        <td>Adresse   BLOC 22 A9 ERAC SIDI BRAHIM FES <span>Pièce d'identité   FF1212</span></td>
      </tr>
      <tr>
        <td>Code postal   40140 <span>Numéro   44990</span></td>
      </tr>
    </table>
    
    
    <div className="text2-conv">
    Sollicite BANK OF AFRICA en vue de la souscription en mon nom au Compte Bancaire comprenant les produits et services suivants :
    <br/>
    • Compte bancaire  <br/>
    <br/>
    L’abonné souscrit également par les présentes aux services BMCE Direct particuliers offerts par BANK OF AFRICA. <br/>
    <br/>
    J'ai noté qu’un entretien avec mon conseiller est nécessaire pour compléter cette ouverture de compte à distance.
    </div>
    <div className="initials-title-conv">MERCI DE PARAPHER DE VOS INITIALES</div>
    <div className="initials-conv"></div> </div>
    </>
  );
};

export default RegisteredClient;