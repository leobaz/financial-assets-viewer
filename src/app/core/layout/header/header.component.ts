import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, PrimeNgModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navItems = ['home', 'user'];
}
