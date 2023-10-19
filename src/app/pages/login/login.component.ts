import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./login-component.scss']
})

export class Logincomponent{
loginForm: FormGroup | any;
  isSave: boolean = false;
  IsLoading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router,
  ) {
  }
  get username() {
    return this.loginForm.get('username')!;
  }
  get password() {
    return this.loginForm.get('password');
  }
  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    this.IsLoading = true;
    this.isSave = true;
    if (!this.loginForm.valid) {
      const formControls = this.loginForm.controls;
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAllAsTouched();
      }
      for (const controlName in formControls) {
        if (formControls.hasOwnProperty(controlName) && formControls[controlName].invalid) {
          formControls[controlName];
          controlName.charAt(0).toUpperCase() + controlName.slice(1);
        }
      }
    } else {
      this.AuthService.login({
        email: this.loginForm.value?.username,
        password: this.loginForm.value?.password
      }).subscribe((data: any) => {
        let logindata = JSON.parse(data);
        console.log('logindata', logindata)
        console.log('logindata', logindata.data.user.createdAt)
        let storeData:any = {
          createdAt: logindata.data?.user.createdAt,
          email:logindata.data?.user.email,
          username:logindata.data?.user.username
        }
        localStorage.setItem('storeData',storeData)
        console.log("storeData",storeData)
        this.IsLoading = false;
        if(logindata){
          this.router.navigateByUrl('/customer');
        }else{
          console.log("somthing is wrong")
        }
      })
    }
  }
}
