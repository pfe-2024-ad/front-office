import { List } from 'immutable';

const API_BASE_URL = 'http://localhost:7777/agd';



export async function generateOtpEmail(email: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })    };

    const response = await fetch(`${API_BASE_URL}/security-service/otp_email/generate`, requestOptions);
    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de generate email');
    }

    return await response.text();
}


export async function validateOtpEmail(email: string, otpEmail: string, profil: string, nomPack: string, selectedAccount: string|null, selectedOptions: List<string>|null, selectedCards: List<string>|null, isReceptionActivated: List<boolean>|null, selectedOptions2: List<string>|null) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, userInput: otpEmail, profil: profil, nomPack: nomPack, typePack: selectedAccount, offres: selectedOptions, nomCarte: selectedCards, sendCarte: isReceptionActivated, services: selectedOptions2 })
    };
    const response = await fetch(`${API_BASE_URL}/security-service/otp_email/compare`, requestOptions);
    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de generate email');
    }

    return await response.json();
}
/////////////

function getJwtTokenFromStorage(){
    let jwtToken: string;
    const storedValueJwtToken = localStorage.getItem('jwtToken');
    if (storedValueJwtToken !== null) {
        jwtToken = storedValueJwtToken;
        return jwtToken;
    } else {
        throw new Error('Erreur, jwtToken dans localStorage est null');
    }

}

function getidclinetFromStorage(){
    let idClient: number;
    const storedValueIdClient = localStorage.getItem('idClient');
    if (storedValueIdClient !== null) {
        idClient = parseInt(storedValueIdClient, 10);
        return idClient;
    } else {
        throw new Error('Erreur, idClient dans localStorage est null');
    }

}
///////////////


export async function generateOtpPhone(keyPhone: string, numPhone: string) {
    let jwtToken: string = getJwtTokenFromStorage();
    let idClient: number = getidclinetFromStorage();
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+jwtToken 
        },
        body: JSON.stringify({ idClient: idClient, keyPhone:keyPhone, numPhone:numPhone })
    };
    const response = await fetch(`${API_BASE_URL}/security-service/otp_phone/generate`, requestOptions);
    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de generate email');
    }

    return await response.text();
}

export async function validateOtpPhone(otpPhone: string, keyPhone: string, numPhone: string) {
    let jwtToken: string = getJwtTokenFromStorage();
    let idClient: number = getidclinetFromStorage();
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+jwtToken 
        },
        body: JSON.stringify({ idClient: idClient, userInput: otpPhone, keyPhone: keyPhone, numPhone: numPhone })
    };
    const response = await fetch(`${API_BASE_URL}/security-service/otp_phone/compare`, requestOptions);
    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de generate email');
    }

    return await response.text();
}

export async function submitOcrStep(file1: File, file2: File, file3: File){
    let jwtToken: string = getJwtTokenFromStorage();
    let idClient: number = getidclinetFromStorage();
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);
    formData.append('file3', file3);
    formData.append('id', idClient.toString());
    const response = await fetch(`${API_BASE_URL}/client-service/api/get-cin-infos`, {
        method: 'POST',
        headers: { 
            'Authorization': 'Bearer '+jwtToken 
        },
        body: formData
    })                
    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de generate email');
    }

    return await response.json();

}

export async function submitConfirmationStep(nom: string, prenom: string, dateNaissance: string, cin: string, adresseResidence: string, ville: string, profession: string,codePostal: string, mobiliteBancaire: string){
    let jwtToken: string = getJwtTokenFromStorage();
    let idClient: number = getidclinetFromStorage();
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': 'Bearer '+jwtToken 
        },
        body: JSON.stringify({ idClient: idClient, nom: nom, prenom: prenom, dateNaissance: dateNaissance, cin: cin, adresseResidence: adresseResidence, ville: ville, profession: profession,codePostal: codePostal, mobiliteBancaire: mobiliteBancaire})

    };
    const response = await fetch(`${API_BASE_URL}/client-service/api/add-client-information`, requestOptions);

    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de submitConfirmationStep');
    }

    return await response.text();

}

export async function saisirAgencyStep(villeAgence: string, adresseAgence: string){
    let jwtToken: string = getJwtTokenFromStorage();
    let idClient: number = getidclinetFromStorage();
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': 'Bearer '+jwtToken 
        },
        body: JSON.stringify({ idClient: idClient, villeAgence: villeAgence, adresseAgence: adresseAgence})

    };
    const response = await fetch(`${API_BASE_URL}/client-service/api/add-client-agency-infos`, requestOptions);

    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de saisir agency step');
    }

    return await response.text();

}

export async function getClient(){
    let jwtToken: string = getJwtTokenFromStorage();
    let idClient: number = getidclinetFromStorage();
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'Authorization': 'Bearer '+jwtToken 
        },
        body: JSON.stringify({ idClient: idClient})

    };
    const response = await fetch(`${API_BASE_URL}/client-service/api/get-client`, requestOptions);

    if (!response.ok) {
        throw new Error('Erreur lors de la requête POST de submitConfirmationStep');
    }

    return await response.json();

}


