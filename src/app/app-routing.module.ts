import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pHomeComponent } from './pages/home/home.component';
import { pPrivacyPolicyComponent } from './pages/misc/privacy-policy/privacy-policy.component';
import { pTermsOfUseComponent } from './pages/misc/terms-of-use/terms-of-use.component';
import { pBlogComponent } from './pages/blog/blog.component';
import { pCopyrightForResources } from './pages/misc/copyright-for-resources/copyright-for-resources.componen';

const routes: Routes = [
  {
    path:'', 
    component: pHomeComponent,
    data: { title: '' }
  },
  // {
  //   path:'about',
  //   component: PageAboutComponent
  // },
  {
    path:'privacy-policy',
    component: pPrivacyPolicyComponent,
    data: { title: 'Privacy Policy' }
  },
  {
    path:'terms-of-use',
    component: pTermsOfUseComponent,
    data: { title: 'Terms of Use' }
  },
  {
    path:'copyright',
    component: pCopyrightForResources,
    data: { title: 'Copyright for the Resources' }  
  },
  {
    path:'blog',
    component: pBlogComponent,
    data: { title: 'Blog Posts' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }