import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignOutComponent } from './login/signout/signout.component';
import { MembershipsComponent } from './memberships/memberships/memberships.component';
import { AuthGuard } from './shared/services/auth-guard.service';
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
    },
    canActivate:[AuthGuard]
  },
  {
    path: 'memberships',
    component: MembershipsComponent,
    data: {
      title: 'Memberships',
      icon: 'class',
      isStatic: true,
      isLogout: false
    },
    canActivate:[AuthGuard]
  },
  {
    path: 'classes',
    component: ClassesComponent,
    data: {
      title: 'Classes',
      icon: 'class',
      isStatic: true,
      isLogout: false
    } ,
    canActivate:[AuthGuard] 
  },
  {
    path: 'login',
    component: SignInComponent, 
    data: {
      title: 'Login',
      icon: 'login',
      isStatic: false,
      isLogout: false
    }
  },
  {
    path: 'logout', 
    component: SignOutComponent, 
    data: {
      title: 'Logout',
      icon: 'logout',
      isStatic: false,
      isLogout: true
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
