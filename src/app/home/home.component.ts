import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private titleService: Title, public meta: Meta) {
    this.meta.updateTag({ name: 'robots', content: 'index' });
    this.setTitle('Home');
    window.history.pushState('string', '', '/');
    this.meta.updateTag({
      name: 'description',
      content: 'A vegan and gluten free bakery based in Seattle, Washington.',
    });
  }
  setTitle(newTitle: string) {
    this.titleService.setTitle(`${newTitle} - HER Kitchen Seattle`);
  }
}
