import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'

import ConfirmationStep from './components/commun/steps/confirmation-step/ConfirmationStep.js'




import EmailStep from './components/commun/steps/email-step/EmailStep.js'




import OcrStep from './components/commun/steps/ocr-step/OcrStep.js'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/verification-identite" element={<OcrStep />} />

            <Route path="/verification-email" element={<EmailStep />} />

            <Route path="/verification-donnees" element={<ConfirmationStep />} />


        </Routes>
    )
}
export default RoutesApp