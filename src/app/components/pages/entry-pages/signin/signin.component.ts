import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SigninService } from 'src/app/services/signin/signin.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public password?: string;
  public hide: boolean = true;
  public passwordVisible = false;
  public signInFormGroup!: FormGroup;

  constructor(
    private router: Router,
    private signinService: SigninService,
    public nzNotificationService: NzNotificationService
  ) { }

  ngOnInit() {
    this.initializeFormGroup();
  }

  public initializeFormGroup(): void {
    this.signInFormGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  public signIn() {
    if (this.signInFormGroup?.valid) {
      this.signinService.processSignin(this.signInFormGroup?.value)
        .subscribe({
          next: this.handleSigninResponse.bind(this),
          error: this.handleSignInError.bind(this)
        });
    } else {
      this.signInFormGroup.markAllAsTouched();
    }
  }

  handleSigninResponse(response: any) {
    const token = response?.token;
    const userRoles = response?.userRoles;
    const expiration = response?.expiration;
    localStorage.setItem('access-token', token);
    localStorage.setItem('user', JSON.stringify(response));
    localStorage.setItem('user-roles', JSON.stringify(userRoles));
    if (response?.token !== null) this.router.navigateByUrl('/board')
  }

  handleSignInError(error: any) {
    console.log(error)
    if (error?.error?.status === 401) {
      this.nzNotificationService.create(
        'error',
        '',
        `Username or Password is incorrect. Please try again`,
        {
          nzPlacement: 'bottomRight'
        }
      )
    } else {
      this.nzNotificationService.create(
        'error',
        '',
        `Something went wrong. Please try again.`,
        {
          nzPlacement: 'bottomRight'
        }
      )
    }
  }
}
