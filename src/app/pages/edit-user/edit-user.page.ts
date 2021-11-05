import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  constructor() { }

  user = {
    usuario: '',
    email : '',
    paterno: '',
    materno : '',
    telefono:'',
    verificacionEmail:false,
    verificacionUsuario:false,
    verificacionPaterno:false,
    verificacionMaterno:false,
    verificacionTelefono:false,
  }

  alertaContra="";
  alertaUsuario="";
  alertaPaterno="";
  alertaMaterno="";
  alertaTelefono="";

  ngOnInit() {
  }

  onKeyEmail(event: any){
     let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9@.'_-]*$");
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
    //let datosVacios = new RegExp("^()([a-zA-Z])()([a-zA-Z]{0,})+(?:\.[a-zA-Z ]+)*$");
    let regExp = new RegExp("^[a-zA-Z]*$");
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
      if(event.target.name == "usuario"){
        this.user.usuario = event.target.value;
      }
      if(event.target.name == "paterno"){
        this.user.paterno = event.target.value;
      }
      if(event.target.name == "materno"){
        this.user.materno = event.target.value;
      }

    }else{
      this.verificacionDatos(event.target.name);
    }
 }

 verificacionDatos(name:String){
   
  let usuarios = new RegExp("^[a-zA-Z]*$");  
  if(name=="usuario"){
    if(!usuarios.test(this.user.usuario)){
      this.alertaUsuario = "invalido";
      let datos = this.user.usuario.replace(" ","");
      this.user.usuario = datos;
      
      this.verificacionDatos(name)
      this.user.verificacionUsuario = false;
    }else{
      this.alertaUsuario = "valido";
      this.user.verificacionUsuario = true;
    }
  }
  if(name=="paterno"){
      if(!usuarios.test(this.user.paterno)){
        this.alertaPaterno = "invalido";
        this.user.verificacionPaterno = false;
      }else{
        this.alertaPaterno = "valido";
        this.user.verificacionPaterno = true;
      }
  }
  if(name=="materno"){
    if(!usuarios.test(this.user.materno)){
      this.alertaMaterno = "invalido";
      this.user.verificacionMaterno = false;
    }else{
      this.alertaMaterno = "valido";
      this.user.verificacionMaterno = true;
     }
 }
 }

 onKeyTelefono(event: any){
  let newValue = event.target.value;
  console.log(newValue);
  let regExp = new RegExp("[0-9]+(?:\.[0-9]+)*$");
  console.log(regExp.test(newValue));
  if(!regExp.test(newValue)){
    event.target.value = newValue.slice(0, -1);
    this.user.telefono = event.target.value;
    this.verificarTelefono();
  }else{
    this.verificarTelefono();
  }
}

verificarTelefono(){
  let telefono = new RegExp("[0-9]+(?:\.[0-9]+)*$");
  if(!telefono.test(this.user.telefono)){
    this.alertaTelefono = "invalido";
    this.user.verificacionTelefono =false;
  }else{
    this.alertaTelefono = "valido";
    this.user.verificacionTelefono = true;
  }
}

 async guardar(_form: NgForm){
  alert("Ya se edito ese usuario")
  console.log(this.user)
 } 

}
