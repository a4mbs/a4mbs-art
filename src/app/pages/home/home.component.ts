import { Component, ViewChild } from '@angular/core';
import { WebsiteConfigService } from 'src/app/services/website-config.service';
import { phpAboutCraftingComponent } from './partials/about-crafting/about-crafting.component';

@Component({
  selector: 'pag-home',
  templateUrl: './home.component.html',
  styles: []  
})
export class pHomeComponent {

  timelineContent = [
    {
      step: 'Step 1',
      title: 'Crafting the prompt',
      content: 'The concept of crafting the prompt is the reverse of the saying <strong>"A picture is worth a thousand words"</strong>. Essentially, with a few carefully chosen words, you can generate over a thousand images.'
    },
    {
      step: 'Step 2',
      title: 'Upscaling the image',
      content: "The generated images, at least at this moment, all have a major issue: resolution. The largest natively generated images are around <strong>2048x2048</strong>, but at these dimensions, numerous artifacts can appear. Otherwise, the native resolution revolves around <strong>1024x1024</strong>. It's true that most Stable Diffusion-based algorithms, except for <strong>Midjourney's</strong> last versions, have included an upscaling algorithm. However, I use the best existing commercial applications, <strong>Topaz Photo AI</strong>, <strong>Luminar NEO</strong>, and <strong>AI Photo Art & Enhancer</strong>, to achieve the best possible results at this moment."
    }, 
    {
      step: 'Step 3',
      title: 'Retouching the image',
      content: " I could say that this is my field. I've been using <strong>Adobe Photoshop</strong> and a series of plugins like <strong>Luminar Neo</strong> (and its previous versions) for over 12 years, both professionally and as a hobby. Often, retouching an image is not just about correcting brightness, saturation, or changing the color theme. Many times, it requires detailed image repair and correction, painting details, for which I use <strong>Rebelle Pro 6</strong> software, or in some cases, manual vectorization using <strong>Adobe Illustrator</strong>."
    },
    {
      step: 'Step 4',
      title: 'Exporting a masterpiece',
      content: "Exporting the work is very similar to exporting any other digital artwork, whether we're talking about a high-quality photograph, a vector illustration, or a <strong>CGI</strong> product. The image must be carefully checked at 100% size to find any errors, correct clarity issues, eliminate noise, or add grain if necessary. Finally, if you want to use the work for large format printing, I will somehow have to revisit step 2 for a second upscaling, then steps 3 and 4."
    }
  ];

  title: string;
  subtitle: string;
  homePageHeroImageURL: string;
  @ViewChild(phpAboutCraftingComponent) aboutCraftingComponent!: phpAboutCraftingComponent;


  constructor(private websiteConfigService: WebsiteConfigService) {
    this.title = this.websiteConfigService.getBranding().title;
    this.subtitle = this.websiteConfigService.getBranding().motto;
    this.homePageHeroImageURL = this.websiteConfigService.getBranding().heroImageResource;
  }
 
}