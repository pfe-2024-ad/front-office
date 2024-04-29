import './VerifierEmail.css'
import Button from 'react-bootstrap/Button';
import {useState, useEffect, FormEvent} from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobalState } from '../../GlobalState';
import { validateOtpEmail } from '../../../../../ApiService';
import StatusOtp from '../../../../../enums/StatusOtp'
import NotificationModal from '../../../../commun/notification-modal/NotificationModal'
import SaisirEmail from '../saisir-email/SaisirEmail';
import { generateOtpEmail } from "../../../../../ApiService"
import OtpGenerationStatus from '../../../../../enums/OtpGenerationStatus';




interface VerifierEmailProps {
    email: string;
}
  
function VerifierEmail({ email }: VerifierEmailProps) {
    const [otpEmail, setOtpEmail] = useState<string>();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mssgModalNotification, SetMssgModalNotification] = useState<string>();
    const [modalColor, setModalColor] = useState<string>();


    const {setEmail} = useGlobalState();

    const [showSaisirEmail, setShowSaisirEmail] = useState<boolean>(false);


    let profil: string = sessionStorage.getItem('profil')!;
    let nomPack: string = sessionStorage.getItem('nomPack')!;

    let navigate = useNavigate();

    useEffect(() => {
        if (otpEmail) {
            validateOtpEmail(email, otpEmail, profil, nomPack)
                .then(data => { 
                    if(data.statusOtp === StatusOtp.VALID) {
                        let idClient: number = data.idClient;
                        setEmail(email);
                        localStorage.setItem('idClient', idClient.toString())
                        localStorage.setItem('jwtToken', data.jwtToken)
                        navigate("/verification-phone");
                    } else if( data.statusOtp === StatusOtp.INVALID || data.statusOtp === StatusOtp.TIMEOUT) {
                        SetMssgModalNotification("Le code saisie n'est pas correct, veuillez saisir le bon code")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
                    } else if( data.statusOtp === StatusOtp.EXPIRED_ATTEMPT) {
                        SetMssgModalNotification("Une erreur est servenue, veuillez reessaye plus tard")
                        setModalColor("rgb(251 0 46)")
                        handleShow();
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

    const handleRenvoyerOTPClick = () => {
        generateOtpEmail(email)
            .then(data => {
                if(data === OtpGenerationStatus.SUCCESS) {
                    SetMssgModalNotification("Un email de confirmation vous a été envoye sur votre boîte. Veuillez saisir le code recu pour valider la création de votre espace personnel");
                    setModalColor("#0cf569")
                    handleShow();
                } else if(data === OtpGenerationStatus.MAX_GENERATED_OTP_ERROR) {
                    SetMssgModalNotification("Une erreur est servenue, veuillez reessaye plus tard")
                    setModalColor("rgb(251 0 46)")
                    handleShow();
                }
            })
            .catch(error => console.error(error));
    }

    const handleChangeEmailClick = () => {
        setShowSaisirEmail(true);
    };

    return( <>
      {!showSaisirEmail ? ( <>
        <div className='style-saisir-email-otp'>
            <p className="p-email-otp">
                Nous avons envoyé un mail à cette adresse électronique <span style={{color:"#3399FE"}}>
                    {email}
                </span> saisir le code reçu
            </p>
            <form onSubmit={handleSubmitOtpEmail}>
                <input className='input-email-otp' type='text' name='otpEmail' required/>
                <br />
                <p className="p-email-otp " style={{fontSize: "14px"}}>
                    Vous n’avez pas reçu de code ? 
                    <a className="a-style" href="#" onClick={handleRenvoyerOTPClick} >  Réessayer / Renvoyer</a>
                </p>
                <p className="p-email-otp " style={{fontSize: "14px"}}>
                    Adresse mail erronée ? 
                    <a className="a-style" href="#" onClick={handleChangeEmailClick}>  Changer l’adresse mail </a>
                </p>

                <Button className='button-saisir-email-otp' type='submit'>Suivant</Button>
            </form>
        </div>

        <NotificationModal show={show} onHide={handleClose} modalColor={{backgroundColor: modalColor}}>
            {mssgModalNotification}
        </NotificationModal>
    </>) : (<SaisirEmail />)
} </> )

}
export default VerifierEmail