import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'login',
    template: `
        <mat-card>
            <mat-card-header>
                <mat-card-title>
                    Login
                </mat-card-title>
            </mat-card-header>
            <mat-card-content>
                <form>
                    <mat-form-field>
                        <input [(ngModel)]="loginData.email" name="email" matInput type="text" placeholder="Email" type="email"/>
                    </mat-form-field>
                    <mat-form-field>
                        <input [(ngModel)]="loginData.pwd" name="pwd" matInput type="password" placeholder="Password" type="password" />
                    </mat-form-field>
                    
                    <button (click)="post()" mat-raised-button color="primary">Login</button>
            
               </form>
            </mat-card-content>
        </mat-card>
    `
})

export class LoginComponent {
    loginData = {};

    constructor(private apiService:ApiService) {

    }

    post() {
        this.apiService.loginUser(this.loginData)
    }
}
