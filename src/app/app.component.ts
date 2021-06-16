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


  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
    
  }

  onChangeUseNumbers() {
    this.includeNumbers=!this.includeNumbers;
    
  }

  onChangeUseSymbols() {
    this.includeSymbols=!this.includeSymbols;
    
  }

  onchangeLength(value:string) {
    const paresValue = parseInt(value);
    this.length = paresValue;
    if (!isNaN(paresValue)) {
      this.length = paresValue;
    }
  }




  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
      
    }
  
    if (this.includeSymbols) {
      validChars += symbols;
     
    }
    let generatedPasswords = '';
    for (let i = 0; i < this.length; i++) {
      
      const index = Math.floor(Math.random() * validChars.length);
      generatedPasswords += validChars[index];
    console.log(generatedPasswords);

    }

    this.password = generatedPasswords;
    console.log(generatedPasswords);
    
  }









}
