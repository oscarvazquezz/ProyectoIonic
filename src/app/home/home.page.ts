import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  user = {
    usuario: '',
    contrasena: '',
    verificacionUsuario : false,
    verificacionContra : false,
  }

  alertaContra="";
  alertaPassword="";

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9]*$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      this.user.usuario = event.target.value;
      this.verificacionUsuario();
    }else{
      this.verificacionUsuario();
    }
  }

  verificacionUsuario(){
    let email = new RegExp("^[A-Za-z0-9]*$");
    if(!email.test(this.user.usuario)){
      this.alertaContra = "invalido";
      this.user.verificacionUsuario = false;
    }else{
      this.alertaContra = "valido";
      this.user.verificacionUsuario = true;
    }
  }

  onKeyPassword(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    
    let regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      this.user.contrasena = event.target.value;
      this.verificacionPasswor();
    }else{
      this.verificacionPasswor();
    }
  }

  verificacionPasswor(){
    let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");
    if(!password.test(this.user.contrasena)){
      this.alertaPassword = "invalido";
      this.user.verificacionContra = false;
    }else{
      this.alertaPassword = "valido";
      this.user.verificacionContra = true;
    }
  }


  async onSubmit(_form: NgForm) {
    if(this.user.usuario =="" && this.user.contrasena==""){
      alert("Por favor lleva los campos que te falta")
    }else{
      alert(this.user.usuario + ' : ' + this.user.contrasena);
      this.router.navigate(['/tabs/carousel']);
    }

  }


}
