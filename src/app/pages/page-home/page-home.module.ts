import { NgModule } from "@angular/core";
import { PageHomeComponent } from "./page-home.component";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "src/app/widgets/widgets.module";
import { PageHomeComponentShareImagesService } from "./services/page-home-share-images.service";
import { phpAboutCraftingComponent } from "./partials/about-crafting/about-crafting.component";
import { phpExpertiseIntroComponent } from "./partials/expertise-intro/expertise-intro.component";

@NgModule({
    declarations: [
      PageHomeComponent,
      phpExpertiseIntroComponent,
      phpAboutCraftingComponent
    ],
    imports: [
      CommonModule,
      WidgetsModule
    ],
    providers :[
      PageHomeComponentShareImagesService
    ],
    exports: [
      phpAboutCraftingComponent,
      phpExpertiseIntroComponent,      
      PageHomeComponent
    ],
})
export class PageHomeModule {}