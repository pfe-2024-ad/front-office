import  { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import NavigationBar from './components/commun/navigationBar/NavigationBar'
import RoutesApp from './RoutesApp';


function App() {

  const [showNavBar, setShowNavBar] = useState(true);

  
  return (

       <BrowserRouter>
      {showNavBar && <NavigationBar />}
      <RoutesApp setShowNavBar={setShowNavBar} />
      </BrowserRouter>

  );
}

export default App;
