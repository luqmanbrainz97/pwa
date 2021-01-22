import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tab-bar/tab-bar.module').then(m => m.TabBarPageModule)
  },
  {
    path: 'select-campus',
    loadChildren: () => import('./select-campus/select-campus.module').then( m => m.SelectCampusPageModule)
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
  // {
  //   path: 'tab-bar',
  //   loadChildren: () => import('./tab-bar/tab-bar.module').then( m => m.TabBarPageModule)
  // },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
