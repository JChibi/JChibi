import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="Juan Gabriel Jolón López";
  carnet="0907-15-21461";
  docente="Ing. Carlos Herdandez";
 resultado="";
 num2="";
 num1="";
 
 suma(){
 var res = parseFloat(this.num1) + parseFloat(this.num2);
 this.resultado=""+ res;
 }
 resta(){
 var res = parseFloat(this.num1) - parseFloat(this.num2);
 this.resultado=""+ res;
}
multiplicacion(){
 var res = parseFloat(this.num1) * parseFloat(this.num2);
 this.resultado=""+ res;
}
division(){
  var res = parseFloat(this.num1) / parseFloat(this.num2);
  this.resultado=""+ res;
 }
}
