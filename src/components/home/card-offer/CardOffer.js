import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CardOffer.css';

function CardOffer({lienTo, children, valueProfil}) {

    const setProfil = (profil) => {
        sessionStorage.setItem('profil', profil)
    }

    return (
        <Card className='card-style'>
            <Link to={lienTo} className="card-link" onClick={()=>setProfil(valueProfil)}>
                {children}
                <Card.Footer>                
                   <Button  className='button-cart'>Je découvre l'offre</Button>
                </Card.Footer>
            </Link>
        </Card>
    );

}
export default CardOffer