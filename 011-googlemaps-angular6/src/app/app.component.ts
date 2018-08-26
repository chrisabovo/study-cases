import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('gmap')
  gmapElement: any;
  map: google.maps.Map;
  heatmap: google.maps.visualization.HeatmapLayer;

  latitude: any = -30.023244975149048;
  longitude: any = -51.20121997056958;

  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  markerTypes = [
    {
      text: 'Parking',
      value: 'parking_lot_maps.png'
    }
    // ,
    // {
    //   text: "Library", value: "library_maps.png"
    // },
    // {
    //   text: "Information", value: "info-i_maps.png"
    // }
  ];

  selectedMarkerType: string = 'parking_lot_maps.png';

  isHidden = false;

  ngOnInit() {}

  ngAfterContentInit() {
    let mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  setCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    let location = new google.maps.LatLng(this.latitude, this.longitude);

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  simpleMarkerHandler() {
    alert("Simple Component's function...");
  }

  markerHandler(marker: google.maps.Marker) {
    alert("Marker's Title: " + marker.getTitle());
  }

  showCustomMarker() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    let location = new google.maps.LatLng(this.latitude, this.longitude);

    console.log(`selected marker: ${this.selectedMarkerType}`);

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: this.iconBase + this.selectedMarkerType,
      title: 'Got you!'
    });
  }

  toggleMap() {
    this.isHidden = !this.isHidden;

    this.gmapElement.nativeElement.hidden = this.isHidden;
  }

  doExample() {
    // ir para a coordenada de exemplo.
    let latLng: google.maps.LatLngLiteral = { lat: -30.023244975149048, lng: -51.20121997056958 };
    this.map.panTo(latLng);

    // adicionar mapa de calor
    console.log('this.heatmap#1.1 -> ', this.heatmap);
    console.log('this.heatmap#1.2 -> ', google.maps, google.maps.visualization);
    console.log('this.heatmap#1.3 -> ', new google.maps.visualization.HeatmapLayer());
    this.heatmap = new google.maps.visualization.HeatmapLayer();
    console.log('this.heatmap#2 -> ', this.heatmap);

    this.heatmap.setMap(this.map);
    this.heatmap.setData(this.getPoints());

    // trocar de andar
    console.log('getDiv() ->', this.map.getDiv());
    // getDiv() ->
    console.log('getTilt() ->', this.map.getTilt());
    // getTilt() -> 0

    console.log('this.gmapElement ->', this.gmapElement);

    // this.gmapElement.
  }

  toggleHeatmap() {
    this.heatmap.setMap(this.heatmap.getMap() ? null : this.map);
  }

  toggleN2() {
    this.map.set(
      'data',
      '!3m1!5s0x951979b7c165af21:0x1e3146979f0430fc!4m12!1m6!3m5!1s0x951979b632f34df7:0xafe9f802bc30033e!2sMoinhos+Shopping!8m2!3d-30.0233482!4d-51.2011311!3m4!1s0x951979b7b873c379:0x708eb7be9cfdc088!8m2!3d-30.0234857!4d-51.2014504'
    );
  }

  toggleN3() {
    this.map.set(
      'data',
      '!3m1!5s0x951979b7c165af21:0x1e31469791bfd4f8!4m12!1m6!3m5!1s0x951979b632f34df7:0xafe9f802bc30033e!2sMoinhos+Shopping!8m2!3d-30.0233482!4d-51.2011311!3m4!1s0x951979b7b873c379:0x708eb7be9cfdc088!8m2!3d-30.0234857!4d-51.2014504'
    );
  }

  toggleN4() {
    this.map.set(
      'data',
      '!3m1!5s0x951979b7c165af21:0x1e3146979a4464f1!4m12!1m6!3m5!1s0x951979b632f34df7:0xafe9f802bc30033e!2sMoinhos+Shopping!8m2!3d-30.0233482!4d-51.2011311!3m4!1s0x951979b7b873c379:0x708eb7be9cfdc088!8m2!3d-30.0234857!4d-51.2014504'
    );
  }

  // Heatmap data: 500 Points
  getPoints() {
    return [
      new google.maps.LatLng(-30.023244975149048, -51.20121997056958),
      new google.maps.LatLng(-30.023302260794075, -51.201258496088144),
      new google.maps.LatLng(-30.0232873348502, -51.20124845815059),
      new google.maps.LatLng(-30.02327741026573, -51.20124178370776),
      new google.maps.LatLng(-30.023244975149048, -51.20121997056958),
      new google.maps.LatLng(-30.023244975149048, -51.20121997056958),
      new google.maps.LatLng(-30.023256156222725, -51.20122749002164),
      new google.maps.LatLng(-30.023244975149048, -51.20121997056958),
      new google.maps.LatLng(-30.023244975149048, -51.20121997056958),
      new google.maps.LatLng(-30.02361190053492, -51.20146673379895),
      new google.maps.LatLng(-30.023536415351405, -51.20139914221207),
      new google.maps.LatLng(-30.023543984411116, -51.201405919764056),
      new google.maps.LatLng(-30.02361190053492, -51.20146673379895),
      new google.maps.LatLng(-30.02361190053492, -51.20146673379895),
      new google.maps.LatLng(-30.023240762436004, -51.20120410964964)
    ];
  }
}
