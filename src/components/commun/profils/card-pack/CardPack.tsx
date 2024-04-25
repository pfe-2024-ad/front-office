import { Link } from 'react-router-dom'
import { CSSProperties } from 'react';

import './CardPack.css'

interface CardPackProps {
    packName: string;
    packElemStyle: CSSProperties;
    packTitleStyle: CSSProperties;
    lienTo: string;
    valueNomPack: string;
}

function CardPack ({ packName, packElemStyle, packTitleStyle, lienTo, valueNomPack }: CardPackProps) {

    const setPackName = (nomPack: string) => {
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


