import './CardProfil.css'
function CardProfil({image, children}) {
    return (
        <>
            <img className="img-ouvrir-compte" src={image} alt='etudiant-img' />
            <div className='titles-ouvrir-compte'>
                {children}
            </div>
        </>
    )

}
export default CardProfil