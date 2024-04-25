import './VerifierPhone.css'

import {useState, useEffect, FormEvent} from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../../GlobalState';

import { validateOtpPhone } from '../../../../../ApiService';

interface VerifierPhoneProps {
    keyPhone: string;
    numPhone: string;
}
  
function VerifierPhone({ keyPhone, numPhone }: VerifierPhoneProps) {
    const [otpPhone, setOtpPhone] = useState<string>();

    const {setNumPhone} = useGlobalState();

    const phone = keyPhone + numPhone;

    
    let navigate = useNavigate();

    useEffect(() => {
        if (otpPhone) {
            validateOtpPhone(otpPhone, keyPhone, numPhone)
                .then(data => {
                    if (data === "01") {
                        setNumPhone(phone);
                        navigate("/verification-identite");
                        }
                })
                .catch(error => console.error(error));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [otpPhone]);

    function handleSubmitOtpPhone(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const otpPhoneValue = (e.target as HTMLFormElement)['otpPhone'].value;
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