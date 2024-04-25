import './ConfirmationFormulaire.css';
import { useGlobalState } from '../../GlobalState';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {useState, ChangeEvent, FormEvent} from 'react';
import { submitConfirmationStep } from '../../../../../ApiService';

function ConfirmationFormulaire(){

    const { responseGlobal, numPhone } = useGlobalState();

    let navigate = useNavigate();

    const [ response, setResponse ] = useState<string>();


    
    const [mobilite, setMobilite] = useState<string>(''); 

    // fonction pour mettre à jour l'état lorsque le client sélectionne une option
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setMobilite(event.target.value);
    };


    
    function handleSubmitFormUpdate(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const nomValue: string = (e.target as HTMLFormElement)['nom'].value;
        const prenomValue: string = (e.target as HTMLFormElement)['prenom'].value;
        const naissanceValue: string = (e.target as HTMLFormElement)['naissance'].value;
        const cinValue: string = (e.target as HTMLFormElement)['cin'].value;
        const professionValue: string = (e.target as HTMLFormElement)['profession'].value;
        const adresseValue: string = (e.target as HTMLFormElement)['adresse'].value;
        const postalValue: string = (e.target as HTMLFormElement)['postal'].value;
        const villeValue: string = (e.target as HTMLFormElement)['ville'].value;
        submitConfirmationStep(nomValue, prenomValue, naissanceValue, cinValue, adresseValue, villeValue, professionValue, postalValue, mobilite)
            .then(data => {
                if(data === "01"){
                    navigate("/choisir-agence");
                }
            })
            .catch(error => console.error(error));
        
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