import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SPPrivacyPolicyComponent } from './pages/basic-pages/privacy-policy/privacy-policy.component';
import { SPTermsOfUseComponent } from './pages/basic-pages/terms-of-use/terms-of-use.component';

const routes: Routes = [
  // {
  //   path:'', 
  //   component: PageHomeComponent
  // },
  // {
  //   path:'about',
  //   component: PageAboutComponent
  // },
  {
    path:'privacy-policy',
    component: SPPrivacyPolicyComponent
  },
  {
    path:'terms-of-use',
    component: SPTermsOfUseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
