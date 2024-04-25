import './VerifierEmail.css'

import Button from 'react-bootstrap/Button';
import {useState, useEffect, FormEvent} from 'react'
import { useNavigate } from "react-router-dom";

import { validateOtpEmail } from '../../../../../ApiService';

interface VerifierEmailProps {
    email: string;
}
  
function VerifierEmail({ email }: VerifierEmailProps) {


    const [otpEmail, setOtpEmail] = useState<string>();


    let profil: string;
    let nomPack: string;
    const storedValueProfil = sessionStorage.getItem('profil');
    const storedValueNomPack = sessionStorage.getItem('nomPack');
    if (storedValueProfil !== null && storedValueNomPack !== null) {
        profil = storedValueProfil;
        nomPack = storedValueNomPack;
    } else {
        // handle the case where the value is null
    }



    let navigate = useNavigate();

    useEffect(() => {
        if (otpEmail) {
            validateOtpEmail(email, otpEmail, profil, nomPack)
                .then(data => { 
                    if(data.statusOtp === "01") {
                        console.log(data.idClient)
                        let idClient: number = data.idClient;
                        localStorage.setItem('idClient', idClient.toString())
                        localStorage.setItem('jwtToken', data.jwtToken)
                        navigate("/verification-phone");
                    }
                })
                .catch(error => console.error(error));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [otpEmail]);

    function handleSubmitOtpEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const otpEmailValue = (e.target as HTMLFormElement)['otpEmail'].value;
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