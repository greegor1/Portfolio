import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup
    step2Enable: boolean;
    step3Enable: boolean;
    currentStep: number = 1;
    stepSubj$ = new BehaviorSubject<number>(this.currentStep)

    constructor(private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        console.log(this.stepSubj$.getValue());

        this.signupForm = this.fb.group({
            login: this.fb.control('', [Validators.required]),
            password: this.fb.control('', [Validators.required]),
            confirmPassword: this.fb.control('', [Validators.required]),
            firstName: this.fb.control('', [Validators.required]),
            lastName: this.fb.control('', [Validators.required]),
            age: this.fb.control('', [Validators.required])
        })

        this.signupForm.valueChanges.subscribe(() => {
            this.step2Enable = this.loginControl.valid;
            if(this.passwordControl.valid
                && this.confirmPasswordControl.valid
                && this.passwordControl.value === this.confirmPasswordControl.value) {
                    this.step3Enable = true
                }
            })
    }

    get loginControl() {
        return this.signupForm.get('login')
    }
    get passwordControl() {
        return this.signupForm.get('password')
    }
    get confirmPasswordControl() {
        return this.signupForm.get('confirmPassword')
    }
    get firstNameControl() {
        return this.signupForm.get('firstName')
    }
    get lastNameControl() {
        return this.signupForm.get('lastName')
    }
    get ageControl() {
        return this.signupForm.get('age')
    }

    enableNextStep() {
        this.stepSubj$.next(this.currentStep++)
        console.log(this.stepSubj$.getValue())
    }

    onSignup() {
        console.log('Account created');
        this.router.navigate(['/login'])
    }
}
