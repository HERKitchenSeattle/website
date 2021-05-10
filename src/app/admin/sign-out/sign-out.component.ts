import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss'],
})
export class SignOutComponent implements OnInit {
  constructor(private auth: AngularFireAuth, private meta: Meta) {
    this.auth.signOut();
    this.meta.updateTag({ name: 'robots', content: 'noindex' });
  }

  ngOnInit(): void {
    this.auth.signOut();
    window.location.href = '/';
  }
}
