import { Component, Input, OnInit } from "@angular/core";
interface carouselImages {
  imageSrc: string;
  imageAlt: string;
  imageRedirection: string;
}
@Component({
  selector: "app-auto-carousel-view",
  templateUrl: "./auto-carousel-view.component.html",
  styleUrls: ["./auto-carousel-view.component.scss"],
})
export class AutoCarouselViewComponent implements OnInit {
  @Input() images: any[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 5000;
  @Input() eventType: string;
  @Input() sliderId: any = 1;
  @Input() countingValue = true;
  @Input() showDots = true;
  constructor() {}
  selectedIndex: any = 0;
  ngOnInit(): void {
    console.log(this.images);
    if (this.autoSlide) {
      if (this.images?.length > 1) {
        console.log("images");

        this.autoSlideImages();
      }
    }
  }
  // Changes slide on every 5 sec
  autoSlideImages() {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  // sets index of images on dot indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick() {
    console.log("working");
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
