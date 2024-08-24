import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [{path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:'',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},{
    path:'**',component:PagenotfoundComponent
  }
];
