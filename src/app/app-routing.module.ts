import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { bpPrivacyPolicyComponent } from './pages/basic-pages/privacy-policy/privacy-policy.component';
import { bpTermsOfUseComponent } from './pages/basic-pages/terms-of-use/terms-of-use.component';
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
    component: bpPrivacyPolicyComponent,
    data: { title: 'Privacy Policy' }
  },
  {
    path:'terms-of-use',
    component: bpTermsOfUseComponent,
    data: { title: 'Terms of Use' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }