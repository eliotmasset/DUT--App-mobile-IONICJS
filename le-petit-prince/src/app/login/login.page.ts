import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validation_messages = {
    'login': [
        { type: 'required', message: 'Le login est obligatoire.' },
        { type: 'minlength', message: 'Le login doit faire au moins 3 caractères.' },
        { type: 'maxlength', message: 'Le login doit faire au maximum 10 caractères.' },
      ],
      'mdp': [
        { type: 'required', message: 'Le mot de passe est obligatoire.' },
        { type: 'minlength', message: 'Le mot de passe doit faire au moins 3 caractères.' },
        { type: 'maxlength', message: 'Le mot de passe doit faire au maximum 10 caractères.' },
      ],
      'remind': [
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
    remind= new FormControl(false, Validators.compose([
    ]));

    user_group = new FormGroup({
      login: this.login,
      mdp: this.mdp,
      remind: this.remind,
   }); 
   formBuilder = new FormBuilder();
   
   validations_form = this.formBuilder.group({
     user: this.user_group,
   });

  constructor(private storage: Storage,private http: HTTP,private router: Router,public toastController: ToastController) {
    
    storage.get('darkmode').then((value) => {
      document.body.classList.toggle('dark', value);
    });
    storage.get('remind').then((remind) => {
      console.log("log");
      if(remind==true)
        storage.get('login').then((login) => {
          storage.get('mdp').then((mdp) => {
            if(login!="" || mdp!="")
            {
              let url = "http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login="+login+"&mdp="+mdp;
              this.http.get(url,{},{}).then((data) => {
                JSON.parse(data.data).resultat!= undefined ? this.auth(remind, login, mdp, true) : this.toast("Erreur","Les identifiants ont été modifiés depuis la dernière connexion");
              });
            }
          });
        });
    });
   }

  ngOnInit() {
  }

  auth(remind, login, mdp, noTuto)
  {
    this.storage.set('remind', remind);
    this.storage.set('login', login);
    this.storage.set('mdp',mdp);
    if(noTuto)
      this.router.navigate(['/tabs']);
    else
      this.router.navigate(['/tutoriel']);
  }

  async toast(head,text)
  {
    const toast = await this.toastController.create({
      header: head,
      message: text,
      position: 'bottom',
      buttons: [ {
          text: 'Fermer',
          role: 'fermer',
          handler: () => {}
        }
      ]
    });
    toast.present();
  }

  async loging() {
    let url = "http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?connexion&login="+this.user_group.get("login").value+"&mdp="+this.user_group.get("mdp").value;
    this.http.get(url,{},{})
                   .then((data) => {
                    JSON.parse(data.data).resultat != undefined ? this.auth(this.user_group.get("remind").value,this.user_group.get("login").value,this.user_group.get("mdp").value,false) : this.toast("Erreur","Login ou mot de passe incorrect !");
    });
  }

}
