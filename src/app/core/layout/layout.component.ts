import { Component } from '@angular/core';
import { AssetService } from 'src/app/shared/services/asset.service';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SharedModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor(private assetService: AssetService) {
    this.getAllAssets();
  }

  getAllAssets(): void {
    this.assetService.getAllAssets().subscribe((data) => {
      this.assetService.setFilteredAssets(data);
    });
  }
}
