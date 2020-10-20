import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { MembershipsComponent } from './memberships/memberships/memberships.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: {
      title: 'Users',
      icon: 'class',
      isStatic: true,
      isLogout: false
    }
  },
  {
    path: 'memberships',
    component: MembershipsComponent,
    data: {
      title: 'Memberships',
      icon: 'class',
      isStatic: true,
      isLogout: false
    }
  },
  {
    path: 'classes',
    component: ClassesComponent,
    data: {
      title: 'Classes',
      icon: 'class',
      isStatic: true,
      isLogout: false
    }  
  },
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: '**', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
