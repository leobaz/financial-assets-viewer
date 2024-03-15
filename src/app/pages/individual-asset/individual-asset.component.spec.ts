import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IndividualAssetComponent } from './individual-asset.component';

describe('IndividualAssetComponent', () => {
  let component: IndividualAssetComponent;
  let fixture: ComponentFixture<IndividualAssetComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [
        IndividualAssetComponent,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [{ provide: HttpClient, useValue: httpClientSpyObj }],
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualAssetComponent);
    component = fixture.componentInstance;
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
