import {Route, Routes, useParams} from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './components/commun/contact/Contact'
import Particulier from './components/commun/profils/Particulier'
import Mre from './components/commun/profils/Mre'
import Etudiant from './components/commun/profils/Etudiant'
import Professionnel from './components/commun/profils/Professionnel'
import EmailStep from './components/commun/steps/email-step/EmailStep'
import PhoneStep from './components/commun/steps/phone-step/PhoneStep'
import OcrStep from './components/commun/steps/ocr-step/OcrStep'
import ConfirmationStep from './components/commun/steps/confirmation-step/ConfirmationStep'
import AgencyStep from './components/commun/steps/agency-step/AgencyStep'
import RecapStep from './components/commun/steps/recap-step/RecapStep'
import MaDemande from './components/commun/ma-demande/MaDemande'
import PaymentStep from './components/commun/steps/payment-step/PaymentStep'
import RdvStep from './components/commun/steps/rdv-step/RdvStep'
import Myspace from './components/commun/mysace/myspace'
import MyspaceOffre from './components/commun/mysace/myspace-offres/UserOffre/myspaceOffre'
import DocumentPage from './components/commun/mysace/myspace-documents/DocumentPage'




  

function RoutesApp(  props: { setShowNavBar: any}) {

    const { setShowNavBar } = props;
    const { selectedOption } = useParams<{ selectedOption: string }>();
  
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Ma-demande" element={<MaDemande />} />
            <Route path="/particulier-ouvrir-un-compte-bancaire-en-ligne" element={<Particulier />} />
            <Route path="/MRE-ouvrir-un-compte-bancaire-au-maroc" element={<Mre />} />
            <Route path="/compte-bancaire-en-ligne-pour-etudiant" element={<Etudiant />} />
            <Route path="/professional-offres" element={<Professionnel/>} />
            <Route path="/verification-email" element={<EmailStep />} />
            <Route path="/verification-phone" element={<PhoneStep />} />
            <Route path="/verification-identite" element={<OcrStep />} />
            <Route path="/verification-donnees" element={<ConfirmationStep />} />
            <Route path="/choisir-agence" element={<AgencyStep />} />
            <Route path="/recap-donnees" element={<RecapStep />} />
            <Route path="/effectuer-paiement" element={<PaymentStep />} />
            <Route path="/prendre-rdv" element={<RdvStep />} />
            <Route path="/my-space" element={<Myspace />} />
            <Route path="/my-space-offre" element={<MyspaceOffre/>} />
            <Route path="/my-space-documents" element={<DocumentPage/>} />
            {/* <Route path="/convention"   element={<ConventionClient setShowNavBar={() => {}} />} />  */} 
            {/* <Route path="/my-space-compte-unitaire-offre" element={<CompteUnitaireOffre  />}/>*/}
           
        </Routes>
    )
}
export default RoutesApp