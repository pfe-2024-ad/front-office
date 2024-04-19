import './ConfirmationFormulaire.css';
import { useGlobalState } from '../../GlobalState.js';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

function ConfirmationFormulaire(){

    const { responseGlobal, numPhone } = useGlobalState();

    let navigate = useNavigate();

    const [ response, setResponse ] = useState();

    let idClient = sessionStorage.getItem('idClient');

    const [mobilite, setMobilite] = useState(); // état pour suivre le choix du client
    // fonction pour mettre à jour l'état lorsque le client sélectionne une option
    const handleChange = (event) => {
      setMobilite(event.target.value);
    };

    useEffect(() => {
        if (response) {
            if(response === "01"){
                navigate("/choisir-agence");
            }
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);




    
    function handleSubmitFormUpdate(e) {
        e.preventDefault();
        const nomValue = e.target['nom'].value;
        const prenomValue = e.target['prenom'].value;
        const naissanceValue = e.target['naissance'].value;
        const cinValue = e.target['cin'].value;
        const professionValue = e.target['profession'].value;
        const adresseValue = e.target['adresse'].value;
        const postalValue = e.target['postal'].value;
        const villeValue = e.target['ville'].value;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idClient: idClient, nom: nomValue, prenom: prenomValue, dateNaissance: naissanceValue, cin: cinValue, adresseResidence: adresseValue, ville: villeValue, profession: professionValue,codePostal: postalValue, mobiliteBancaire: mobilite})

        };
        fetch('http://localhost:7777/agd/client-service/add-client-information', requestOptions)
            .then(response => response.text())
            .then(data => setResponse(data));
        
    }

    return (
        <div className='style-update-formulaire'>
            <p className="p-update-formulaire">
                Veuillez vérifier et compléter votre formulaire ainsi que les autres piéces justificatives
            </p>
            <form onSubmit={handleSubmitFormUpdate}>
                <div className="style-form-update">
                   <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="prenom">Prénom</label>
                           <br />
                           <input className='input-form-update' type='text' name='prenom' defaultValue={responseGlobal.prenom}/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="nom">Nom</label>
                           <br />
                           <input className='input-form-update' type='text' name='nom' defaultValue={responseGlobal.nom} />
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="naissance">Date de naissance</label>
                           <br />
                           <input className='input-form-update' type='text' name='naissance' defaultValue={responseGlobal.dateNaissance}/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="tel">Numéro de téléphone</label>
                           <br />
                           <input className='input-form-update' type='text' name='tel' value={numPhone} readOnly/>
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="cin">CIN</label>
                           <br />
                           <input className='input-form-update' type='text' name='cin' defaultValue={responseGlobal.cin} />
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="profession">Profession</label>
                           <br />
                           <input className='input-form-update' type='text' name='profession' />
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="adresse">Adresse de résidence</label>
                           <br />
                           <input className='input-form-update' type='text' name='adresse' defaultValue={responseGlobal.adresseResidence}/>
                           <br />
                        </div >
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="postal">Code Postal</label>
                           <br />
                           <input className='input-form-update' type='text' name='postal' />
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="ville">Ville</label>
                           <br />
                           <input className='input-form-update' type='text' name='ville' />
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign" style={{paddingBottom: "0%"}}> 
                        <p className="p-update-formulaire" style={{fontSize: "14px"}}>
                            Je souhaite ouvrir mon compte dans le cadre d'une mobilité bancaire
                        </p>
                    </div>
                    <div className="style-form-lign" style={{marginTop: "0.5%", justifyContent: "flex-start"}}> 
                        <label>
                           <input type="radio" value="true" checked={mobilite === "true"} onChange={handleChange} />
                           Oui
                        </label>
                        <label style={{paddingLeft:"2%"}}>
                           <input type="radio" value="false" checked={mobilite === "false"} onChange={handleChange} />
                           Non
                        </label>
                    </div>
                    <div className="style-form-lign">
                        <Button className='button-form-update' type='submit'>Suivant</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default ConfirmationFormulaire