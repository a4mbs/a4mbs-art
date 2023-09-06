import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SPPrivacyPolicyComponent } from './pages/basic-pages/privacy-policy/privacy-policy.component';
import { SPTermsOfUseComponent } from './pages/basic-pages/terms-of-use/terms-of-use.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
  {
    path:'', 
    component: PageHomeComponent,
    data: { title: '' }
  },
  // {
  //   path:'about',
  //   component: PageAboutComponent
  // },
  {
    path:'privacy-policy',
    component: SPPrivacyPolicyComponent,
    data: { title: 'Privacy Policy' }
  },
  {
    path:'terms-of-use',
    component: SPTermsOfUseComponent,
    data: { title: 'Terms of Use' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
