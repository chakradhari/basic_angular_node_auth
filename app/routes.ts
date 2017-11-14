import { Route } from '@angular/router';

import { MessagesComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

export const routes: Route[] = [
    { path: 'messages', component: MessagesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/messages', pathMatch: 'full'}
]

export const Components = [
    MessagesComponent, RegisterComponent, LoginComponent
]