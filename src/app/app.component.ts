import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  num1Field: string = '';
  num2Field: string = '';
  operatorField: string = '';

  num1: number | undefined = undefined;
  num2: number | undefined = undefined;

  operator: string = '';
  operated: boolean = false;

  updateNum(num: string) {
    if (!this.operated && this.num1Field.length <= 10) {
      this.num1Field += num;
      this.num1 = parseInt(this.num1Field);
    }
    else if (this.operated && this.num2Field.length <= 10) {
      this.num2Field += num;
      this.num2 = parseInt(this.num2Field);
    }
  }

  setOperator(op: string) {
    if (!this.operated && this.num1 != undefined) {
      this.operatorField = op;
      switch (op) {
        case '+':
          this.operator = 'add';
          break;
        case '-':
          this.operator = 'subtract';
          break;
        case '*':
          this.operator = 'multiply';
          break;
        case '/':
          this.operator = 'divide';
          break;
        default:
          this.operator = '';
          break;
      }
      this.operated = true;
    }
  }

  calc() {
    if (this.num1 != undefined && this.num2 != undefined) {
      let final = 0;
      switch (this.operator) {
        case 'add':
          final = this.num1 + this.num2;
          break;
        case 'subtract':
          final = this.num1 - this.num2;
          break;
        case 'multiply':
          final = this.num1 * this.num2;
          break;
        case 'divide':
          final = this.num1 / this.num2;
          break;
        default:
          final = this.num1;
      }

      this.num1 = final;
      this.num1Field = this.num1.toString();
      this.num2 = undefined;
      this.num2Field = '';
      this.operator = ''
      this.operated = false;
      console.log(this.num1)
    }
  }

  reset() {
    this.num1 = undefined;
    this.num2 = undefined;
    this.num1Field = '';
    this.num2Field = '';
    this.operator = '';
    this.operated = false;
  }
}
