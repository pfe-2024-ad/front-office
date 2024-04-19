import './SaisirEmail.css';
import VerifierEmail from "../verifier-email/VerifierEmail";

import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';

function SaisirEmail() {

    const [email, setEmail] = useState();
    const [response, setResponse] = useState();
    useEffect(() => {
        if (email) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            };
            fetch('http://localhost:7777/agd/security-service/otp_email/generate', requestOptions)
                .then(response => response.text())
                .then(data => {setResponse(data)});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [email]);

    function handleSubmit(e) {
        e.preventDefault();
        const emailValue = e.target['email'].value;
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
            ) : ( <VerifierEmail email={email} />)
        }
        
        </>
    )

}
export default SaisirEmail