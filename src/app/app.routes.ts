import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: NxWelcomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'products',
        loadComponent: () => 
            import('modules/products').then((m) => m.ProductsComponent),
    },
    {
        path: 'orders',
        loadComponent: () => 
            import('modules/orders').then((m) => m.OrdersComponent),
    },
    // {
    //     path: 'ui',
    //     loadComponent: () =>
    //         import('modules/ui').then((m) => m.UiComponent),
    // },
];
