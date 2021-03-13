import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validation_messages = {
    'login': [
        { type: 'required', message: 'Le login est requis.' },
        { type: 'minlength', message: 'Le login doit avoir un minimum de 3 charactères.' },
        { type: 'maxlength', message: 'Le login doit avoir un maximum de 10 charactères.' },
      ],
      'mdp': [
        { type: 'required', message: 'Le mot de passe est requis.' },
        { type: 'minlength', message: 'Le mot de passe doit avoir un minimum de 3 charactères.' },
        { type: 'maxlength', message: 'Le mot de passe doit avoir un maximum de 10 charactères.' },
      ],
    }

    login= new FormControl("", Validators.compose([
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),]
    ));
    
    mdp= new FormControl("", Validators.compose([
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]));

    user_group = new FormGroup({
      login: this.login,
      mdp: this.mdp,
   }); 
   formBuilder = new FormBuilder();
   
   validations_form = this.formBuilder.group({
     user: this.user_group,
   });

  constructor(private http: HttpClient,private router: Router,public toastController: ToastController) {
   }

  ngOnInit() {
  }

  auth()
  {
    this.router.navigate(['/tabs'])
  }

  async toast(head,text)
  {
    const toast = await this.toastController.create({
      header: head,
      message: text,
      position: 'bottom',
      buttons: [ {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    toast.present();
  }

  async loging() {
    let url = "http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login="+this.user_group.get("login").value+"&mdp="+this.user_group.get("mdp").value;
    this.http.get(url)
                   .subscribe((data) => {
                    data["resultat"]!= undefined ? this.auth() : this.toast("Erreur","Le login ou le mot de passe ne correspondent pas !");
    });
  }

}
