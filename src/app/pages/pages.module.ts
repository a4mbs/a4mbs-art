import { NgModule } from "@angular/core";
import { pPrivacyPolicyComponent } from "./misc/privacy-policy/privacy-policy.component";
import { pTermsOfUseComponent } from "./misc/terms-of-use/terms-of-use.component";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "../widgets/widgets.module";
import { HomepageModule } from "./home/home.module";
import { BlogModule } from "./blog/blog.module";

@NgModule({
  declarations: [
    pPrivacyPolicyComponent,
    pTermsOfUseComponent,
  ],
  imports: [
    CommonModule,
    HomepageModule,
    BlogModule,
    WidgetsModule
  ],
  exports : [
    pPrivacyPolicyComponent,
    pTermsOfUseComponent,
    HomepageModule,
    BlogModule
  ]
})
export class PagesModule {}