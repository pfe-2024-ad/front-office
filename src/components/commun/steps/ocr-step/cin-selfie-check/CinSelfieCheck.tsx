import CinCheck from "../cin-selfie-check/cin/cin-check/CinCheck";
import SelfieCheck from "./selfie/selfie-check/SelfieCheck";
import './CinSelfieCheck.css';
import cinlogo from "../../../../../assets/cin-check.png";
import selfielogo from "../../../../../assets/selfie-check.png";
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";

import { useGlobalState } from '../../GlobalState';
import { submitOcrStep } from "../../../../../ApiService";

function CinSelfieCheck() {

    const { setResponseGlobal } = useGlobalState();
    const { file1, file2, file3 } = useGlobalState();


    let navigate = useNavigate();

    function handleUpload(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
      e.preventDefault();

      if (file1 && file2 && file3 ) {
        submitOcrStep(file1, file2, file3)
        .then(data => {
            if (data.status ==="01"){
                setResponseGlobal({
                    nom: data.nom, 
                    prenom: data.prenom, 
                    dateNaissance: data.dateNaissance, 
                    cin: data.cin,
                    adresseResidence: data.adresseResidence
                });
                navigate("/verification-donnees");
            }
        })
        .catch(error => console.error(error));
      }      
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