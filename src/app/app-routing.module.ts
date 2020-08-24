import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
