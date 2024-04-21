import { Link } from 'react-router-dom'
import './CardPack.css'
function CardPack({packName, packElemStyle, packTitleStyle, lienTo, valueNomPack}) {

    const setPackName = (nomPack) => {
        sessionStorage.setItem('nomPack', nomPack)
    }
    return <>
        <Link to={lienTo} className="pack-link" onClick={()=>setPackName(valueNomPack)}>
            <div className="pack-element" style={packElemStyle}>
                <p className="title-pack" style={packTitleStyle}>{packName}</p>
            </div>
        </Link>
    </>
}
export default CardPack


