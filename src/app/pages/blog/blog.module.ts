import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { pBlogComponent } from "./blog.component";

@NgModule({
    declarations: [
      pBlogComponent
    ],
    imports: [
      CommonModule
    ],
    providers :[
    ],
    exports: [
      pBlogComponent
    ],
})
export class BlogModule {}
