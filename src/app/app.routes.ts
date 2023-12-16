import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main/home/home.component';
import { PrivacyPolicyComponent } from './pages/legal/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './pages/legal/terms-of-use/terms-of-use.component';
import { CopyrightComponent } from './pages/legal/copyright/copyright.component';

export const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    data: { title: '' }
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { title: 'Privacy Policy' }
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent,
    data: { title: 'Terms of Use' }
  },
  {
    path: 'copyright',
    component: CopyrightComponent,
    data: { title: 'Copyright' }  
  }
];
