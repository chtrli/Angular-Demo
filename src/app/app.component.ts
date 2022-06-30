import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onChangeUseLetters(){
   this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: string){
   this.length = parseInt(value);
   console.log(this.length);
  }

  onButtonClick(){
  const numbers = '1234567890';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#$%^&*()';
  let validChars = '';

  if(this.includeLetters){
    validChars = validChars + letters;
  }
  if(this.includeNumbers){
    validChars = validChars + numbers;
  }
  if(this.includeSymbols){
    validChars = validChars + symbols;
  }

  let generatedPassword = '';
  for(let i =0;i<=this.length;i++){
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword = generatedPassword + validChars[index];
  }

  this.password = generatedPassword;
  }
}
