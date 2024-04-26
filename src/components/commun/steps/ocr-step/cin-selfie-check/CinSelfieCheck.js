import CinCheck from "./cin/cin-check/CinCheck.js";
import SelfieCheck from "../cin-selfie-check/selfie/selfie-check/SelfieCheck.js";
import './CinSelfieCheck.css';
import cinlogo from "../../../../assets/cin-check.png";
import selfielogo from "../../../../assets/selfie-check.png";
import Button from 'react-bootstrap/Button';
import OcrStatut from '../../../enums/OcrStatut'
import { useNavigate } from "react-router-dom";

import { useGlobalState } from '../../GlobalState.js';

function CinSelfieCheck() {

    const { setResponseGlobal } = useGlobalState();
    const { file1, file2, file3 } = useGlobalState();

    let idClient = sessionStorage.getItem('idClient');

    

    let navigate = useNavigate();

    

  

    function handleUpload(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file1', file1);
        formData.append('file2', file2);
        formData.append('file3', file3);
        formData.append('id', idClient);
        
        fetch('http://localhost:7777/agd/client-service/api/get-cin-infos', {
            method: 'POST',
            body: formData
        })                
        .then(response => response.json())
        .then(data => {
            if(data.status === OcrStatut.ERROR){
                console.log("erreur");
            } else if (data.status ===OcrStatut.SUCCESSFUL){
                console.log("ok");
                setResponseGlobal({nom: data.nom, prenom: data.prenom, 
                    dateNaissance: data.dateNaissance, cin: data.cin,
                    adresseResidence: data.adresseResidence
                });
                navigate("/verification-donnees");
            }
        });
             
    }

    return (
        <div className="style-cin-selfie-check">
            <p className="p-check">
                Identifiez-vous grâce au scan de votre CIN et à l'authentification biométrique
            </p>
            
            <CinCheck checklogo={cinlogo} descriptif={"Charger votre piéce d'identité (CIN/Carte de séjour)"}/>
            <SelfieCheck checklogo={selfielogo} descriptif={"Vérifier votre identité par un selfie check"}/>
            
            <Button className='button-upload' style={{marginBottom: "4%"}} type='submit' onClick={handleUpload}>Suivant</Button>

        </div>
    );

}
export default CinSelfieCheck