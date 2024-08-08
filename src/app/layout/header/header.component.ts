import { Component } from '@angular/core';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_MENU_DEFAULT_OPTIONS,
  MatMenuModule,
} from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatToolbarRow,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    RouterLinkActive,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [
    {
      provide: MAT_MENU_DEFAULT_OPTIONS,
      useValue: {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
        overlayPanelClass: 'menu-overlay',
      },
    },
  ],
})
export class HeaderComponent {}
