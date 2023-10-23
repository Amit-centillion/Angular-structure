import { Component } from '@angular/core';
import { CustomerSummaryService} from '../../service/customer-summary/customer-summary.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'customer-summary.component.html',
    styleUrls: ['./customer-summary.scss']
})

export class customerSummaryComponent {
    IsLoading:boolean = false;
    customerDetail:any[]=[];

    constructor(private CustomerSummaryService: CustomerSummaryService, private modalService: NgbModal){
    }
    // ngOnInit() {
    //     var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    //     var mapOptions = {
    //       zoom: 13,
    //       center: myLatlng,
    //       scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    //       styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

    //     }
    //     var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //     var marker = new google.maps.Marker({
    //         position: myLatlng,
    //         title:"Hello World!"
    //     });

    //     // To add the marker to the map, call setMap();
    //     marker.setMap(map);
    // }
    ngOnInit(){
        this.getAllcustomers();
    }
    getAllcustomers(){
        this.IsLoading = true;
        this.CustomerSummaryService.getAllCustomerDetail('').subscribe((data:any)=>{
          this.customerDetail = data.data;
          this.IsLoading=false
        });
    }
    onChangeCustomer(){
        console.log("is calling")
    }
}