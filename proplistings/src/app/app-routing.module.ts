import { ListingComponent } from './components/listing/listing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';

const routes: Routes = [
  { path: 'listings', component: ListingsComponent },
  { path: 'add-listing', component: AddListingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
