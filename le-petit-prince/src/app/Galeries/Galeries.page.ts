import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Galeries',
  templateUrl: 'Galeries.page.html',
  styleUrls: ['Galeries.page.scss']
})
export class GaleriesPage {

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    effect: 'flip',
    spaceBetween: 100
  };

  datas:any;

  get_Url(name)
  {
    return 'http://www.sebastien-thon.fr/cours/M4104Cip/projet/images/'+name;
  }

  constructor(private http: HttpClient) {
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=classe1&mdp=mdp1')
                   .subscribe((data) => {
                     console.log(data);
                      this.datas = data;
                    });
  }

}
