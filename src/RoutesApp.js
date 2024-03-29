import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'
import Particulier from './components/commun/profils/Particulier.js'
import Mre from './components/commun/profils/Mre.js'
import Etudiant from './components/commun/profils/Etudiant.js'
import Professionnel from './components/commun/profils/Professionnel.js'



function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/particulier-ouvrir-un-compte-bancaire-en-ligne" element={<Particulier />} />
            <Route path="/MRE-ouvrir-un-compte-bancaire-au-maroc" element={<Mre />} />
            <Route path="/compte-bancaire-en-ligne-pour-etudiant" element={<Etudiant />} />
            <Route path="/professional-offres" element={<Professionnel/>} />
        </Routes>
    )
}
export default RoutesApp