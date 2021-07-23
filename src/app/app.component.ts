import { Component, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-RestAPI-ExportPDF';

  @ViewChild('htmlData') htmlData: ElementRef;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];

  public userData:any = []
  public iniData:any = []

  constructor(private dataService:DataService) {
    this.userData,
    this.iniData
    ;
  }

  public openPDF():void {
    //const DATA = document.getElementById('htmlData');

    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.text('PT.MANDIRI UTAMA FINANCE', 85, 15);
    //pdf.html(document.getElementById('htmlData'));
    //pdf.text('Nama : ', 20, 15);
    pdf.setFontSize(30);
    
    
    autoTable(pdf, {
      html: '#tableData',
      theme: 'grid',
      startY: 40,
      bodyStyles:{
        valign: 'middle'
      },
      styles: {
        cellWidth: 'auto',
        halign: 'center'
      },
      columnStyles: {
        Text: {
          cellWidth: 'auto'
        }
      },
      didDrawCell: data => {
        console.log(data.column.index)
      }
    });

    // autoTable(pdf, {
    //   body: this.USERS,
    //   theme: 'grid',
    //   startY: 15,
    //   bodyStyles: {
    //     valign: 'top'
    //   },
    //   styles: {
    //     cellWidth: 'wrap',
    //     halign: 'justify'
    //   },
    //   columnStyles: {
    //     Text: {
    //       cellWidth: 'auto'
    //     }
    //   },
    //   didDrawCell: data => {
    //     console.log(data.column.index)
    //   }
    // });

    pdf.output('dataurlnewwindow');

  }

  ngOnInit() {
    this.userData = this.dataService.getData();
    this.iniData = this.dataService.getUser()[1].name;
    console.log(this.iniData);
  }

}
