import './StepContent.css'
function StepContent({children, styleCercle, titleContent}){

    return(
        <>
            <div className="step-content-title">
                <div className="cercle-div" style={styleCercle}></div>
                <h4 className="title-content">{titleContent}</h4>
            </div>
            {children}
        </>
    )
}
export default StepContent