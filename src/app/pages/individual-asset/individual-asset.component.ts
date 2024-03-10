import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinancialAsset } from 'src/app/shared/models/financial-asset.model';
import { AssetService } from 'src/app/shared/services/asset.service';

@Component({
  selector: 'app-individual-asset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './individual-asset.component.html',
  styleUrl: './individual-asset.component.scss',
})
export class IndividualAssetComponent implements OnInit {
  asset: FinancialAsset | undefined;

  constructor(
    private assetService: AssetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      setTimeout(() => {
        this.getIndividualAsset(id);
      }, 500);
    }
  }

  getIndividualAsset(id: string): void {
    this.asset = this.assetService.getAssetById(id);
  }

  getMarginClass(profitMargin: number): string {
    return profitMargin > 0 ? 'profit' : 'loss';
  }
}
