import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { PromotionComponent } from './components/promotion/promotion.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'masters', component: PresentationsComponent},
  {path: 'promotion', component: PromotionComponent},
  {path: 'actualite', component: NewsComponent},
  {path: 'contact', component: ContactComponent},

  
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
