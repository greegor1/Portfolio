import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup

    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            login: this.fb.control('', [Validators.required]),
            password: this.fb.control({value: '', disabled: true}, [Validators.required])
        })

        this.loginControl.valueChanges.subscribe(() => {
            this.loginControl.valid ? this.passwordControl.enable() : this.passwordControl.disable()
        })
    }

    get loginControl() {
        return this.loginForm.get('login')
    }

    get passwordControl() {
        return this.loginForm.get('password')
    }


    onLogin() {
        console.log('logged in !');
        this.router.navigate(['/about'])
    }

    onSignup() {
        this.router.navigate(['/signup'])
    }

}
