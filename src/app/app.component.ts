// Angular modules/components
import { Component, ViewEncapsulation } from '@angular/core';

// Third-party NPM
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// Third-party CDN
declare const Marzipano: any;

// Interfaces
import { HotspotLink, Panorama, RelatedPano } from './shared/interfaces';

// External data
import { panoData } from './shared/panoramas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
	public panoramas: Panorama[] = panoData;
	private currentPano: Panorama| null = null;
	private viewerEl: HTMLElement | null = null;
	private viewer: any; 
	private geometry: any;
	private limiter: any;
	private view: any;

	constructor() {
		SwiperCore.use([FreeMode, Navigation, Thumbs]);
	}

	ngOnInit(): void {
		this.initMarzipano();
		this.createPanoramas();
	}

	/**
	 * * INIT MARZIPANO *
	 * Todo: to initilaze marzipano
	 */
	initMarzipano(): void {
		// Get dom element and instantiate Marzipano Viewer
		this.viewerEl = document.getElementById('pano');
		this.viewer = new Marzipano.Viewer(this.viewerEl);
		
		// Create geometry.
		this.geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);
		
		// Create view.
		this.limiter = Marzipano.RectilinearView.limit.traditional(1024, 100*Math.PI/180);
		this.view = new Marzipano.RectilinearView({ yaw: Math.PI/2 }, this.limiter);
	}

	/**
	 * * CREATE PANORAMAS *
	 * Todo: to create panoramas 
	 */
	createPanoramas(): void {
		this.panoramas.forEach((panorama: Panorama) => {
			// Create source and scene
			const source = Marzipano.ImageUrlSource.fromString(panorama.source);
			const scene = this.viewer.createScene({
				source: source,
				geometry: this.geometry,
				view: this.view,
				pinFirstLevel: true
			});

			// Create hotspot link
			panorama.hotspotLink.forEach((hotspotLink: HotspotLink) => {
				const element = this.createHotspotLinkElement(hotspotLink);
				const relatedPano = panorama.relatedPano.find((relatedPano: RelatedPano) => {
					return relatedPano.id == hotspotLink.related_pano_id;
				});
				scene.hotspotContainer().createHotspot(
					element, 
					{ yaw: relatedPano?.position.yaw, pitch: relatedPano?.position.pitch }
				);
			});

			panorama.scene = scene;
		})

		// Show first panorama
		this.currentPano = this.panoramas[0];
		this.currentPano.scene.switchTo();
	}

	/**
	 * * CREATE HOTSPOT LINK ELEMENT *
	 * Todo: to create hotspot link element
	 * @param HotspotLink : HotspotLink
	 * @return HTMLElement
	 */
	createHotspotLinkElement(hotspotLink: HotspotLink): HTMLElement {
		// Create hotspot element
		const wrapper: HTMLElement = document.createElement('div');
		wrapper.classList.add('hotspot');
		wrapper.innerHTML = `
			<div class="hotspot__icon" data-pano-id="${hotspotLink.related_pano_id}">
				<img src="assets/images/arrow.png" alt="${hotspotLink.title}" />
			</div>
			<div class="hotspot__content link" style="display:none">
				${hotspotLink.title}
			</div>
		`;
	
		// Add event listeners
		const icon = wrapper.getElementsByClassName('hotspot__icon')[0] as HTMLElement;
		const content = wrapper.getElementsByClassName('hotspot__content')[0] as HTMLElement;
		icon.addEventListener('mouseover',() => content.style.display = 'block');
		icon.addEventListener('mouseleave',() => content.style.display = 'none');
		icon.addEventListener('click',() => {
			const nextPanoId = this.currentPano?.relatedPano.find((relatedPano: RelatedPano) => {
				return relatedPano.id === hotspotLink.related_pano_id;
			})?.pano_id;

			if (nextPanoId) this.changePano(nextPanoId);
		});
	
		return wrapper;
	
	}

	/**
	 * * CHANGE PANO *
	 * Todo: to change current panorama to next panorama
	 * @param id : number
	 */
	changePano(id: number) {
		const nextPano: Panorama | undefined  = this.panoramas.find((panorama: Panorama) => { 
			return panorama.id === id
		});

		if (nextPano) {
			nextPano.scene.switchTo({});
			this.currentPano = nextPano;
		}
	}
}
