import { NgModule } from "@angular/core";
import { SPPrivacyPolicyComponent } from "./basic-pages/privacy-policy/privacy-policy.component";
import { SPTermsOfUseComponent } from "./basic-pages/terms-of-use/terms-of-use.component";
import { PageHomeModule } from "./page-home/page-home.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SPPrivacyPolicyComponent,
    SPTermsOfUseComponent
  ],
  imports: [
    CommonModule,
    PageHomeModule
  ],
  exports : [
    SPPrivacyPolicyComponent,
    SPTermsOfUseComponent,
    // PageHomeModule
  ]
})
export class PagesModule {}
