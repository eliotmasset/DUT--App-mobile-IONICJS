import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Accueil',
  templateUrl: 'Accueil.page.html',
  styleUrls: ['Accueil.page.scss']
})
export class AccueilPage {

  datas:any;
  login:string;

  async refresh(e){
    this.storage.get('login').then((valeur) => {
      let regex = new RegExp(/classe([0-9]{1})/gm, 'i');
      if(valeur!="")
        this.login=valeur.match(regex)[1];
      else
        this.router.navigate(['/']);
      this.storage.get('mdp').then((mdp) => {
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+valeur+'&mdp='+mdp)
                        .subscribe((data) => {
                          this.datas = data; 
                          e.target.complete();
        });
      });
    });
  }

  toDate(date)
  {
    return new Date(date).toLocaleString();
  }

  constructor(private router: Router,private storage: Storage,private http: HttpClient) {
    storage.get('login').then((valeur) => {
      let regex = new RegExp(/classe([0-9]{1})/gm, 'i');
      if(valeur!="")
        this.login=valeur.match(regex)[1];
      else
        this.router.navigate(['/']);
      storage.get('mdp').then((mdp) => {
        this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login='+valeur+'&mdp='+mdp)
                        .subscribe((data) => {
                          this.datas = data;
        });
      });
    });
  }

}
