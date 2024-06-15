declare module 'html2pdf.js' {
    interface Html2PdfOptions {
        // Define the options for html2pdf function here
        margin?: number | number[];
        filename?: string;
        image?: { type: string; quality: number };
        html2canvas?: { scale: number };
        pagebreak?: { avoid: string; mode: string; after: string };
        jsPDF?: { unit: string; format: string; orientation: string };
        // Add more options as needed
    }

    interface Html2PdfInstance {
        set(opt: Html2PdfOptions): Html2PdfInstance;
        from(element: HTMLElement): Html2PdfInstance;
        output(mode: string): Blob;
        save(): void;
    }

    function html2pdf(options?: Html2PdfOptions): Html2PdfInstance;
    export default html2pdf;
}
