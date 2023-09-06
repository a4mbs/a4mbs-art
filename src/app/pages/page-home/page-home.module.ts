import { NgModule } from "@angular/core";
import { PageHomeComponent } from "./page-home.component";
import { CommonModule } from "@angular/common";
import { WidgetsModule } from "src/app/widgets/widgets.module";

@NgModule({
    declarations: [
      PageHomeComponent
    ],
    imports: [
      CommonModule,
      WidgetsModule
    ],
    exports: [
      PageHomeComponent
    ],
})
export class PageHomeModule {}
