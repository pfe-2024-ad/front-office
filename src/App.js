import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/commun/navbar/Navbar.js'
import RoutesApp from './RoutesApp.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesApp />
      </BrowserRouter>
    </>

  );
}

export default App;
