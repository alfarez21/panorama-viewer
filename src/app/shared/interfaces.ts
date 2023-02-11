// ==================================== //
// HOTSPOT INFO
// ==================================== //
interface HotspotInfo {
  id: number,
  title: string,
  content: string,
  yaw: number,
  pitch: number
}

// ==================================== //
// HOTSPOT LINK
// ==================================== //
interface HotspotLink {
  id: number,
  title: string,
  related_pano_id: number,
}

// ==================================== //
// RELATED PANO
// ==================================== //
interface RelatedPano {
  id: number,
  pano_id: number ,
  position: {
    yaw: number,
    pitch: number
  }
}

// ==================================== //
// PANORAMA
// ==================================== //
interface Panorama {
  id: number,
  name: string,
  source: string,
  scene?: any, 
  hotspotInfo: HotspotInfo[],
  hotspotLink: HotspotLink[],
  relatedPano: RelatedPano[]
}

export { 
  Panorama, 
  RelatedPano, 
  HotspotInfo, 
  HotspotLink 
}