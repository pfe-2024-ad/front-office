import CardProfil from "./card-profil/CardProfil";
import CardPack from "./card-pack/CardPack";
import mre from "../../../assets/mre-img.png";

function Mre() {
    return <div className='ouvrir-compte-root'>
        <CardProfil image={mre}>
            <span className="title1-ouvrir-compte">Marocain résidant à l'étranger</span>
            <span className="title2-ouvrir-compte">
                Découvrez nos packs avantageux pour ouvrir un compte bancaire au Maroc
            </span>
        </CardProfil>
        <div className="pack-container">
            <CardPack packName="Pack Blue" 
                packElemStyle={{backgroundColor: "rgb(33, 129, 209)"}}
                packTitleStyle={{color: "#ffffff"}}
                lienTo ="/verification-email" 
                valueNomPack="BLEU"
            />
            <CardPack packName="Pack First" 
                packElemStyle={{backgroundColor: "rgb(19, 26, 30)"}}
                packTitleStyle={{color: "#ffffff"}}
                lienTo ="/verification-email" 
                valueNomPack="FIRST"
            />
        </div>
        </div>
}
export default Mre