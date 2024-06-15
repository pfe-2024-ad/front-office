import html2pdf from 'html2pdf.js';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import ConventionClient from '../../../convention_pdf/ConventionClient/ConventionClient';
import './convention.css'
// Define the PDF generation function outside of the component
export async function generateArConventionPdf(): Promise<File> {
  const div = document.createElement('div');
  document.body.appendChild(div);

  ReactDOM.render(<ConventionClient setShowNavBar={() => {}} />, div);

  const opt = {
    margin: [0.5, 0, -0.08, 0],
    filename: 'convention_pdf.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    pagebreak: { avoid: 'tr', mode: 'css', after: '.page-break' },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  try {
    // Generate PDF content
    const blob = await html2pdf().from(div).set(opt).output('blob');

    // Clean up the DOM
    document.body.removeChild(div);

    // Create a File object from the Blob
    return new File([blob], 'Convention.pdf', {
      type: 'application/pdf',
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
}

const Convention: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState<boolean>(true);

  const downloadPDF = async () => {
    try {
      const pdfFile = await generateArConventionPdf();
      // Handle the PDF file (e.g., download it)
      console.log('Generated PDF:', pdfFile);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfFile);
      link.download = pdfFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div id='convention-component' className="centered-container1-x0">
      <div className="card1-x0">
        <h3 className="card-message-x0">Convention d'ouverture de compte</h3>
        <button className="card-button-x0" onClick={downloadPDF}>
          <span className="fa-solid fa-cloud-arrow-down"></span>
          Télécharger ma convention
        </button>
      </div>
    </div>
  );
};

export default Convention;
