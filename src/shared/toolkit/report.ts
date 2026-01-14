import jsPDF from 'jspdf';
import type { FindManyClassificationsOutputDTO } from '../../classifications/dtos/outputs/find-many-classifications.output.dto';

export class Report {
  #pdf: jsPDF;
  #data: FindManyClassificationsOutputDTO[];
  #source: string;
  #reference: string;
  #filters: string;

  constructor(
    data: FindManyClassificationsOutputDTO[],
    source: string,
    reference: string,
    filters: string,
  ) {
    this.#pdf = new jsPDF({
      orientation: 'landscape',
      format: 'a4',
      unit: 'mm',
    });
    this.#pdf.setDocumentProperties({ title: 'Classificação' });
    this.#data = data;
    this.#source = source;
    this.#reference = reference;
    this.#filters = filters;
  }

  create() {
    this.#layout();
    this.#table();
  }

  export() {
    const date = new Date();
    const month = date.getMonth() + 1;
    const monthFormatted = month.toString().length === 1 ? `0${month}` : month;
    this.#pdf.output('pdfobjectnewwindow', {
      filename: `classificacao_${date.getDate()}${monthFormatted}${date.getFullYear()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`,
    });
  }

  #layout() {
    this.#header();
    this.#footer();
  }

  #header() {
    // title
    this.#pdf.setFont('times', 'bold');
    this.#pdf.setFontSize(14);
    const title = 'CLASSIFICAÇÃO DE PROFESSORES';
    const titleHeight = this.#pdf.getTextDimensions(title).h;
    const titleX = 8;
    const titleY = titleHeight * 2;
    this.#pdf.text(title, titleX, titleY);
    // department
    const department = 'SECRETARIA MUNICIPAL DE EDUCAÇÃO';
    const departmentWidth = this.#pdf.getTextWidth(department);
    const departmentX = 289 - departmentWidth;
    const departmentY = titleY;
    this.#pdf.text(department, departmentX, departmentY);
    //source
    this.#pdf.setFont('times', 'normal');
    this.#pdf.setFontSize(12);
    const sourceX = 8;
    const sourceY = titleY + titleHeight;
    this.#pdf.text(this.#source, sourceX, sourceY);
    // reference
    this.#pdf.setFont('times', 'normal');
    this.#pdf.setFontSize(10);
    const reference = `REFERÊNCIA ${this.#reference}`;
    const referenceX = 8;
    const referenceY = sourceY + titleHeight;
    this.#pdf.text(reference, referenceX, referenceY);
    // filters
    this.#pdf.setFont('times', 'normal');
    this.#pdf.setFontSize(9);
    const filters = this.#filters;
    const filtersX = 8;
    const filtersY = referenceY + titleHeight;
    this.#pdf.text(filters, filtersX, filtersY);
    // organization
    this.#pdf.setFont('times', 'normal');
    this.#pdf.setFontSize(12);
    const organization = 'PREFEITURA DO MUNICÍPIO DE RANCHARIA/SP';
    const organizationWitdh = this.#pdf.getTextWidth(organization);
    const organizationX = 290 - organizationWitdh;
    const organizationY = titleY + titleHeight;
    this.#pdf.text(organization, organizationX, organizationY);
    // contact
    this.#pdf.setFont('times', 'normal');
    this.#pdf.setFontSize(10);
    const contact = 'RUA MARCÍLIO DIAS, 719 - CENTRO';
    const contactWitdh = this.#pdf.getTextWidth(contact);
    const contactX = 290 - contactWitdh;
    const contactY = organizationY + titleHeight;
    this.#pdf.text(contact, contactX, contactY);
    // document
    this.#pdf.setFont('times', 'normal');
    this.#pdf.setFontSize(9);
    const document = '44.935.278/0001-26';
    const documentWitdh = this.#pdf.getTextWidth(document);
    const documentHeight = this.#pdf.getTextDimensions(document).h;
    const documentX = 290 - documentWitdh;
    const documentY = contactY + titleHeight;
    this.#pdf.text(document, documentX, documentY);
    // header line
    const lineX1 = 7;
    const lineY1 = documentY + documentHeight;
    const lineX2 = 290;
    const lineY2 = lineY1;
    this.#pdf.setFont('times', 'bold');
    this.#pdf.setFontSize(14);
    this.#pdf.line(lineX1, lineY1, lineX2, lineY2);
  }

  #footer() {
    // footer line
    const lineX1 = 7;
    const lineY1 = 195;
    const lineX2 = 290;
    const lineY2 = lineY1;
    this.#pdf.setFont('times', 'bold');
    this.#pdf.setFontSize(14);
    this.#pdf.line(lineX1, lineY1, lineX2, lineY2);
    // date value
    const date = new Date();
    const month = date.getMonth() + 1;
    const monthFormatted = month.toString().length === 1 ? `0${month}` : month;
    const dateString = `${date.getDate()}/${monthFormatted}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // pagination value
    const page = this.#pdf.getCurrentPageInfo().pageNumber;
    const pageString = `Página ${page}`;
    // print footer texts
    this.#pdf.setFont('times', 'normal');
    this.#pdf.setFontSize(9);
    this.#pdf.text(dateString, 8, 200);
    this.#pdf.text(pageString, 288 - this.#pdf.getTextWidth(pageString), 200);
  }

  #tableHeader() {
    this.#pdf.setFont('times', 'bold');
    this.#pdf.setFontSize(11);
    this.#pdf.text('Nº', 10, 34);
    this.#pdf.text('PROFESSOR(A)', 18, 34);
    this.#pdf.text('TSM', 110, 34);
    this.#pdf.text('TSE', 125, 34);
    this.#pdf.text('Conc1', 140, 34);
    this.#pdf.text('Conc2', 155, 34);
    this.#pdf.text('Ped', 170, 34);
    this.#pdf.text('Mes', 185, 34);
    this.#pdf.text('Dout', 200, 34);
    this.#pdf.text('POS', 215, 34);
    this.#pdf.text('Ape', 230, 34);
    this.#pdf.text('Cur', 245, 34);
    this.#pdf.text('Pub', 260, 34);
    this.#pdf.text('TOTAL', 274, 34);
    // table header line
    const lineX1 = 9;
    const lineY1 = 35;
    const lineX2 = 288;
    const lineY2 = lineY1;
    this.#pdf.setFont('times', 'bold');
    this.#pdf.setFontSize(12);
    this.#pdf.line(lineX1, lineY1, lineX2, lineY2);
  }

  #tableBody() {
    let y = 40;
    let i = 1;
    for (const item of this.#data) {
      if (y === 190) {
        y = 40;
        this.#pdf.addPage('a4', 'landscape');
        this.#layout();
        this.#tableHeader();
      }
      this.#pdf.setFont('times', 'normal');
      this.#pdf.setFontSize(11);
      this.#pdf.text(i.toString(), 10, y);
      this.#pdf.text(item.name, 18, y);
      this.#pdf.text(item.t1?.toString() ?? '', 110, y);
      this.#pdf.text(item.t2?.toString() ?? '', 125, y);
      this.#pdf.text(item.t3?.toString() ?? '', 140, y);
      this.#pdf.text(item.t4?.toString() ?? '', 155, y);
      this.#pdf.text(item.t5?.toString() ?? '', 170, y);
      this.#pdf.text(item.t6?.toString() ?? '', 185, y);
      this.#pdf.text(item.t7?.toString() ?? '', 200, y);
      this.#pdf.text(item.t8?.toString() ?? '', 215, y);
      this.#pdf.text(item.t9?.toString() ?? '', 230, y);
      this.#pdf.text(item.t10?.toString() ?? '', 245, y);
      this.#pdf.text(item.t11?.toString() ?? '', 260, y);
      this.#pdf.setFont('times', 'bold');
      this.#pdf.text(item.total.toString(), 274, y);
      y += 6;
      i++;
    }
  }

  #table() {
    this.#tableHeader();
    this.#tableBody();
  }
}
