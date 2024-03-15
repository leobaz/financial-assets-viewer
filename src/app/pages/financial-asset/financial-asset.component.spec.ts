import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FinancialAssetComponent } from './financial-asset.component';

describe('FinancialAssetComponent', () => {
  let component: FinancialAssetComponent;
  let fixture: ComponentFixture<FinancialAssetComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [FinancialAssetComponent, HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpyObj }],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialAssetComponent);
    component = fixture.componentInstance;
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
