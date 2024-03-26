import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './src/Components/about/about.component';
import { HomeComponent } from './src/Components/home/home.component';

export const routes: Routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/about',
        component: AboutComponent
    }
];
