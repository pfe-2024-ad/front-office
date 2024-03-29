import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'




import PhoneStep from '../src/components/commun/steps/phone-step/PhoneStep.js'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />





            <Route path="/verification-phone" element={<PhoneStep />} />
        </Routes>
    )
}
export default RoutesApp