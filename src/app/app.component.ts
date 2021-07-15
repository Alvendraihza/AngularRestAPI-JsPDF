import { Component, ViewChild, ElementRef } from '@angular/core';
// import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isShown: boolean = false;

  @ViewChild('content', {static: false}) el!: ElementRef;
  title = 'mawang';
  employees$: any

  constructor(private employeeService: EmployeeService) {
    this.employees$ = [];
  }

  showTable() {
    this.isShown = this.isShown ? false : true;
  }

  makePDF(){
    var doc = new jsPDF('p','pt','a4');
    // margin: [1, 1, 20, 10],
    // doc.setFontSize(12);
    // // doc.text('Angular PDF Table', 11, 8);
    // doc.setFontSize(12);
    // doc.setTextColor(99);

    // let pdf = new jsPDF('p','pt','a3');
    doc.html(this.el.nativeElement, {
      
      callback: (pdf)=> {
        // pdf.output('dataurlnewwindow'),
        doc.save("demo.pdf");
      }
    });

  }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }
}
