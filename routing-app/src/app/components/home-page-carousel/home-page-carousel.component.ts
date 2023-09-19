import { Component, Input, OnInit } from '@angular/core';
interface carouselImage{
  imageSrc: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-home-page-carousel',
  templateUrl: './home-page-carousel.component.html',
  styleUrls: ['./home-page-carousel.component.css']
})
export class HomePageCarouselComponent implements OnInit{
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    dots: true,
    responsive : [{
      settings: {
        arrows: true
      }
    }]
      
    
  }
  @Input() images: carouselImage[] = [];


selectedIndex = 0;

  ngOnInit(): void {
    
  }
}
