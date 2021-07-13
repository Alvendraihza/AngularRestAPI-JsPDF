import { Component, ViewChild, ElementRef } from '@angular/core';
// import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('content', {static: false}) el!: ElementRef;
  title = 'mawang';
  employees$: any

  constructor(private employeeService: EmployeeService) {
    this.employees$ = [];
  }

  makePDF(){
    // const doc = new jsPDF();
    // const pageHeight = doc.internal.pageSize.height;
    // const pageWidth = doc.internal.pageSize.width;
    // doc.setFontSize(14);
    let pdf = new jsPDF('p','pt','a3');
    pdf.html(this.el.nativeElement, {
      callback: (pdf)=> {
        pdf.save("demo.pdf");
      }
    });

  }

  ngOnInit() {
    this.employees$ = this.employeeService.getEmployees();
  }
}
