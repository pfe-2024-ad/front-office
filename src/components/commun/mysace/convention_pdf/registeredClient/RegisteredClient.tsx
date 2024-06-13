import React, { useEffect, useState } from 'react';
import conventionLogo from '../../../../../assets/bmce-logo.png';
import  { getClient }  from '../../../../../ApiService';
import './RegisteredClient.css';

interface typeDonnees {          
  donneesClient: any;
}

const RegisteredClient: React.FC<typeDonnees> = ({donneesClient}) => {
  
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
        <td>Téléphone   {donneesClient.tel}<span > Nom  {donneesClient.nom}</span></td><br/>
      </tr> 
      <tr>
        <td>Email   {donneesClient.email} <span> Prénom   {donneesClient.prenom}</span></td><br/>
      </tr>   
      <tr>
        <td>Ville de résidence  {donneesClient.ville} <span> Date de naissance   {donneesClient.dateNaissance} </span></td><br/>
      </tr>    
      <tr>
        <td> Adresse   {donneesClient.adressAgence} <span> Pièce d'identité   {donneesClient.cin} </span></td>
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