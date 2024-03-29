import './StepContainer.css'
function StepContainer ({children, styleFleche, imgFleche, containerTitle}){
    return(<>
        <div className="step-container">
            <div className="cercle-div-fleche" style={styleFleche}>
                <img className="fleche-style" src={imgFleche} alt='fleche' />
            </div>
            <h3 className="step-container-title">{containerTitle}</h3>
        </div>
        {children}
    </>

    )

}
export default StepContainer