import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterService } from 'primeng/api';
import { FinancialAsset } from 'src/app/shared/models/financial-asset.model';
import { IndustryFilter } from 'src/app/shared/models/industry-filter.model';
import { PrimeNgModule } from 'src/app/shared/prime-ng.module';
import { AssetService } from 'src/app/shared/services/asset.service';

@Component({
  selector: 'app-asset-filters',
  standalone: true,
  imports: [PrimeNgModule, FormsModule, CommonModule],
  templateUrl: './asset-filters.component.html',
  styleUrl: './asset-filters.component.scss',
})
export class AssetFiltersComponent implements OnInit {
  @Input() assets: FinancialAsset[] = [];
  @Input() industries: IndustryFilter[] = [];
  @Input() rangeValues: number[] = [];
  showFilters = false;
  selectedIndustries: string[] = [];
  filteredAssets: FinancialAsset[] = [];

  constructor(
    private filterService: FilterService,
    private assetService: AssetService
  ) {}

  ngOnInit(): void {
    this.getFilteredAssetsFromSubject();
  }

  getFilteredAssetsFromSubject(): void {
    this.assetService.getFilteredAssets().subscribe((data) => {
      this.filteredAssets = [...data];
    });
  }

  onToggleFilter(): void {
    this.showFilters = !this.showFilters;
  }

  onIndustrySelectChange(value: IndustryFilter[]): void {
    const filteredValues = value.map((item: IndustryFilter) => item.name);
    this.filteredAssets = this.filterService.filter(
      this.assets,
      ['industry'],
      filteredValues,
      'in'
    );
    this.assetService.setFilteredAssets(this.filteredAssets);
  }

  onRangeValuesChange(values: number[] | undefined): void {
    const min = values ? values[0] : 0;
    const max = values ? values[1] : 0;
    this.filteredAssets = this.assets.filter(
      (item) => item.profitMargin >= min && item.profitMargin <= max
    );
    this.assetService.setFilteredAssets(this.filteredAssets);
  }

  clear(): void {
    this.selectedIndustries = [];
    this.filteredAssets = [...this.assets];
    this.assetService.setFilteredAssets(this.filteredAssets);
  }
}
