import html2pdf from "html2pdf.js";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import ConventionClient from "../../../convention_pdf/ConventionClient/ConventionClient";
import "./convention.css";
import { getClient } from "../../../../../../ApiService";
import { useState } from "react";

async function generateArConventionPdf(donneesClient: any) {
  const div = document.createElement("div");
  document.body.appendChild(div);

  console.log(donneesClient);
  ReactDOM.render(
    <ConventionClient donneesClient={donneesClient} setShowNavBar={() => {}} />,
    div
  );

  const opt = {
    margin: [0.5, 0, -0.08, 0],
    filename: "convention_pdf.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    pagebreak: { avoid: "tr", mode: "css", after: ".page-break" },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  try {
    // Generate PDF content
    const blob = await html2pdf().from(div).set(opt).output("blob");

    document.body.removeChild(div);
    return new File([blob], "Convention.pdf", {
      type: "application/pdf",
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
}

function Convention() {
  const [myData, setMyData] = useState();

  async function getData() {
    try {
      const data = await getClient();
      setMyData(data);
      console.log(myData);
      return {
        nom: data.nom,
        prenom: data.prenom,
        dateNaissance: data.dateNaissance,
        cin: data.cin,
        adresseResidence: data.adresseResidence,
        ville: data.ville,
        email: data.email,
        tel: data.phone,
        pack: data.pack,
        adressAgence: data.agence,
      };
    } catch (error) {
      console.error("hh");
    }
  }

  const downloadPDF = async () => {
    try {
      console.log("here");
      const data = await getData(); // Await the getData function
      console.log(data);

      const pdfFile = await generateArConventionPdf(data); // Pass the data to the generateArConventionPdf function
      console.log("Generated PDF:", pdfFile);

      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfFile);
      link.download = pdfFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  return (
    <div id="convention-component" className="centered-container1-x0">
      <div className="card1-x0">
        <h3 className="card-message-x0">Convention d'ouverture de compte</h3>
        <button className="card-button-x0" onClick={downloadPDF}>
          <div className="telecharger-conv">Télécharger ma convention</div>
          <FontAwesomeIcon icon={faCloudArrowDown} />
        </button>
      </div>
    </div>
  );
}

export default Convention;
