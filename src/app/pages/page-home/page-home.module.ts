import { NgModule } from "@angular/core";
import { PageHomeComponent } from "./page-home.component";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "src/app/widgets/widgets.module";
import { PHPExpertiseIntroComponent } from "./partials/expertise-intro/expertise-intro.component";
import { PHPAboutCraftingComponent } from "./partials/about-crafting/about-crafting.component";

@NgModule({
    declarations: [
      PHPExpertiseIntroComponent,
      PageHomeComponent,
      PHPAboutCraftingComponent
    ],
    imports: [
      CommonModule,
      WidgetsModule
    ],
    exports: [
      PHPExpertiseIntroComponent,
      PHPAboutCraftingComponent,
      PageHomeComponent
    ],
})
export class PageHomeModule {}
