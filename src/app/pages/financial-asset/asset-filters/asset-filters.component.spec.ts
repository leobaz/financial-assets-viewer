import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetFiltersComponent } from './asset-filters.component';

describe('AssetFiltersComponent', () => {
  let component: AssetFiltersComponent;
  let fixture: ComponentFixture<AssetFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetFiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
