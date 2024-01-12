import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(){
    this.name = 'spiderman';
  }

  changeAge(){
    this.age = 33;
  }

  reset(){
    this.name = 'ironMan';
    this.age = 45;
  }
}
