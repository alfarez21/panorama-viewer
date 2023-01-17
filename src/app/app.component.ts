import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	public thumbsSwiper: any;
	public galleryImages: any;

	constructor() {
	}

    ngOnInit(): void {
    }

	onSwiper(swiper: any) {
		console.log(swiper);
	}
	onSlideChange() {
		console.log('slide change');
	}
}
