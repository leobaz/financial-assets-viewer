import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FinancialAsset } from '../models/financial-asset.model';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  apiUrl =
    'https://gist.githubusercontent.com/jesperborgstrup/a57aff4d66392b6c89473c57ef3eadf4/raw/a95a48ad51d90dbbc88f74155deda9fcda76f992/assets.json';

  private filteredAssetsSubject = new BehaviorSubject<FinancialAsset[]>([]);

  constructor(private http: HttpClient) {}

  getAllAssets(): Observable<FinancialAsset[]> {
    return this.http.get<FinancialAsset[]>(this.apiUrl);
  }

  setFilteredAssets(assets: FinancialAsset[]): void {
    this.filteredAssetsSubject.next(assets);
  }

  getFilteredAssets(): Observable<FinancialAsset[]> {
    return this.filteredAssetsSubject.asObservable();
  }

  getAssetById(id: string): FinancialAsset | undefined {
    let asset: FinancialAsset | undefined;
    this.getFilteredAssets().subscribe((data) => {
      const filteredAsset = data.find((item) => item.id === id);
      asset = filteredAsset;
    });
    return asset;
  }
}
