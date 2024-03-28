import { Link } from 'react-router-dom'
import bmce from '../../../assets/bmce-logo.png'
import './Navbar.css'

function Navbar() {


    return(
      <>
        <nav className="navbar nav-style navbar-expand-lg ">
          <div className="container-fluid container-nav">
            <Link className="logo-style" to="/">
              <img className="img-fluid" src={bmce} alt='logo bmce' />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </>
    )
}
export default Navbar


