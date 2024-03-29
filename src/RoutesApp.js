import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'




import OcrStep from './components/commun/steps/ocr-step/OcrStep.js'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />





            <Route path="/verification-identite" element={<OcrStep />} />
        </Routes>
    )
}
export default RoutesApp