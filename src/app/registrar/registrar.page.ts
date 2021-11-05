import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  constructor() { }

  user = {
    usuario: '',
    email : '',
    contrasena: '',
    contrasenaVerif : '',
    verificacionEmail:false,
    verificacionUsuario:false,
    verificacionContra:false,
    verificacionContraVefi:false,
  }

  alertaUsuario="";
  alertaContra="";
  alertaPassword="";
  alertaPasswordVeri="";

  ngOnInit() {
  }

  onKeyContra(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9@.'_-]*$");
    new RegExp("[A-Za-z0-9]*$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      this.user.email = event.target.value;
      this.verificacionEmail();
    }else{
      this.verificacionEmail();
    }
  }

  verificacionEmail(){
    let email = new RegExp("[a-zA-Z0-9.'_-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$");
    if(!email.test(this.user.email)){
      this.alertaContra = "invalido";
      this.user.verificacionEmail =false;
    }else{
      this.alertaContra = "valido";
      this.user.verificacionEmail = true;
    }
  }

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
    let usuarios = new RegExp("^[A-Za-z0-9]*$");
    if(!usuarios.test(this.user.usuario)){
      this.alertaUsuario = "invalido";
      this.user.verificacionUsuario = false;
    }else{
      this.alertaUsuario = "valido";
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
      this.verificacionPassword();
    }else{
      this.verificacionPassword();
    }
  }

  verificacionPassword(){
    let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");
    if(!password.test(this.user.contrasena)){
      this.alertaPassword = "invalido";
      this.user.verificacionContra = false;
    }else{
      this.alertaPassword = "valido";
      this.user.verificacionContra = true;
    }
  }

  onKeyPasswordVeri(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    
    let regExp = new RegExp('^[A-Za-z0-9*#&$%]*$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      this.user.contrasenaVerif = event.target.value;
      this.verificacionPassAux()
    }else{
      this.verificacionPassAux();
    }
  }

  verificacionPassAux(){
    let password = new RegExp("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[*#&$%])");
    if(!password.test(this.user.contrasenaVerif)){
      this.alertaPasswordVeri = "invalido";
      this.user.verificacionContraVefi = false;
    }else{
      this.alertaPasswordVeri = "valido";
      this.user.verificacionContraVefi = true;
    }
  }

  async guardar(_form: NgForm){
    if(this.user.contrasena == this.user.contrasenaVerif){
      alert("Ya se registro ese usuario")
      console.log(this.user)
    }else{
      alert("las contraseñas no concuerda")
    }
  } 

}
