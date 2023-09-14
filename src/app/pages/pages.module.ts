import { NgModule } from "@angular/core";
import { pPrivacyPolicyComponent } from "./misc/privacy-policy/privacy-policy.component";
import { pTermsOfUseComponent } from "./misc/terms-of-use/terms-of-use.component";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "../widgets/widgets.module";
import { HomepageModule } from "./home/home.module";

@NgModule({
  declarations: [
    pPrivacyPolicyComponent,
    pTermsOfUseComponent,
  ],
  imports: [
    CommonModule,
    HomepageModule,
    WidgetsModule
  ],
  exports : [
    pPrivacyPolicyComponent,
    pTermsOfUseComponent,
    HomepageModule,
  ]
})
export class PagesModule {}