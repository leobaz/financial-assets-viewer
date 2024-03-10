import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'assets',
    pathMatch: 'full',
  },
  {
    path: 'assets',
    loadComponent: () =>
      import('./pages/financial-asset/financial-asset.component').then(
        (m) => m.FinancialAssetComponent
      ),
  },
  {
    path: 'assets/:id',
    loadComponent: () =>
      import('./pages/individual-asset/individual-asset.component').then(
        (m) => m.IndividualAssetComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
