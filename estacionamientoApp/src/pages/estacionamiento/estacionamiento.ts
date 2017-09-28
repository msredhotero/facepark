import {  ViewChild,Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the EstacionamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google; 

@IonicPage()
@Component({
  selector: 'page-estacionamiento',
  templateUrl: 'estacionamiento.html',
})
export class EstacionamientoPage {

  @ViewChild('map') mapElement;
  map:any;

  public latitud:any;
  public longitud:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
    
  }

  ionViewDidLoad() {
    this.initMap();
    
  }

  

  initMap() {

    //this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    //  latitud =
    //}).catch((error) => {
    //  console.log('Error getting location', error);
    //});
    //let watch = this.geolocation.watchPosition();
    //let posicion = this.geolocation.getCurrentPosition();


    //Geolocation.getCu((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude

    let watch = this.geolocation.watchPosition();

    watch.subscribe((data) => {
      var latLng = new google.maps.LatLng(data.coords.latitude , data.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
        map: this.map,
        position: latLng
      });
    })
      
    //});

    

    
  }

  

}
