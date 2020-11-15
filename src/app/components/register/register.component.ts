import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
