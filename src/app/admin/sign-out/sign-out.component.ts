import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent implements OnInit {
  constructor(private auth: AngularFireAuth) {
    this.auth.signOut();
  }

  ngOnInit(): void {
    this.auth.signOut();
    window.location.href = '/';
  }
}
