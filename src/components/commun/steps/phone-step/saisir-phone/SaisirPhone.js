import {useState, useEffect} from 'react'
import './SaisirPhone.css'
import Button from 'react-bootstrap/Button';
import VerifierPhone from '../verifier-phone/VerifierPhone';

function SaisirPhone() {
    const [keyPhone, setKeyPhone] = useState();
    const [numPhone, setNumPhone] = useState();
    

    let idClient = sessionStorage.getItem('idClient');

    const [response, setResponse] = useState();

    useEffect(() => {
        if (keyPhone && numPhone) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ idClient: idClient, keyPhone:keyPhone, numPhone:numPhone })
            };
            fetch('http://localhost:7777/agd/security-service/otp_phone/generate', requestOptions)
                .then(response => response.text())
                .then(data => {setResponse(data)});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numPhone]);

    function handleSubmitPhone(e) {
        e.preventDefault();
        const keyPhoneValue = e.target['keyPhone'].value;
        const numPhoneValue = e.target['numPhone'].value;
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



