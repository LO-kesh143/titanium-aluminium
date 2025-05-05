import { AfterViewInit, Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

declare var bootstrap : any;

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent  {
  
}

// export class HomeComponent implements AfterViewInit {
//   private platformId = inject(PLATFORM_ID);
  
//   ngAfterViewInit(): void {
//     const myCarouselElement = document.querySelector('#heroCarousel');
//     if (myCarouselElement) {
//       new bootstrap.Carousel(myCarouselElement);
//     }

//     if(isPlatformBrowser(this.platformId))
//     {
//       const el = document.querySelector('.heroCarousel');
//     }
    
//   }
// }
