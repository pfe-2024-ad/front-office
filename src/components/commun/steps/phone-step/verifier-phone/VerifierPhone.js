import './VerifierPhone.css'

import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../../GlobalState';

function VerifierPhone({keyPhone, numPhone}){
    const [otpPhone, setOtpPhone] = useState();
    const [response, setResponse] = useState();

    const {setNumPhone} = useGlobalState();

    const phone = keyPhone + numPhone;
    let idClient = sessionStorage.getItem('idClient');

    let navigate = useNavigate();

    useEffect(() => {
        if (otpPhone) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idClient: idClient, userInput: otpPhone, keyPhone: keyPhone, numPhone: numPhone })
            };
            fetch('http://localhost:7777/agd/security-service/otp_phone/compare', requestOptions)
                .then(response => response.text())
                .then(data => {
                    setResponse(data);
                    if (data === "01") {
                        console.log("here-phone8");
                        setNumPhone(phone);
                        navigate("/verification-identite");
                        }
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [otpPhone]);



    function handleSubmitOtpPhone(e) {
        e.preventDefault();
        const otpPhoneValue = e.target['otpPhone'].value;
        setOtpPhone(otpPhoneValue);
    }
    return (
        <div className='style-saisir-email-otp'>
            <p className="p-email-otp">
                Nous avons envoyé un SMS à ce numéro <span style={{color:"#3399FE"}}>
                    {phone}
                </span> Veuillez saisir le code reçu
            </p>
            <form onSubmit={handleSubmitOtpPhone}>
                <input className='input-phone-otp' type='text' name='otpPhone' />
                <br />
                <Button className='button-saisir-phone-otp' type='submit'>Suivant</Button>
            </form>
        </div>
    )
}

export default VerifierPhone