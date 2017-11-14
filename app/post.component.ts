import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'post',
    template: `
    <mat-card>
        <mat-card-header>
            <mat-card-title>
                New Post
            </mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form>
                <mat-form-field style="width: 100%">
                    <textarea [(ngModel)]="postMsg.msg" name="msg" matInput placeholder="Post Message" ></textarea>
                </mat-form-field> 
                <br>
                <button (click)="postMessage()" mat-raised-button color="primary">Register</button>

            </form>
        </mat-card-content>
    </mat-card>
    `
})

export class PostComponent {

    postMsg = {};

    constructor(private apiService:ApiService) {

    }

    postMessage() {
        this.apiService.postNewMessage(this.postMsg).subscribe(res => {
            console.log(res);
        });
    }


}