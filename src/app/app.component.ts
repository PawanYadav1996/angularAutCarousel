import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'autoCarousel';
  featuredEvent: any;
  ngOnInit() {
    this.getImages();
  }
  async getImages() {
    this.featuredEvent = [];
    await this.http
      .get('https://dummyjson.com/products/1')
      .subscribe((res: any) => {
        // console.log(res?.images);
        res?.images.forEach((img, index) => {
          this.featuredEvent.push({
            imageSrc: img,
            imageAlt: index + 1,
            imageRedirect: img,
            imageRegRedirect: img,
          });
        });
      });
  }
}
