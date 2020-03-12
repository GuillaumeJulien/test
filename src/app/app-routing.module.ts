import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from './guards/auth.guard';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {
    path: '',
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
