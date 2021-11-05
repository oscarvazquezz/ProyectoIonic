import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.page.html',
  styleUrls: ['./recuperar-cuenta.page.scss'],
})
export class RecuperarCuentaPage implements OnInit {

  constructor(private router:Router) { }

  user = {
    email : "",
    verificacion:false,
  }

  alertaContra="";

  ngOnInit() {
  }

  onKeyEmail(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp("^[A-Za-z0-9@.'_-]*$");
    //new RegExp("^[A-Za-z0-9]*$");
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
      this.user.verificacion = false;
    }else{
      this.alertaContra = "valido";
      this.user.verificacion = true;
    }
  }


  async guardar(_form: NgForm){

    let email = new RegExp("[a-zA-Z0-9.!#$%&'*_-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
    if(!email.test(this.user.email)){
      alert("Correo electronico invalido");
    }else{
      alert("Verifique el mensaje que le cayo su correo");
    }
  } 
  
}
