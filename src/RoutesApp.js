import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'

import ConfirmationStep from './components/commun/steps/confirmation-step/ConfirmationStep.js'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/verification-donnees" element={<ConfirmationStep />} />

        </Routes>
    )
}
export default RoutesApp