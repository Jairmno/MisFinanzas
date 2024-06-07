import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ahorros',
    loadChildren: () => import('./ahorros/ahorros.module').then( m => m.AhorrosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'salir',
    loadChildren: () => import('./salir/salir.module').then( m => m.SalirPageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
