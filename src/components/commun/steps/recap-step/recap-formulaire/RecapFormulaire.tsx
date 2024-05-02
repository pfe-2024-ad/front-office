import './RecapFormulaire.css';
import { useGlobalState } from '../../GlobalState';


function RecapFormulaire(){

    const { responseGlobal, numPhone, email, agenceProximite } = useGlobalState();

    const nomPack = sessionStorage.getItem('nomPack');

    return (
        <div className='style-update-formulaire'>
            <p className="p-update-formulaire">
               Vérifiez vos données
            </p>
            <form >
                <div className="style-form-update">
                   <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="prenom">Prénom</label>
                           <br />
                           <input className='input-form-update' type='text' name='prenom' value={responseGlobal.prenom} readOnly/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="nom">Nom</label>
                           <br />
                           <input className='input-form-update' type='text' name='nom' value={responseGlobal.nom} readOnly />
                           <br />
                        </div>
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="email">Email</label>
                           <br />
                           <input className='input-form-update' type='text' name='email' value={email} readOnly/>
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
                           <label className='label-form-update' id="naissance">Date de naissance</label>
                           <br />
                           <input className='input-form-update' type='text' name='naissance' value={responseGlobal.dateNaissance} readOnly/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="adresse">Adresse de résidence</label>
                           <br />
                           <input className='input-form-update' type='text' name='adresse' value={responseGlobal.adresseResidence} readOnly/>
                           <br />
                        </div >
                    </div>
                    <div className="style-form-lign ">
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="cin">CIN</label>
                           <br />
                           <input className='input-form-update' type='text' name='cin' value={responseGlobal.cin} readOnly />
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="ville">Ville</label>
                           <br />
                           <input className='input-form-update' type='text' name='ville' value={responseGlobal.ville} readOnly/>
                           <br />
                        </div>
                    </div>
                    
                    <div className="style-form-lign">
                    <div style={{width:"50%"}}>
                           <label className='label-form-update' id="pack">Pack</label>
                           <br />
                           <input className='input-form-update' type='text' name='pack' value={nomPack!} readOnly/>
                           <br />
                        </div>
                        <div style={{width:"50%"}}>
                           <label className='label-form-update' id="agence">Agence a proximite</label>
                           <br />
                           <input className='input-form-update' type='text' name='agence' value={agenceProximite} readOnly/>
                           <br />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default RecapFormulaire