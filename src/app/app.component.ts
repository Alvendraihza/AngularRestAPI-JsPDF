import { Component, ViewChild, ElementRef } from '@angular/core';
// import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isShown: boolean = false;

  @ViewChild('content', {static: false}) el!: ElementRef;
  title = 'Dominic';
  employees$: any

  constructor(private employeeService: EmployeeService) {
    this.employees$ = [];
  }

  showTable() {
    this.isShown = this.isShown ? false : true;
  }

  public makePDF(): void{
    const pdf = new jsPDF('p','pt','a4');
    pdf.setFontSize(12);
    // pdf.text(85, 15);
    //pdf.html(document.getElementById('#dataTable'));
    //pdf.text('Nama : ', 20, 15);
    
    // autoTable(pdf, {
    //   theme: 'plain',
    //   startY: 1000,
    //   bodyStyles:{
    //     valign: 'middle'
    //   },
    //   styles: {
    //     cellWidth: 'auto',
    //     halign: 'center'
    //   },
    //   columnStyles: {
    //     Text: {
    //       cellWidth: 'auto'
    //     }
    //   }
    //   // didDrawCell: data => {
    //   //   console.log(data.column.index)
    //   // }
    // });
    
    // var doc = new jsPDF('p','pt','a4');
    // margin: [1, 1, 20, 10],
    // doc.setFontSize(12);
    // // doc.text('Angular PDF Table', 11, 8);
    // doc.setFontSize(12);
    // doc.setTextColor(99);

    // let pdf = new jsPDF('p','pt','a3');

    
    pdf.html(this.el.nativeElement, {
      
      callback: (pdf)=> {
        pdf.output('dataurlnewwindow');
        pdf.save("demo.pdf");
      }
    });
  }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
    console.log(this.employees$);
  }
}
