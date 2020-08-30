import { NotFoundComponent } from './components/not-found/not-found.component';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes=[
    {
        path: '', component: HomeComponent
    },
    {
        path: 'home', component:HomeComponent
    },
    {
        path: 'login', component:LoginComponent
    },
    {
        path: 'user', component:NewUserComponent
    },
    {
        path: 'products', component: NewProductComponent
    },
    { 
        path: '**', component: NotFoundComponent 
    }
];

//exportar módulo
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);