import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AssetFiltersComponent } from './asset-filters.component';

describe('AssetFiltersComponent', () => {
  let component: AssetFiltersComponent;
  let fixture: ComponentFixture<AssetFiltersComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [AssetFiltersComponent, HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpyObj }],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetFiltersComponent);
    component = fixture.componentInstance;
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
