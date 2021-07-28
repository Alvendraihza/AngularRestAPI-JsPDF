import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
// import { jsPDF } from "jspdf";
// import autoTable from 'jspdf-autotable';
import { mockData } from './mock-data'
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  isShown: boolean = false;

  @ViewChild('content', {static: false}) el!: ElementRef;
  title = 'Angularpdf';
  employees$: any;
  data = mockData;

  columns = [
    { prop: 'no', name: 'Reviewer', width: 100 },
    { prop: 'name', name: 'Updated Date', width: 100 },
    { prop: 'username', name: 'Case ID', width: 100 },
    { prop: 'email', name: 'Category Code', width: 100 },
  ];

  constructor(private employeeService: EmployeeService) {
    this.employees$ = [];
  }

  showTable() {
    this.isShown = this.isShown ? false : true;
  }

  public openPDF() {
    var docDefinition = {
      content: [
        {text: 'PT.MANDIRI UTAMA FINANCE', 
        bold: true,
        },
        '\n\n\n',
        {text: 'HISTORY PAYMENT', 
        bold: true,
        },
        {
          color: '#444',// optional
          table: {
            headerRows: 2,
            widths: [200, 'auto', 'auto'],

            body: [
              [{text: 'KE', style: 'tableHeader', rowSpan: 2, alignment: 'center'}, {text: 'TANGGAL', style: 'tableHeader', colSpan: 2, alignment: 'center'}, {}],
					    [{text: 'PAID', style: 'tableHeader', alignment: 'center'}, {text: 'KOLEKSI', style: 'tableHeader', alignment: 'center'}, {text: 'DUE', style: 'tableHeader', alignment: 'center'}],
              
            ]
          },
          
        }
      ],
      styles: {
        subheader: {
          fontSize: 20,
          bold: true
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
  }

  // public makePDF(): void{
  //   const pdf = new jsPDF('p','pt','a4');
  //   pdf.setFontSize(12);

  //   //pdf.html(document.getElementById('htmlData'));
  //   //pdf.text('Nama : ', 20, 15);
  //   // pdf.setFontSize(30);
    
  //   autoTable(pdf, {
  //     head: [['NO', 'NAME', 'USERNAME', 'EMAIL']],
      
  //     theme: 'grid',
  //     startY: 270,
  //     bodyStyles:{
  //       valign: 'middle'
  //     },
  //     styles: {
  //       cellWidth: 'auto',
  //       halign: 'center'
  //     },
  //     columnStyles: {
  //       Text: {
  //         cellWidth: 'auto'
  //       }
  //     },
  //     didDrawPage: function () {
  //       pdf.setFontSize(20);
  //       pdf.setTextColor(40);
  //       pdf.text('INI HEADER', 80, 50, { align: 'center'});
  //     }
  //   });
    
  //   // var doc = new jsPDF('p','pt','a4');
  //   // margin: [1, 1, 20, 10],
  //   // doc.setFontSize(12);
  //   // // doc.text('Angular PDF Table', 11, 8);
  //   // doc.setFontSize(12);
  //   // doc.setTextColor(99);

  //   // let pdf = new jsPDF('p','pt','a3');

    
  //   pdf.html(this.el.nativeElement, {
      
  //     callback: (pdf)=> {
  //       pdf.output('dataurlnewwindow');
  //       // pdf.save("demo.pdf");
  //     }
  //   });
  // }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
    console.log(this.employees$);
  }
}
