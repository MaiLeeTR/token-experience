import { Component } from '@angular/core';
import { SafBadge, SafSrOnly, SafIcon, SafCard } from '@saffron/core-components';

SafBadge();
SafSrOnly();
SafIcon();
SafCard();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'token-experience';
}
