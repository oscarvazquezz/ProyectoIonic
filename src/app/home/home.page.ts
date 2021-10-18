import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  user = {
    usuario: '',
    contrasena: ''
  }


  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }


  onKeyPassword(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9-*#&$%]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }


  async onSubmit(_form: NgForm) {
    console.log(this.user);
    alert(this.user.usuario + ' : ' + this.user.contrasena)
    let regExp = new RegExp('^[A-Za-z0-9-*#&$%]+$');
    console.log(regExp.test(this.user.contrasena))
    if(!regExp.test(this.user.contrasena)){
      console.log("si cumple")
    }

  }


}
