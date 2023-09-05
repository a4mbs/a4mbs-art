import { NgModule } from "@angular/core";
import { SPPrivacyPolicyComponent } from "./basic-pages/privacy-policy/privacy-policy.component";
import { SPTermsOfUseComponent } from "./basic-pages/terms-of-use/terms-of-use.component";

@NgModule({
  declarations: [
    SPPrivacyPolicyComponent,
    SPTermsOfUseComponent
  ],
  imports: [],
  exports : [
    SPPrivacyPolicyComponent,
    SPTermsOfUseComponent
  ]
})
export class PagesModule {}
