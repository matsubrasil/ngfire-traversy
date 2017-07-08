import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit, OnDestroy {
  listings: any;
  inscricao: Subscription;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.inscricao = this.firebaseService.getListings().subscribe( (data) => {
      // console.log( data );
      this.listings = data;
    } );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
