import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UppCasserComponent } from './upp-casser/upp-casser.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {  path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {  path: 'contact', component: ContactComponent},
  { path: 'UppCaser', component: UppCasserComponent},
  { path: 'weather', component: WeatherComponent },
  { path: 'Login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
