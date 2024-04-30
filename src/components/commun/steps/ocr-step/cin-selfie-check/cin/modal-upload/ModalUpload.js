import Modal from 'react-bootstrap/Modal';

import './ModalUpload.css'
import { useEffect, useState } from 'react';
import lien from '../../../../../../assets/lien.png';

import ModalValidateUpload from '../modal-validate-upload/ModalValidateUpload';


function ModalUpload({show, onHide, cinUpload}) {

    const [file, setFile] = useState();
    const [ fileObject, setFileObject ] = useState();



    const [ModalValidateUploadShow, setModalValidateUploadShow] = useState(false);

    useEffect(() => {
        console.log("here_upload1");
        if(file){
            console.log("here_upload3") 
            console.log(file)
            setModalValidateUploadShow(true);
            
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file])
    function handleModalUpload(e){
        console.log("here_upload2");
        e.preventDefault();
        setFileObject(e.target.files[0]);
        setFile(URL.createObjectURL(e.target.files[0]));

    }

    return (  <>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="style-modal-upload">
            <img className="logo-modal-upload" src={lien} alt='upload logo' />
            <p className='title-upload'>Charger ma piéce</p>
            <p className='p-upload'>Votre document doit etre place horizontalement <br />
              et avec un éclairage optional</p>
          </div> 
        </Modal.Body>
        <Modal.Footer className='modal-footer-upload'>
          <label className="modal-button-upload" htmlFor="upload-cin">Charger ma piéce</label>
          <input type="file" id="upload-cin" name="file1" style={{display: "none"}} onChange={handleModalUpload}/>
        </Modal.Footer>
      </Modal>

      <ModalValidateUpload show={ModalValidateUploadShow} onHideValidate={() => setModalValidateUploadShow(false)} 
      fileCharger={file} fileObject={fileObject} cinUpload={cinUpload} titleReUpload={"Recharger un autre document"}/>

      </>
  

       

    );
  }
export default ModalUpload