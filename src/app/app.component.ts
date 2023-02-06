import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Panorama } from './shared/interfaces';
declare const Marzipano: any;

SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
	public panoramas: Panorama[] = [];

	constructor() {
		this.createDummyData();
	}

	ngOnInit(): void {
		this.initMarzipano();
	}

	onSwiper(swiper: any) {
		console.log(swiper);
	}

	/**
	 * * ON SLIDE CHANGE HANDLER *
	 * Todo: to handle when slide changed
	 */
	onSlideChange() {
		console.log('slide change');
	}

	/**
	 * * INIT MARZIPANO *
	 * Todo: to initilaze marzipano
	 */
	initMarzipano() {
		// Create viewer.
		const viewer = new Marzipano.Viewer(document.getElementById('pano'));

		// Create source.
		const source = Marzipano.ImageUrlSource.fromString(
			"//www.marzipano.net/media/equirect/angra.jpg"
		);

		// Create source.
		const source2 = Marzipano.ImageUrlSource.fromString(
			"https://dl.dropboxusercontent.com/s/eflud4o09uxxnhi/pano3.jpg"
		);

		// Create geometry.
		const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

		// Create view.
		const limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
		const view = new Marzipano.RectilinearView({ yaw: Math.PI/2 }, limiter);

		// Create scene.
		const scene = viewer.createScene({
			source: source,
			geometry: geometry,
			view: view,
			pinFirstLevel: true
		});

		const scene2 = viewer.createScene({
			source: source2,
			geometry: geometry,
			view: view,
			pinFirstLevel: true
		});

		scene.switchTo();

		setTimeout(() => {
			// Display scene.
			scene2.switchTo({
				transitionDuration: 5000,
				transitionUpdate: function(val: any, newScene: any) {
					newScene.layer().setEffects({ opacity: val });
					scene.layer().setEffects({ opacity: 1-val, textureCrop: { width: 1-val/15, height: 1-val/15}});
				}
			});
		}, 5000)
	}

	/**
	 * * CREATE DUMMY DATA *
	 * Todo: to create dummy data panoramas
	 */
	createDummyData() {
		this.panoramas = [
			{
				id: 1,
				name: 'Panorama 1',
				image: 'assets/images/panoramas/sample1.jpg'
			},
			{
				id: 2,
				name: 'Panorama 2',
				image: 'assets/images/panoramas/sample2.jpg'
			},
			{
				id: 3,
				name: 'Panorama 3',
				image: 'assets/images/panoramas/sample3.jpg'
			},
			{
				id: 4,
				name: 'Panorama 4',
				image: 'assets/images/panoramas/sample4.jpg'
			}
		]
	}
}
