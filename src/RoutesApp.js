import {Route, Routes} from 'react-router-dom'

import Home from './components/home/Home.js'


function RoutesApp() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
export default RoutesApp