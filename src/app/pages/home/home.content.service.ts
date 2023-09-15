import { Injectable } from "@angular/core";
import { WebsiteConfigService } from "../../services/website-config.service";
import { iPageContent, tWidgets, iDisplayImage, iText, iStrctureWithHeroImageAndText, iStructreWtihIconAndText, iFeaturesList, iCallToAction } from "src/project.interfaces";

@Injectable()
export class HomepageContentService {
  private pageContent: iPageContent;
  pageSections: Array<tWidgets> ;

  constructor(private websiteConfigService: WebsiteConfigService) {

  //this vector defines the order of the sections on the page
  this.pageSections = [
      "hero",
      "iconAndContentWithTwoButtons",
      "featureWithImageOnTheLeftAndBulletPoints",
      "alternatedTimeline",
      "alternatedFeatureWithImagesAndText",
      "featuresList",
      "gallery",
      "gallery1",
      "callToAction"
    ];
    
    //the key of this object is the name of the section and must be the same as in this.pageSections
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
          title: '<i class="fi fi-rs-arrow-down"></i>',
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
            "With the advent of <strong>generative art</strong>, the poetry of words came to life and took on color through the magic of some kind of image, which was hard to imagine or conceive before this revolutionary technology. Although I initially strongly rejected this new tool, I ended up loving it and using it almost nonstop. Creating a unique image using <strong>AI technology</strong> involves:",
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
              path: "home-page/homepage_img02.jpg",
              alt: "Autumn Bear artwork",
            },
            text: {
              title: "Autumn Bear",
              content: "illustration, vector art",
            },
            button: {
              title: "View on Behance",
              link: "https://www.behance.net/gallery/176684563/Autumn-Bear",
            },
          },
          text: {
            title: "Vector Illustration",
            content:
              "Another field in which I have specialized is <strong>vector illustration</strong>. I'm talking about vector illustration, where <strong>generative art</strong> does not have its place. That is, vector images created from scratch by me. It's true that occasionally I can combine the two, turning a generative algorithm-generated concept into a <strong>vector illustration</strong> while keeping the machine's creations and making my own adjustments.",
          },
        },
        //element 2
        {
          hero: {
            image: {
              path: "home-page/homepage_img03.jpg",
              alt: "Lowpoly Room artwork",
            },
            text: {
              title: "Lowpoly Room",
              content: "3d modeling, 3d art",
            },
            button: {
              title: "View on Behance",
              link: "https://www.behance.net/gallery/176792281/Lowpoly-Room",
            },
          },
          text: {
            title: "CGI Illustration",
            content:
              "When I say <strong>CGI</strong>, I'm not referring to images generated with AI-based software, but to images generated either with 3D graphics programs such as <strong>Cinema4D</strong>, <strong>Blender</strong>, <strong>Eon Vue</strong> or <strong>Daz Studio</strong>, or in some cases texture generation programs such as <strong>Filter Forge</strong> or the <strong>Adobe Substance</strong> suite. In this process, sometimes it is necessary to model totally or partially elements of the final concept, or to use pre-made models, such as those from <strong>Daz3d</strong>. Then, the elements need to be carefully placed in the scene, properly lit and rendered. Rendering itself requires skill and expertise, I have specialized more on the <strong>Octane engine</strong>, but I have also used <strong>NVidia's Iray render</strong> as well as <strong>Corona Render</strong>.",
          },
        },
        //element 3
        {
          hero: {
            image: {
              path: "home-page/homepage_img04.jpg",
              alt: "Blue Song artwork",
            },
            text: {
              title: "Blue Song",
              content: "image retouch, photography",
            },
            button: {
              title: "View on Behance",
              link: "https://www.behance.net/gallery/176777225/Blue-Song",
            },
          },
          text: {
            title: "Digital Photography",
            content:
              "I can't say that I'm a master of <strong>digital photography</strong>, but it was the field I started in, and I know how to hold a camera and choose the <strong>shutter speed</strong>, <strong>aperture</strong>, and <strong>ISO</strong>. I've taken a few thousand photos, but at an amateur level. What made me not dedicate myself especially to this field was, on the one hand, the very high cost of <strong>professional equipment</strong> and, on the other hand, the lack of sufficient satisfaction. In general, photographers specialize in one of the following fields: <strong>event photography</strong>, <strong>stock photography</strong>, <strong>portrait photography</strong>, <strong>landscape photography</strong>, or <strong>wildlife photography</strong>. Surely the latter would have been the photographic field that would have attracted me the most, but as a father with five children, I could not afford to travel whenever I would have wanted. This is why <strong>CGI art</strong> at first and now <strong>generative art</strong> have attracted me the most: I basically have the opportunity to create my own stories from my office chair, at home next to my family.",
          },
        },
        //element 4
        {
          hero: {
            image: {
              path: "home-page/homepage_img05.jpg",
              alt: "The Portal in the Forest artwork",
            },
            text: {
              title: "The Portal in the Forest",
              content: "generative art, illustration",
            },
            button: {
              title: "View on Behance",
              link: "https://www.behance.net/gallery/176794643/The-Portal-in-the-Forest",
            },
          },
          text: {
            title: "Matte Painting",
            content:
              "<strong>Matte painting</strong> is a field I've only touched on vaguely, but it seems extremely promising to me. However, considering the experience I have with <strong>image processing</strong> and the recent use of <strong>AI-based generators</strong>, I believe I will begin to delve deeper into this method that actually combines all the others. It combines the art of <strong>photography</strong> with the art of <strong>digital retouching</strong>, with the addition of <strong>CGI</strong> or <strong>AI-generated elements</strong>, and in some cases even with <strong>vector art</strong>. All to create a perfect masterpiece.",
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
              path: "home-page/homepage_icon1",
              alt: "childhood icon",
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
              path: "home-page/homepage_icon2",
              alt: "dark themes icon",
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
              path: "home-page/homepage_icon3",
              alt: "surrealism icon",
            },
            text: {
              title: "Surrealism",
              content:
                "<strong>David Lynch</strong> and later <strong>Salvador Dali</strong> represented my first magical encounters with art. I had seen other artists in my childhood, but these two left the most profound imprint on my beginnings.",
            },
          },
          //element 4
          {
            image: {
              path: "home-page/homepage_icon4",
              alt: "expressionism icon",
            },
            text: {
              title: "Expressionism and the Dada Movement",
              content:
                "Although initially works like <strong>Picasso</strong>'s paintings, <strong>cubism</strong>, <strong>expressionism</strong>, <strong>dadaism</strong>, and even <strong>modern abstract art</strong> seemed strange, a scribble, in recent years I have become increasingly fascinated by these movements.",
            },
          },
        ],
      },
      //section 7
      gallery: [
        //image 1
        {
          image: {
            path: "home-page/homepage_img06.jpg",
            alt: "Cozy Setup artwork",
          },
          text: {
            title: "Cozy Setup",
            content: "3d art, illustration",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176748139/Cozy-Setup",
          },
        },
        //image 2
        {
          image: {
            path: "home-page/homepage_img07.jpg",
            alt: "Green Orang artwork",
          },
          text: {
            title: "Green Orange",
            content: "fractal art, illustration",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176768455/Green-Orange",
          },
        },
        //image 3
        {
          image: {
            path: "home-page/homepage_img08.jpg",
            alt: "Cozy Hall artwork",
          },
          text: {
            title: "Cozy Hall",
            content: "3d art, illustration",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176749987/Cozy-Hall",
          },
        },
        //image 4
        {
          image: {
            path: "home-page/homepage_img09.jpg",
            alt: "Steampunk Robot artwork",
          },
          text: {
            title: "Steampunk Robot",
            content: "3d art, illustration",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176741819/Steampunk-Robot",
          },
        },
      ],
      //section 8
      gallery1: [
        //image 1
        {
          image: {
            path: "home-page/homepage_img10.jpg",
            alt: "Rosenborg Castle artwork",
          },
          text: {
            title: "Rosenborg Castle",
            content: "image retouch, photography",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176790955/Rosenborg-Castle",
          },
        },
        //image 2
        {
          image: {
            path: "home-page/homepage_img11.jpg",
            alt: "Silent Cry artwork",
          },
          text: {
            title: "Silent Cry",
            content: "image retouch, photography",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176480787/Silent-Cry",
          },
        },
        //image 3
        {
          image: {
            path: "home-page/homepage_img12.jpg",
            alt: "Fresh Flowers artwork",
          },
          text: {
            title: "Fresh Flowers",
            content: "image retouch, photography",
          },
          button: {
            title: "View on Behance",
            link: "https://www.behance.net/gallery/176774653/Fresh-Flowers",
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
            content: "Meticulous attention to detail",
          },
          {
            icon: "fi fi-rs-check-circle",
            content: "Fast and timely response",
          },
          {
            icon: "fi fi-rs-check-circle",
            content: "Commitment and dedication",
          },
          {
            icon: "fi fi-rs-check-circle",
            content: "Using cutting-edge technologies",
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

  }

  getSections(): Array<tWidgets> {
    return this.pageSections;
  }
    
  getContent(): iPageContent {
    return this.pageContent;
  }

}
