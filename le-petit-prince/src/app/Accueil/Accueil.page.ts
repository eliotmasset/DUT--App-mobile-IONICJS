import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Accueil',
  templateUrl: 'Accueil.page.html',
  styleUrls: ['Accueil.page.scss']
})
export class AccueilPage {

  datas:any;

  toDate(date)
  {
    return new Date(date).toLocaleString();
  }

  constructor(private http: HttpClient) {
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=classe1&mdp=mdp1')
                   .subscribe((data) => {
                      this.datas = data;
    });
  }

}
