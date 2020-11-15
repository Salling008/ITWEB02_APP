import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, public auth: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
