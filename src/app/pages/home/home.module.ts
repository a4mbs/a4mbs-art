import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "src/app/widgets/widgets.module";
import { phpAboutCraftingComponent } from "./partials/about-crafting/about-crafting.component";
import { pHomeComponent } from "./home.component";
import { HomepageContentService } from "./home.content.service";

@NgModule({
    declarations: [
      pHomeComponent,
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
      pHomeComponent
    ],
})
export class HomepageModule {}