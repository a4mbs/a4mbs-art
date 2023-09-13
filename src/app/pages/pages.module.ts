import { NgModule } from "@angular/core";
import { bpPrivacyPolicyComponent } from "./basic-pages/privacy-policy/privacy-policy.component";
import { bpTermsOfUseComponent } from "./basic-pages/terms-of-use/terms-of-use.component";
import { PageHomeModule } from "./page-home/page-home.module";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "../widgets/widgets.module";

@NgModule({
  declarations: [
    bpPrivacyPolicyComponent,
    bpTermsOfUseComponent
  ],
  imports: [
    CommonModule,
    PageHomeModule,
    WidgetsModule
  ],
  exports : [
    bpPrivacyPolicyComponent,
    bpTermsOfUseComponent,
    PageHomeModule
  ]
})
export class PagesModule {}