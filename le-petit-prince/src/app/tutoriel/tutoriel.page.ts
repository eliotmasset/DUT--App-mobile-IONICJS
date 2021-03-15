import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.page.html',
  styleUrls: ['./tutoriel.page.scss'],
})
export class TutorielPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private router: Router) { }

  begin()
  {
    this.router.navigate(['/tabs']);
  }

  ngOnInit() {
  }

}
