import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'

import ConfirmationStep from './components/commun/steps/confirmation-step/ConfirmationStep.js'




import EmailStep from './components/commun/steps/email-step/EmailStep.js'




import PhoneStep from '../src/components/commun/steps/phone-step/PhoneStep.js'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/verification-phone" element={<PhoneStep />} />

            <Route path="/verification-email" element={<EmailStep />} />

            <Route path="/verification-donnees" element={<ConfirmationStep />} />

        </Routes>
    )
}
export default RoutesApp