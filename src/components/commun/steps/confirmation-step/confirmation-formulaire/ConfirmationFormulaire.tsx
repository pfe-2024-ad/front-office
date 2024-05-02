import './ConfirmationFormulaire.css';
import { useGlobalState } from '../../GlobalState';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {useState, ChangeEvent, FormEvent} from 'react';
import { submitConfirmationStep } from '../../../../../ApiService';
import SaveInfoClientStatus from '../../../../../enums/SaveInfoClientStatus';
import NotificationModal from '../../../notification-modal/NotificationModal'

function ConfirmationFormulaire(){

    const { responseGlobal, setResponseGlobal, numPhone } = useGlobalState();

    let navigate = useNavigate();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [mssgErreur, SetMssgErreur] = useState<string>();
    
    const [mobilite, setMobilite] = useState<string>(); 

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
        const adresseValue: string = (e.target as HTMLFormElement)['adresse'].value;
        const professionValue: string = (e.target as HTMLFormElement)['profession'].value;
        const postalValue: string = (e.target as HTMLFormElement)['postal'].value;
        const villeValue: string = (e.target as HTMLFormElement)['ville'].value;

        setResponseGlobal({
            nom: nomValue,
            prenom: prenomValue,
            dateNaissance: naissanceValue,
            cin: cinValue,
            adresseResidence: adresseValue,
            ville: villeValue
        });
        submitConfirmationStep(nomValue, prenomValue, naissanceValue, cinValue, adresseValue, villeValue, professionValue, postalValue, mobilite!)
            .then(data => {
                if(data === SaveInfoClientStatus.SUCCESSFUL){
                    navigate("/choisir-agence");
                } else if (data === SaveInfoClientStatus.ERROR) {
                    //setMssgErreur
                    SetMssgErreur("something went wrong !!")
                    handleShow();
                }
            })
            .catch(error => console.error(error));
        
    }

    return (<>
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
                           <input className='input-form-update' type='text' name='prenom' defaultValue={responseGlobal.prenom} required/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="nom">Nom</label>
                           <br />
                           <input className='input-form-update' type='text' name='nom' defaultValue={responseGlobal.nom} required/>
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="naissance">Date de naissance</label>
                           <br />
                           <input className='input-form-update' type='text' name='naissance' defaultValue={responseGlobal.dateNaissance} required/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="tel">Numéro de téléphone</label>
                           <br />
                           <input className='input-form-update' type='text' name='tel' value={numPhone} readOnly required/>
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="cin">CIN</label>
                           <br />
                           <input className='input-form-update' type='text' name='cin' defaultValue={responseGlobal.cin} required/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="profession">Profession</label>
                           <br />
                           <input className='input-form-update' type='text' name='profession' required/>
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="adresse">Adresse de résidence</label>
                           <br />
                           <input className='input-form-update' type='text' name='adresse' defaultValue={responseGlobal.adresseResidence} required/>
                           <br />
                        </div >
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="postal">Code Postal</label>
                           <br />
                           <input className='input-form-update' type='text' name='postal' required/>
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="ville">Ville</label>
                           <br />
                           <input className='input-form-update' type='text' name='ville' required/>
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
                           <input type="radio" name="mobilite" value="true" checked={mobilite === "true"} onChange={handleChange} required/>
                           Oui
                        </label>
                        <label style={{paddingLeft:"2%"}}>
                           <input type="radio" name="mobilite" value="false" checked={mobilite === "false"} onChange={handleChange} required/>
                           Non
                        </label>
                    </div>
                    <div className="style-form-lign">
                        <Button className='button-form-update' type='submit'>Suivant</Button>
                    </div>
                </div>
            </form>
        </div>

        <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor:"rgb(251 0 46)"}}>
            {mssgErreur}
        </NotificationModal>
    </>
    )
}
export default ConfirmationFormulaire