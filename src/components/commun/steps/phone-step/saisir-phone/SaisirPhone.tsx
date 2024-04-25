import {useState, useEffect, FormEvent} from 'react'
import './SaisirPhone.css'
import Button from 'react-bootstrap/Button';
import VerifierPhone from '../verifier-phone/VerifierPhone';
import { generateOtpPhone } from '../../../../../ApiService';

function SaisirPhone() {
    
    const [keyPhone, setKeyPhone] = useState<string>('');
    const [numPhone, setNumPhone] = useState<string>('');
    

    const [response, setResponse] = useState<String>();

    useEffect(() => {
        if (keyPhone && numPhone) {
            generateOtpPhone(keyPhone, numPhone)
                .then(data => {setResponse(data)})
                .catch(error => console.error(error));

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numPhone]);


    function handleSubmitPhone(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const keyPhoneValue = (e.target as HTMLFormElement)['keyPhone'].value;
        const numPhoneValue = (e.target as HTMLFormElement)['numPhone'].value;
        setKeyPhone(keyPhoneValue);
        setNumPhone(numPhoneValue);
    }

    return( <>
        {   !response ? (
                <div className='style-saisir-phone'>
                <p className="p-phone">Veuillez saisir votre numéro de téléphone pour finaliser la création de votre espace personnel.</p>
                <form onSubmit={handleSubmitPhone}>
                    <label className='label-phone' id="num-tel">N° de téléphone</label>
                    <br />
                    <input className='input-phone' style={{width: "8%"}} type='text' name='keyPhone' defaultValue={"+212"} />
                    <input className='input-phone' type='text' name='numPhone' />
                    <br />
                    <Button className='button-saisir-phone' type='submit'>Suivant</Button>
            </form>
        </div>
        ) : ( <VerifierPhone keyPhone={keyPhone} numPhone={numPhone}/>)
        
        } 
        </>
    )
}
export default SaisirPhone



