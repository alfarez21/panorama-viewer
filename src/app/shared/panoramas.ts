import { Panorama } from "./interfaces";

export const panoData: Panorama[] = [
  {
    id: 987234892373,
    name: "Room 2",
    source: 'assets/images/panoramas/sample2.jpg',
    hotspotInfo:[
      {	
        id:234270702347,
        title: "lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor mi nunc, non ultrices mi fermentum in. Phasellus gravida nibh quis neque ullamcorper, at mollis nulla placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mi nunc, congue ac lorem id,",
        yaw: -0.4399136771198812,
        pitch: 0.2959655836873857,
      }
    ],
    hotspotLink:[
      {	
        id:13452798708245,
        title: "Panorama 1",
        related_pano_id: 98793459798789,
      },
      {	
        id:13452792308245,
        title: "Panorama 3",
        related_pano_id: 98793459794949,
      }
    ],
    relatedPano:[
      {
        id: 98793459798789,
        pano_id: 234686852345 ,
        position: {
          yaw: 3.7599136771198812,
          pitch: 0.6159655836873857
        }
      },
      {
        id: 98793459794949,
        pano_id: 243528979056 ,
        position: {
          yaw: -0.7799136771198812,
          pitch: 0.2959655836873857,
        }
      }
    ]
  },
  {
    id: 243528979056,
    name: "Room 3",
    source: 'assets/images/panoramas/sample3.jpg',
    hotspotInfo:[
      {	
        id:234270702348,
        title: "lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor mi nunc, non ultrices mi fermentum in. Phasellus gravida nibh quis neque ullamcorper, at mollis nulla placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mi nunc, congue ac lorem id,",
        yaw: -0.4899136771198812,
        pitch: 0.0009655836873857,
      }
    ],
    hotspotLink:[
      {	
        id:1343792308245,
        title: "Panorama 3",
        related_pano_id: 98793459234794949,
      }
    ],
    relatedPano:[
      {
        id: 98793459234794949,
        pano_id: 987234892373,
        position: {
          yaw: 2.4136771198812,
          pitch: 0.3959655836873857,
        }
      }
    ]
  },
  {
    id: 234686852345,
    name: "Room 1",
    source: 'assets/images/panoramas/sample1.jpg',
    hotspotInfo:[
      {	
        id:234270702345,
        title: "lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor mi nunc, non ultrices mi fermentum in. Phasellus gravida nibh quis neque ullamcorper, at mollis nulla placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce mi nunc, congue ac lorem id,",
        yaw: 0.6499136771198812,
        pitch: -0.3459655836873857,
      }
    ],
    hotspotLink:[
      {
        id:13452798708245,
        title: "Panorama 2",
        related_pano_id: 9879789798789,
      },
    ],
    relatedPano:[
      {
        id: 9879789798789,
        pano_id: 987234892373 ,
        position: {
          yaw: 0.5999136771198812,
          pitch: -0.2159655836873857
        }
      }
    ]
  },
]