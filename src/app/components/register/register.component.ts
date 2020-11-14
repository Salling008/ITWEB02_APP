import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service'
import { pipe } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;

  @Input()
  email: String;
  @Input()
  password: String;
  @Input()
  confirmPassword: String;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { 

  }

  ngOnInit(): void {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    this.authenticationService.register(this.email, this.password, this.confirmPassword)
      .pipe(first())
      .subscribe();
  }
}
