import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "src/app/widgets/widgets.module";
import { phpAboutCraftingComponent } from "./partials/about-crafting/about-crafting.component";
import { phpExpertiseIntroComponent } from "./partials/expertise-intro/expertise-intro.component";
import { pHomeComponent } from "./home.component";
import { HomepageContentService } from "./services/home-content.service";

@NgModule({
    declarations: [
      pHomeComponent,
      phpExpertiseIntroComponent,
      phpAboutCraftingComponent
    ],
    imports: [
      CommonModule,
      WidgetsModule
    ],
    providers :[
      HomepageContentService
    ],
    exports: [
      phpAboutCraftingComponent,
      phpExpertiseIntroComponent,      
      pHomeComponent
    ],
})
export class HomepageModule {}