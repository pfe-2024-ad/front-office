import './SaisirEmail.css';
import VerifierEmail from "../verifier-email/VerifierEmail"

import Button from 'react-bootstrap/Button';
import {useState, useEffect, FormEvent} from 'react';

import { generateOtpEmail } from "../../../../../ApiService"

function SaisirEmail() {

    const [email, setEmail] = useState<string>('');
    const [response, setResponse] = useState<string>();

    useEffect(() => {
        if (email) {
            generateOtpEmail(email)
                .then(data => setResponse(data))
                .catch(error => console.error(error));
        }
    }, [email]);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const emailValue = (e.target as HTMLFormElement)['email'].value;
        setEmail(emailValue);
    }


    return( <>
        {
            !response ? (
                <div className='style-saisir-email'>
            <p className="p-email">Veuillez saisir votre adresse email afin de créer votre espace personnel</p>
            <form onSubmit={handleSubmit}>
                    <label className='label-email' id="email">Adresse email</label>
                    <br />
                    <input className='input-email' type='text' name='email' />
                    <br />
                    <Button className='button-saisir-email' type='submit'>Suivant</Button>
            </form>
        </div>
            ) : <VerifierEmail email={email} />
        }
        
        </>
    )

}
export default SaisirEmail