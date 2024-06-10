import "./pack.css";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import backgold from '../../../../../../assets/pack-gold.png';
import packAzur from '../../../../../../assets/azur.png';
import packBlue from '../../../../../../assets/blue.png';
import packFirst from '../../../../../../assets/first.png';
import packJeuneCampus from '../../../../../../assets/jeune_campus.png';
import packPlatinum from '../../../../../../assets/platinum.png';
import packEssentiel from '../../../../../../assets/essentiel.png';
import PackName from "../../../../../../enums/PackName";
import { getClient } from "../../../../../../ApiService";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale'; 

interface typeDonnees {
  pack: PackName | undefined;
  dateCreation: string | undefined;
}

const Pack: React.FC = () => {
  const [donneesClient, setDonneesClient] = useState<typeDonnees>({ pack: undefined , dateCreation: undefined
  });

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return format(date, 'dd MMMM yyyy', { locale: fr });
  };

  useEffect(() => {
    getClient()
      .then(data => {
        setDonneesClient({
           pack: data.pack,
           dateCreation: data.dateCreation
        });
      })
      .catch(error => console.error(error));
  }, []);

  // Function to get image based on pack name
  const getPackImage = (pack: PackName | undefined) => {
    switch (pack) {
      case PackName.AZUR:
        return packAzur;
      case PackName.GOLD:
        return backgold;
      case PackName.PLATINUM:
        return packPlatinum;
      case PackName.JEUNE_CAMPUS:
        return packJeuneCampus;
      case PackName.ESSENTIEL:
        return packEssentiel;
      case PackName.AUTO_ENTREPRENEUR:
        return packAzur;
      case PackName.CLASSIC:
        return packEssentiel;
      case PackName.BLEU:
        return packBlue;
      case PackName.FIRST:
        return packFirst;
      default:
        return null; 
    }
  };

  // function to format pack name
  const formatPackName = (packName: PackName | undefined) => {
    return packName ? packName.replace(/_/g, ' ') : '';
  }; 

  return (
    <div className="centered-container-x0">
      <div className="card-x0">
        <div className="card-header-x0">
          <h3 className="card-title-left-x0">Pack <span className="myspace-pack-name" style={{ textTransform: "lowercase" }}>{formatPackName(donneesClient.pack)}</span></h3>
          <div>Activé le {formatDate(donneesClient.dateCreation)} <FontAwesomeIcon icon={faCircleCheck} /></div>
        </div> 
        <hr className="separator-x0" />
        <div className="card-content-x0">
          <div className="container-doc-packgold-myspace">
            <h6 className="packgold-title-x0">Gratuit les 6 premiers mois</h6>
            {donneesClient.pack && (
              <img src={getPackImage(donneesClient.pack)} className="header-image-x0" alt={`Image pack ${formatPackName(donneesClient.pack)}`} />
            )}
          </div>
          <ul>
            <li>Compte cheque</li>
            <li>Frais de tenue de compte offerts</li>
            <li>Opérations courantes gratuites (virements, prélèvements, remises de chèque)</li>
            <li>Accès au programme d'avantages Visa <span className="my-space-visa-name"style={{textTransform: "lowercase"}}>{formatPackName(donneesClient.pack)}</span> (réductions sur une sélection d'enseignes).</li>
            <li>Service de Banque à distance BMCE Direct</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pack;
