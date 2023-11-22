# CLI
ng g m admin/components/auth --routing

# CSS
import { Component, ViewEncapsulation } from '@angular/core';
encapsulation: ViewEncapsulation.None,

# Share public forlder
angular.json: "assets": ["src/favicon.ico", "src/assets","src/app/admin/assets"],

# Routing
routerLink="/home"
[routerLink]="['/product', productId]"

const routes: Routes = [
  {
    path: '',
    component: LearningPathListComponent,
  },
  {
    path: ':slug',
    component: LearningPathDetailComponent,
  },
];
