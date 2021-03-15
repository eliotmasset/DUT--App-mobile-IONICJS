import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Articles',
  templateUrl: 'Articles.page.html',
  styleUrls: ['Articles.page.scss']
})
export class ArticlesPage {

  datas:any;
  images:any;
  
  async refresh(e){
    this.storage.get('login').then((valeur) => {
      if(valeur=="")
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

  constructor(private router: Router,private storage: Storage,private http: HttpClient) {
    storage.get('login').then((valeur) => {
      if(valeur=="")
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
