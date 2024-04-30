import React, { useRef, useCallback, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from "antd";
import Webcam from 'react-webcam';
import ModalValidateUpload from '../../cin/modal-validate-upload/ModalValidateUpload';
function ModalPrendrePhoto({ show, onHide }) {
    const webcamRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [imageSrcObject, setImageSrcObject] = useState(null);


    const [ModalValidateUploadShow, setModalValidateUploadShow] = useState(false);

    const convertBase64ToBlob = (base64String) => {
        const byteCharacters = atob(base64String.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob( [byteArray], { type: 'image/jpeg' });
    };

    useEffect(() => {
        console.log("here_selfie1");
        if(imageSrc){
            console.log("here_selfie3") 
            console.log(imageSrc)
            setModalValidateUploadShow(true);
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imageSrc])

    const capture = useCallback(() => {
        const newImageSrc = webcamRef.current.getScreenshot();
        const blob = convertBase64ToBlob(newImageSrc);
        setImageSrc(newImageSrc);
        setImageSrcObject(blob);
    }, [webcamRef]);

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <p className='title-upload'>Veuillez prendre une photo</p>
                </Modal.Header>
                <Modal.Body>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={450}
                            height={300}
                            paddingleft={20}
                        />
                </Modal.Body>
                <Modal.Footer className='modal-footer-upload'>
                        <Button className="modal-button-upload" style={{ paddingBottom: "7%" }} onClick={capture}>
                            Prendre une photo
                        </Button>
                </Modal.Footer>
            </Modal>

            <ModalValidateUpload show={ModalValidateUploadShow} onHideValidate={() => setModalValidateUploadShow(false)} 
            onHidePrendrePhoto={onHide}
            fileCharger={imageSrc} fileObject={imageSrcObject} cinUpload={"selfie"}
            titleReUpload={"Reprendre une photo"}/>
        </>
    );
}

export default ModalPrendrePhoto;
