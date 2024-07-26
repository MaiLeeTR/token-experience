import { Component } from '@angular/core';
import { SafBadge, SafSrOnly, SafIcon, SafCard, SafAnchor } from '@saffron/core-components';

SafBadge();
SafSrOnly();
SafIcon();
SafCard();
SafAnchor();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'token-experience';
}
