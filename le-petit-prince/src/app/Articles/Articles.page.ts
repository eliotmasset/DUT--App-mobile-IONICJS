import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Articles',
  templateUrl: 'Articles.page.html',
  styleUrls: ['Articles.page.scss']
})
export class ArticlesPage {

  datas:any;
  images:any;

  constructor(private http: HttpClient) {
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=classe1&mdp=mdp1')
                   .subscribe((data) => {
                     console.log(data);
                      this.datas = data;
    });
  }
}
