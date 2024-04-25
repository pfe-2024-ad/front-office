import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGlobalState } from '../../../../GlobalState';

import './ModalValidateUpload.css';

interface ModalValidateUploadProps {
  show: boolean;
  onHideValidate: () => void;
  onHidePrendrePhoto ?: () => void;
  fileCharger: string | null | undefined;
  fileObject: File | null | undefined;
  cinUpload: string;
  titleReUpload: string;
}

function ModalValidateUpload ({ show, onHideValidate, onHidePrendrePhoto, fileCharger, fileObject, cinUpload, titleReUpload }: ModalValidateUploadProps) {
  
  const { setFile1, setFile2, setFile3 } = useGlobalState();

  const handleReUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onHideValidate();
  };
  

  const handleValidateUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (cinUpload === "cinRecto" && fileObject) {
      console.log("cinUpload = cinRecto");
      setFile1(fileObject);
      onHideValidate();
    } else if (cinUpload === "cinVerso" && fileObject) {
      console.log("cinUpload = cinVerso iiiiiii");
      setFile2(fileObject);
      onHideValidate();
    } else if (cinUpload === "selfie" && fileObject) {
      console.log(fileObject)
      console.log("cinUpload = selfie");
      setFile3(fileObject);
      onHideValidate();
      if (onHidePrendrePhoto) {
        onHidePrendrePhoto();
      }
    }
    
  };

  return (
    <Modal
      show={show}
      onHide={onHideValidate}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <div className="style-modal-upload">
          {fileCharger && <img className="img-validate-upload" src={fileCharger} alt='cin recto' />}
        </div>
      </Modal.Body>
      <Modal.Footer className='modal-footer-upload-validate'>
        <Button className="modal-button-upload-validate" onClick={handleReUpload}>
          {titleReUpload}
        </Button>
        <Button className="modal-button-upload-validate" onClick={handleValidateUpload}>
          Valider
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalValidateUpload;
