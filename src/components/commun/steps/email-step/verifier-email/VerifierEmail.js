import './VerifierEmail.css'

import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function VerifierEmail({email}) {

    const [otpEmail, setOtpEmail] = useState();
    const [response, setResponse] = useState({statusOtp: null,  idClient: null});

    let profil = sessionStorage.getItem('profil');
    let nomPack = sessionStorage.getItem('nomPack');

    let navigate = useNavigate();

    useEffect(() => {
        if (otpEmail) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, userInput: otpEmail, profil: profil, nomPack: nomPack })
            };
            fetch('http://localhost:7777/agd/security-service/otp_email/compare', requestOptions)
                .then(response => response.json())
                .then(data => setResponse({statusOtp: data.statusOtp, idClient: data.idClient}))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [otpEmail]);

    useEffect(() => {
        if(response.idClient){
            console.log(response.idClient)
            sessionStorage.setItem('idClient', response.idClient)
            navigate("/verification-phone");
        }
    })

    function handleSubmitOtpEmail(e) {
        e.preventDefault();
        const otpEmailValue = e.target['otpEmail'].value;
        setOtpEmail(otpEmailValue);
    }
    return( 
        <div className='style-saisir-email-otp'>
            <p className="p-email-otp">
                Nous avons envoyé un mail à cette adresse électronique <span style={{color:"#3399FE"}}>
                    {email}
                </span> saisir le code reçu
            </p>
            <form onSubmit={handleSubmitOtpEmail}>
                <input className='input-email-otp' type='text' name='otpEmail' />
                <br />
                <Button className='button-saisir-email-otp' type='submit'>Suivant</Button>
            </form>
        </div>
    )

}
export default VerifierEmail