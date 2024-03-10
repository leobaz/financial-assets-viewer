import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FinancialAsset } from 'src/app/shared/models/financial-asset.model';
import { IndustryFilter } from 'src/app/shared/models/industry-filter.model';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { AssetService } from 'src/app/shared/services/asset.service';
import { AssetFiltersComponent } from './asset-filters/asset-filters.component';

@Component({
  selector: 'app-financial-asset',
  standalone: true,
  imports: [
    PrimeNgModule,
    CommonModule,
    FormsModule,
    AssetFiltersComponent,
    RouterModule,
  ],
  templateUrl: './financial-asset.component.html',
  styleUrl: './financial-asset.component.scss',
})
export class FinancialAssetComponent implements OnInit {
  assets: FinancialAsset[] = [];
  filteredAssets: FinancialAsset[] = [];
  industries: IndustryFilter[] = [];
  selectedIndustries: string[] = [];
  showFilters = false;
  rangeValues: number[] = [];

  constructor(private assetService: AssetService) {}

  ngOnInit(): void {
    this.getFilteredAssetsFromSubject();
  }

  getFilteredAssetsFromSubject(): void {
    this.assetService.getFilteredAssets().subscribe((data) => {
      this.filterIndustries(data);
      this.assets = [...data];
      this.filteredAssets = [...data];
      this.getRangeValues(data);
    });
  }

  getMarginClass(profitMargin: number): string {
    return profitMargin > 0 ? 'profit' : 'loss';
  }

  filterIndustries(assets: FinancialAsset[]): void {
    this.industries = assets.reduce((acc: IndustryFilter[], cur) => {
      const exists = acc.some((item) => item.name === cur.industry);
      if (cur.industry && !exists) {
        acc.push({ name: cur.industry });
      }
      return acc;
    }, []);
  }

  getRangeValues(assets: FinancialAsset[]): void {
    const filteredProfitMargin = [...assets].filter(
      (item) => item.profitMargin
    );
    this.rangeValues.push(
      Math.min(...filteredProfitMargin.map((item) => item.profitMargin))
    );
    this.rangeValues.push(
      Math.max(...filteredProfitMargin.map((item) => item.profitMargin))
    );
  }
}
