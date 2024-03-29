import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'




import EmailStep from './components/commun/steps/email-step/EmailStep.js'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />




            <Route path="/verification-email" element={<EmailStep />} />
        </Routes>
    )
}
export default RoutesApp