import { Injectable } from "@angular/core";
import { WebsiteConfigService } from "../../../services/website-config.service";
import { tWidgetsInterfaces, iHomepageContent, tWidgets, iDisplayImage, iText } from "src/project.interfaces";

// interface iComponentMapping {
//   [key: string]: Array<number>;
// }

@Injectable()
export class HomepageContentService {
  private pageContent: iHomepageContent;
  pageSections: Array<tWidgets> ;

  constructor(private websiteConfigService: WebsiteConfigService) {
    
    this.pageContent = {
      //section 1
      hero: {
        image: {
          path: this.websiteConfigService.getBranding().heroImageResource,
          alt: "homepage hero image",
        },
        text: {
          title: this.websiteConfigService.getBranding().title,
          content: this.websiteConfigService.getBranding().motto,
        },
        button: {
          title: "icon: fi fi-rs-arrow-down",
          method: "scrollingDown",
        },
      },
      //section 2
      iconAndContentWithTwoButtons: {
        image: {
          path: this.websiteConfigService.getBranding().logoResources.color,
          alt: "colorful logo",
        },
        text: {
          title: "What are my areas of expertise?",
          content:
            "I've been passionate about graphics for over 10 years, but what initially started as a hobby I decided to turn into a professional activity to which I dedicate full time. When your job is your passion, you can't say that you're working but rather living your dream and fulfilling your purpose, and work is a joy. I love graphics, I love to work, and I never get bored.",
        },
        buttons: [
          {
            title: "Take a look at my Adobe portfolio",
            link: this.websiteConfigService
              .getSocialMedia()
              .find((item) => item.title === "Behance")?.link,
          },
          {
            title: "Read my blog",
            link: "/blog",
          },
        ],
      },
      //section 3
      featureWithImageOnTheLeftAndBulletPoints: {
        hero: {
          image: {
            path: "home-page/homepage_img01.jpg",
            alt: "Radio Lady artwork",
          },
          text: {
            title: "Radio Lady",
            content: "illustation, generative art",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176659279/Radio-Lady",
          },
        },
        text: {
          title: "Crafting a vision",
          content:
            "With the advent of generative art, the poetry of words came to life and took on color through the magic of some kind of image, which was hard to imagine or conceive before this revolutionary technology. Although I initially strongly rejected this new tool, I ended up loving it and using it almost nonstop. Creating a unique image using AI technology involves:",
        },
        listItems: [
          {
            icon: "fi fi-rs-check-circle",
            content:
              "finding a theme, a subject, or simply falling into daydreaming",
          },
          {
            icon: "fi fi-rs-check-circle",
            content:
              "developing the ability to express that vision in a prompt",
          },
          {
            icon: "fi fi-rs-check-circle",
            content:
              "studying artistic movements and artworks, or even other generative artworks",
          },
          {
            icon: "fi fi-rs-check-circle",
            content:
              "and last but not least, processing and finishing the generated image, giving it a personal touch and enriching what the machine has created",
          },
        ],
      },
      //section 4
      alternatedTimeline: [
        {
          subtitle: "Step 1",
          title: "Crafting the prompt",
          content:
            'The concept of crafting the prompt is the reverse of the saying <strong>"A picture is worth a thousand words"</strong>. Essentially, with a few carefully chosen words, you can generate over a thousand images.',
        },
        {
          subtitle: "Step 2",
          title: "Upscaling the image",
          content:
            "The generated images, at least at this moment, all have a major issue: resolution. The largest natively generated images are around <strong>2048x2048</strong>, but at these dimensions, numerous artifacts can appear. Otherwise, the native resolution revolves around <strong>1024x1024</strong>. It's true that most Stable Diffusion-based algorithms, except for <strong>Midjourney's</strong> last versions, have included an upscaling algorithm. However, I use the best existing commercial applications, <strong>Topaz Photo AI</strong>, <strong>Luminar NEO</strong>, and <strong>AI Photo Art & Enhancer</strong>, to achieve the best possible results at this moment.",
        },
        {
          subtitle: "Step 3",
          title: "Retouching the image",
          content:
            " I could say that this is my field. I've been using <strong>Adobe Photoshop</strong> and a series of plugins like <strong>Luminar Neo</strong> (and its previous versions) for over 12 years, both professionally and as a hobby. Often, retouching an image is not just about correcting brightness, saturation, or changing the color theme. Many times, it requires detailed image repair and correction, painting details, for which I use <strong>Rebelle Pro 6</strong> software, or in some cases, manual vectorization using <strong>Adobe Illustrator</strong>.",
        },
        {
          subtitle: "Step 4",
          title: "Exporting a masterpiece",
          content:
            "Exporting the work is very similar to exporting any other digital artwork, whether we're talking about a high-quality photograph, a vector illustration, or a <strong>CGI</strong> product. The image must be carefully checked at 100% size to find any errors, correct clarity issues, eliminate noise, or add grain if necessary. Finally, if you want to use the work for large format printing, I will somehow have to revisit step 2 for a second upscaling, then steps 3 and 4.",
        },
      ],
      //section 5
      alternatedFeatureWithImagesAndText: [
        //element 1
        {
          hero: {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "",
              content: "",
            },
            button: {
              title: "View on Behance",
              link: "",
            },
          },
          text: {
            title: "Vector Illustration",
            content:
              "Another field in which I have specialized is vector illustration. I'm talking about vector illustration, where generative art does not have its place. That is, vector images created from scratch by me. It's true that occasionally I can combine the two, turning a generative algorithm-generated concept into a vector illustration while keeping the machine's creations and making my own adjustments.",
          },
        },
        //element 2
        {
          hero: {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "",
              content: "",
            },
            button: {
              title: "View on Behance",
              link: "",
            },
          },
          text: {
            title: "CGI Illustration",
            content:
              "When I say CGI, I'm not referring to images generated with AI-based software, but to images generated either with 3D graphics programs such as Cinema4D, Blender, Eon Vue or Daz Studio, or in some cases texture generation programs such as Filter Forge or the Adobe Substance suite. In this process, sometimes it is necessary to model totally or partially elements of the final concept, or to use pre-made models, such as those from Daz3d. Then, the elements need to be carefully placed in the scene, properly lit and rendered. Rendering itself requires skill and expertise, I have specialized more on the Octane engine, but I have also used NVidia's Iray render as well as Corona Render.",
          },
        },
        //element 3
        {
          hero: {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "",
              content: "",
            },
            button: {
              title: "View on Behance",
              link: "",
            },
          },
          text: {
            title: "Digital Photography",
            content:
              "I can't say that I'm a master of digital photography, but it was the field I started in, and I know how to hold a camera and choose the shutter speed, aperture, and ISO. I've taken a few thousand photos, but at an amateur level. What made me not dedicate myself especially to this field was, on the one hand, the very high cost of professional equipment and, on the other hand, the lack of sufficient satisfaction. In general, photographers specialize in one of the following fields: event photography, stock photography, portrait photography, landscape photography, or wildlife photography. Surely the latter would have been the photographic field that would have attracted me the most, but as a father with five children, I could not afford to travel whenever I would have wanted. This is why CGI art at first and now generative art have attracted me the most: I basically have the opportunity to create my own stories from my office chair, at home next to my family.",
          },
        },
        //element 4
        {
          hero: {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "",
              content: "",
            },
            button: {
              title: "View on Behance",
              link: "",
            },
          },
          text: {
            title: "Matte Painting",
            content:
              "Matte painting is a field I've only touched on vaguely, but it seems extremely promising to me. However, considering the experience I have with image processing and the recent use of AI-based generators, I believe I will begin to delve deeper into this method that actually combines all the others. It combines the art of photography with the art of digital retouching, with the addition of CGI or AI-generated elements, and in some cases even with vector art. All to create a perfect masterpiece.",
          },
        },
      ],
      //section 6
      featuresList: {
        text: {
          title: "Themes and Styles",
          content:
            "I choose to create what represents me, and I find it very hard not to find myself in my artwork.",
        },
        features: [
          //element 1
          {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "Themes related to childhood",
              content:
                "Despite a tumultuous past, my fondness for childhood's magic, reflected in my choice of having five children, greatly influences and enhances the themes of my artistic work.",
            },
          },
          //element2
          {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "Fantasy and dark themes",
              content:
                "I believe that as artists, we have the unique privilege of looking beyond what is scientifically visible or measurable, allowing us to delve into life's mysteries and potentially uncover its true meaning.",
            },
          },
          //element 3
          {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "Surrealism",
              content:
                "David Lynch and later Salvador Dali represented my first magical encounters with art. I had seen other artists in my childhood, but these two left the most profound imprint on my beginnings.",
            },
          },
          //element 4
          {
            image: {
              path: "",
              alt: "",
            },
            text: {
              title: "Expressionism and the Dada Movement",
              content:
                "Although initially works like Picasso's paintings, cubism, expressionism, dadaism, and even modern abstract art seemed strange, a scribble, in recent years I have become increasingly fascinated by these movements.",
            },
          },
        ],
      },
      //section 7
      galleryOfFour: [
        //image 1
        {
          image: {
            path: "",
            alt: "",
          },
          text: {
            title: "",
            content: "",
          },
          button: {
            title: "View on Behance",
            link: "",
          },
        },
        //image 2
        {
          image: {
            path: "",
            alt: "",
          },
          text: {
            title: "",
            content: "",
          },
          button: {
            title: "View on Behance",
            link: "",
          },
        },
        //image 3
        {
          image: {
            path: "",
            alt: "",
          },
          text: {
            title: "",
            content: "",
          },
          button: {
            title: "View on Behance",
            link: "",
          },
        },
        //image 4
        {
          image: {
            path: "",
            alt: "",
          },
          text: {
            title: "",
            content: "",
          },
          button: {
            title: "View on Behance",
            link: "",
          },
        },
      ],
      //section 8
      galleryOfTThere: [
        //image 1
        {
          image: {
            path: "",
            alt: "",
          },
          text: {
            title: "",
            content: "",
          },
          button: {
            title: "View on Behance",
            link: "",
          },
        },
        //image 2
        {
          image: {
            path: "",
            alt: "",
          },
          text: {
            title: "",
            content: "",
          },
          button: {
            title: "View on Behance",
            link: "",
          },
        },
        //image 3
        {
          image: {
            path: "",
            alt: "",
          },
          text: {
            title: "",
            content: "",
          },
          button: {
            title: "View on Behance",
            link: "",
          },
        },
      ],
      //section 9
      callToAction: {
        text: {
          title: "Hire now a passionate artist",
          content: "Are you ready to enrich your collection?",
        },
        listItems: [
          {
            icon: "fi fi-rs-check-circle",
            content: "30-Day Money-Back Guarantee",
          },
          {
            icon: "fi fi-rs-check-circle",
            content: "No credit card required",
          },
          {
            icon: "fi fi-rs-check-circle",
            content: "100% dedication",
          },
          {
            icon: "fi fi-rs-check-circle",
            content: "First class support",
          },
        ],
        button: {
          title: "Hire me",
          link: this.websiteConfigService
            .getSocialMedia()
            .find((item) => item.title === "Behance")?.link,
        },
      },
    };

    this.pageSections = [
      "hero",
      "iconAndContentWithTwoButtons",
      "featureWithImageOnTheLeftAndBulletPoints",
      "alternatedTimeline",
      "alternatedFeatureWithImagesAndText",
      "featuresList",
      "galleryOfFour",
      "galleryOfThere",
      "callToAction",
    ];

  }

  getSections(): Array<tWidgets> {
    return this.pageSections;
  }

  getHeroSection(): iDisplayImage {
    return this.pageContent.hero;
  }
  getTimelineSection(): Array<iText> {
    return this.pageContent.alternatedTimeline;
  }

  getSectionContent(sectionId: tWidgets): tWidgetsInterfaces {
    switch(sectionId) {
      case "hero":
        return this.pageContent.hero;
      case "iconAndContentWithTwoButtons":  
        return this.pageContent.iconAndContentWithTwoButtons;
      case "featureWithImageOnTheLeftAndBulletPoints":
        return this.pageContent.featureWithImageOnTheLeftAndBulletPoints;
      case "alternatedTimeline":
        return this.pageContent.alternatedTimeline;
      case "alternatedFeatureWithImagesAndText":
        return this.pageContent.alternatedFeatureWithImagesAndText;
      case "featuresList":
        return this.pageContent.featuresList;
      case "galleryOfFour":
        return this.pageContent.galleryOfFour;
      case "galleryOfThere":
        return this.pageContent.galleryOfTThere;
      case "callToAction":
        return this.pageContent.callToAction;
    }
  }

}
