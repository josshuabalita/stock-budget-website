import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockMarketComponent } from './pages/stock-market/stock-market.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'stock-market', component: StockMarketComponent}, 
];
