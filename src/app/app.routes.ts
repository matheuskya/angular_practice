import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Card } from './card/card';
import { Details } from './details/details';
import { UserForms } from './user-forms/user-forms';

export const routes: Routes = [
    {
        path: "",
        component: Home,
        title: "Home",
    },
    {
        path: "cards",
        component: Card,
        title: "Cards",
    },
    {
        path: "cards/:id",
        component: Details,
        title: "User details",
    },
    {
        path: "users/create",
        component: UserForms,
        title: "Create new user",
    },
];
