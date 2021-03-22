import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-Accueil',
  templateUrl: 'Accueil.page.html',
  styleUrls: ['Accueil.page.scss']
})
export class AccueilPage {

  datas:any;
  login:string;
  prefersDark: any;
  toggle: any;
  isDark: boolean;

  async refresh(e){
    this.storage.get('login').then((valeur) => {
      let regex = new RegExp(/classe([0-9]{1})/gm, 'i');
      if(valeur!="")
        this.login=valeur.match(regex)[1];
      else
        this.router.navigate(['/']);
      this.storage.get('mdp').then((mdp) => {
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+valeur+'&mdp='+mdp,{},{})
                        .then((data) => {
                          this.datas = JSON.parse(data.data); 
                          e.target.complete();
        });
      });
    });
  }

  toDate(date)
  {
    return new Date(date).toLocaleString();
  }

  async deconnexion()
  { 
    this.storage.remove('mdp');
    this.storage.remove('login');
    this.router.navigate(['/']);
  }

  darkmode(ev) {
    this.isDark=!ev.srcElement.checked;
    this.storage.set('darkmode', this.isDark);
    document.body.classList.toggle('dark', this.isDark);
  }

  constructor(private router: Router,private storage: Storage,private http: HTTP) {
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.isDark=document.body.classList.contains('dark');
    storage.get('darkmode').then((value) => {
      this.isDark=value;
      document.body.classList.toggle('dark', this.isDark);
    });

    storage.get('login').then((valeur) => {
      let regex = new RegExp(/classe([0-9]{1})/gm, 'i');
      if(valeur!="")
        this.login=valeur.match(regex)[1];
      else
        this.router.navigate(['/']);
      storage.get('mdp').then((mdp) => {
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+valeur+'&mdp='+mdp,{},{})
                        .then((data) => {
                          this.datas = JSON.parse(data.data);
        });
      });
    });
  }

}
