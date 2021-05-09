import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public constructor(private titleService: Title, public meta: Meta) {
    this.setTitle('Home');
    window.history.pushState('string', '', '/');
    this.meta.updateTag({
      name: 'description',
      content: 'A vegan and gluten free bakery based in Seattle, Washington.',
    });
  }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(`${newTitle} - HER Kitchen Seattle`);
  }
  ngOnInit(): void {}
}
