import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  title = 'carousel';
  images = [
    {
      imageSrc: '../../assets/images/logo.png',
      imageAlt: 'First Image'
    },
    {
      imageSrc: '../../assets/images/secondImageCarousel.jpg',
      ImageAlt: 'Second Image'
    }
];
}
