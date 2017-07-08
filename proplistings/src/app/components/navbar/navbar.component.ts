import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  displayName: string;
  constructor(
      public afAuth: AngularFireAuth,
      private router: Router,
      private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    this.user = this.afAuth.authState;
    this.user.subscribe(dados => { 
      console.log(dados);
      this.displayName = dados.displayName;
    } );
    this.router.navigate(['/home']);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/home']);
    this.flashMessage.show( 'You are log out!!', { cssClass: 'alert-success', timeout: 3000 } );
  }
}
