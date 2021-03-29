import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// component
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SofiComponent } from './sofi/sofi.component';
import { PisiComponent } from './pisi/pisi.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'sofi',
    component: SofiComponent,
  },
  {
    path: 'pisi',
    component: PisiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
