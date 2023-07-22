import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // delay(3000),
        switchMap( ({ id }) => this.heroesService.getHeroById( id ))
      )
      .subscribe( hero => {

        if( !hero ) return this.router.navigate( [ '//heroes/list' ]);

        this.hero = hero;
        console.log({hero})
        return;
      });
  }

  goBack(){
    this.router.navigateByUrl('heroes/list');
  }
}
