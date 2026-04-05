import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Card } from './card/card';

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
    }
];
