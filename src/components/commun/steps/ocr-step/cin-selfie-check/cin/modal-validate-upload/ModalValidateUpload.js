
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useGlobalState } from '../../../../GlobalState';
import CinUploadStatut from '../../../../../enums/CinUploadStatut';

import './ModalValidateUpload.css'

function ModalValidateUpload({show, onHideValidate, onHidePrendrePhoto, fileCharger, fileObject, cinUpload, titleReUpload}) {



    const { setFile1, setFile2, setFile3 } = useGlobalState();
    function handleReUpload(e) {
      onHideValidate();
    }

    function handleValidateUpload(e) {
        if(cinUpload===CinUploadStatut.cinRecto){
            console.log("cinUpload = cinRecto ");
            console.log(fileObject);
            setFile1(fileObject);
            onHideValidate();
            
        }
        else if(cinUpload===CinUploadStatut.cinVerso){
            console.log("cinUpload = cinVerso ");
            console.log(fileObject);
            setFile2(fileObject);
            onHideValidate();
        }
        else if(cinUpload===CinUploadStatut.selfie){
            console.log("cinUpload = selfie ");
            console.log(fileObject);
            setFile3(fileObject);
            onHideValidate();
            onHidePrendrePhoto();
        }
    }

    return (
      <Modal
        show={show}
        onHide={onHideValidate}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="style-modal-upload">
            <img className="img-validate-upload" src={fileCharger} alt='cin recto' />
          </div> 
        </Modal.Body>
        <Modal.Footer className='modal-footer-upload-validate'>
          <Button className="modal-button-upload-validate" onClick={handleReUpload}>
            {titleReUpload}</Button>
          <Button className="modal-button-upload-validate" onClick={handleValidateUpload}>Valider</Button>
        </Modal.Footer>
      </Modal>



);
    
  }
export default ModalValidateUpload