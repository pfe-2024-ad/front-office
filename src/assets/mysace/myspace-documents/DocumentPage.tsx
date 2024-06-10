import React from 'react';
import MyspaceNavbar from "../myspace-navbar/myspaceNavbar";
import UserDocument from "./UserDocument/UserDocument";
import MyspaceText from "../myspace-text/myspaceText";
import './DocumentPage.css'

const UserDocumentPage: React.FC = () => {
  return (
  <>
  <div className="documentPage-container-x0">
    <div className="title-doc-myspace">
    <h1 className="welcome-mess-user-myspace ">Bonjour MockedFirstName</h1>
      <p className="welcome-mess-myspace">Bienvenue sur votre espace personnel de demande d'ouverture de compte BANK OF AFRICA</p>
    </div>
      <div className="header-doc-x0"><MyspaceNavbar/></div>
      <div className="user-document-myspace"><UserDocument/></div>
      <div className="sometext-doc-x0"><MyspaceText/></div>
      <div className="empty-space-x0"></div>
      </div>
  </>   
    );
    
};

export default UserDocumentPage;