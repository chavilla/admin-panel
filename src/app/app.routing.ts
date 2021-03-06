import { SalesComponent } from './components/sales/sales.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';


const appRoutes: Routes=[
    {
        path: '', redirectTo:'/home', pathMatch: 'full'
    },
    {
        path: 'home',component:HomeComponent, canActivate:[AuthGuard]
    },
    {
        path: 'login', component:LoginComponent
    },
    {
        path: 'user', component:NewUserComponent,  canActivate:[AuthGuard]
    },
    {
        path: 'new_product', component: NewProductComponent,  canActivate:[AuthGuard]
    },
    {
        path: 'products', component: ProductComponent,  canActivate:[AuthGuard]
    },
    {
        path: 'sales', component: SalesComponent,  canActivate:[AuthGuard]
    },
    { 
        path: '**', component: NotFoundComponent 
    }
];

//exportar módulo
export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);