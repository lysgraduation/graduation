import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { PromotionComponent } from './promotion/promotion.component';

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
