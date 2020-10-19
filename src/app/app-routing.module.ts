import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { MemberComponent } from './member/member.component';
import { MembershipsComponent } from './memberships/memberships/memberships.component';


const routes: Routes = [
  {
    path: 'member',
    component: MemberComponent,
    data: {
      title: 'Members',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
