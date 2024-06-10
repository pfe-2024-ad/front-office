import React, { useEffect, useState } from 'react';
import { getClient } from '../../../../ApiService';
import MyspaceNavbar from "../myspace-navbar/myspaceNavbar";
import UserDocument from "./UserDocument/UserDocument";
import MyspaceText from "../myspace-text/myspaceText";
import './DocumentPage.css'
import GreetingClient from '../../../../components/commun/mysace/greetingClient/greetingClient';


const UserDocumentPage: React.FC = () => {

  return (
  <>
  <div className="documentPage-container-x0">
       <div className="mysace-greeting-client">
        <GreetingClient/>
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