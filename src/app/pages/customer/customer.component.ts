import { Component, TemplateRef, ViewChild,OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer-services/customer.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
    selector: 'customer-cmp',
    moduleId: module.id,
    templateUrl: 'customer.component.html',
    styleUrls: ['./customer.component.scss']

})

export class customerComponent implements OnInit{

  // public canvas : any;
  // public ctx;
  // public chartColor;
  // public chartEmail;
  // public chartHours;

  //   ngOnInit(){
  //     this.chartColor = "#FFFFFF";

  //     this.canvas = document.getElementById("chartHours");
  //     this.ctx = this.canvas.getContext("2d");

  //     this.chartHours = new Chart(this.ctx, {
  //       type: 'line',

  //       data: {
  //         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  //         datasets: [{
  //             borderColor: "#6bd098",
  //             backgroundColor: "#6bd098",
  //             pointRadius: 0,
  //             pointHoverRadius: 0,
  //             borderWidth: 3,
  //             data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
  //           },
  //           {
  //             borderColor: "#f17e5d",
  //             backgroundColor: "#f17e5d",
  //             pointRadius: 0,
  //             pointHoverRadius: 0,
  //             borderWidth: 3,
  //             data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
  //           },
  //           {
  //             borderColor: "#fcc468",
  //             backgroundColor: "#fcc468",
  //             pointRadius: 0,
  //             pointHoverRadius: 0,
  //             borderWidth: 3,
  //             data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
  //           }
  //         ]
  //       },
  //       options: {
  //         legend: {
  //           display: false
  //         },

  //         tooltips: {
  //           enabled: false
  //         },

  //         scales: {
  //           yAxes: [{

  //             ticks: {
  //               fontColor: "#9f9f9f",
  //               beginAtZero: false,
  //               maxTicksLimit: 5,
  //               //padding: 20
  //             },
  //             gridLines: {
  //               drawBorder: false,
  //               zeroLineColor: "#ccc",
  //               color: 'rgba(255,255,255,0.05)'
  //             }

  //           }],

  //           xAxes: [{
  //             barPercentage: 1.6,
  //             gridLines: {
  //               drawBorder: false,
  //               color: 'rgba(255,255,255,0.1)',
  //               zeroLineColor: "transparent",
  //               display: false,
  //             },
  //             ticks: {
  //               padding: 20,
  //               fontColor: "#9f9f9f"
  //             }
  //           }]
  //         },
  //       }
  //     });


  //     this.canvas = document.getElementById("chartEmail");
  //     this.ctx = this.canvas.getContext("2d");
  //     this.chartEmail = new Chart(this.ctx, {
  //       type: 'pie',
  //       data: {
  //         labels: [1, 2, 3],
  //         datasets: [{
  //           label: "Emails",
  //           pointRadius: 0,
  //           pointHoverRadius: 0,
  //           backgroundColor: [
  //             '#e3e3e3',
  //             '#4acccd',
  //             '#fcc468',
  //             '#ef8157'
  //           ],
  //           borderWidth: 0,
  //           data: [342, 480, 530, 120]
  //         }]
  //       },

  //       options: {

  //         legend: {
  //           display: false
  //         },

  //         pieceLabel: {
  //           render: 'percentage',
  //           fontColor: ['white'],
  //           precision: 2
  //         },

  //         tooltips: {
  //           enabled: false
  //         },

  //         scales: {
  //           yAxes: [{

  //             ticks: {
  //               display: false
  //             },
  //             gridLines: {
  //               drawBorder: false,
  //               zeroLineColor: "transparent",
  //               color: 'rgba(255,255,255,0.05)'
  //             }

  //           }],

  //           xAxes: [{
  //             barPercentage: 1.6,
  //             gridLines: {
  //               drawBorder: false,
  //               color: 'rgba(255,255,255,0.1)',
  //               zeroLineColor: "transparent"
  //             },
  //             ticks: {
  //               display: false,
  //             }
  //           }]
  //         },
  //       }
  //     });

  //     var speedCanvas = document.getElementById("speedChart");

  //     var dataFirst = {
  //       data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
  //       fill: false,
  //       borderColor: '#fbc658',
  //       backgroundColor: 'transparent',
  //       pointBorderColor: '#fbc658',
  //       pointRadius: 4,
  //       pointHoverRadius: 4,
  //       pointBorderWidth: 8,
  //     };

  //     var dataSecond = {
  //       data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
  //       fill: false,
  //       borderColor: '#51CACF',
  //       backgroundColor: 'transparent',
  //       pointBorderColor: '#51CACF',
  //       pointRadius: 4,
  //       pointHoverRadius: 4,
  //       pointBorderWidth: 8
  //     };

  //     var speedData = {
  //       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  //       datasets: [dataFirst, dataSecond]
  //     };

  //     var chartOptions = {
  //       legend: {
  //         display: false,
  //         position: 'top'
  //       }
  //     };

  //     var lineChart = new Chart(speedCanvas, {
  //       type: 'line',
  //       hover: false,
  //       data: speedData,
  //       options: chartOptions
  //     });
  //   }
  SearchBox:any;
  tagShow:boolean = true
  showTitle:any;
  IsLoading:boolean = false;
  @ViewChild('customerAddPopup')
  private modalContentViewingList: TemplateRef<customerComponent>;
  private customerDetailPopu: NgbModalRef | any;
  customerDetailForm: FormGroup | any;
  customerDetail:any[]=[];
  locationData:any;
  providerData:any;
  itemsPerPage = 15;
  totalIeamPerPage =15;
  page = 1;
  totalItems: any;
  isSave: boolean = false;
  constructor(private CustomerService: CustomerService, private modalService: NgbModal){

  }

  get username(){
    return this.customerDetailForm.get('username')
  }
  get address(){
    return this.customerDetailForm.get('address')
  }
  get pinCode(){
    return this.customerDetailForm.get('pinCode')
  }
  get location(){
    return this.customerDetailForm.get('location')
  }
  get mobileNo(){
    return this.customerDetailForm.get('mobileNo')
  }
  get email(){
    return this.customerDetailForm.get('email')
  }
  get noOfPlant(){
    return this.customerDetailForm.get('noOfPlant')
  }
  get provider(){
    return this.customerDetailForm.get('provider')
  }
  get startDate(){
    return this.customerDetailForm.get('startDate')
  }
  get password(){
    return this.customerDetailForm.get('password')
  }
  ngOnInit():void {
    this.onLoadCustomer();
    this.dropDownData();
    this.initFrom();
  }
  dropDownData(){
    this.getAllLocation();
    this.getAllProvider();
  }
  getAllLocation(){
    this.CustomerService.getAllLocationData().subscribe((data:any)=>{
      this.locationData = data.data
    });
   }
   getAllProvider(){
    this.CustomerService.getAllProviderData().subscribe((data:any)=>{
      this.providerData = data.data
    })
   }
   renderPage(e:any){
    this.page = e;
   }
   onClickSearch(){
    this.CustomerService.getAllCustomerDetail(this.SearchBox).subscribe((data:any)=>{
      this.customerDetail = data.data;
    });
   }
  initFrom(){
    this.customerDetailForm = new FormGroup({
      username: new FormControl(),
      address: new FormControl(),
      pinCode: new FormControl(),
      location: new FormControl(null,Validators.required),
      mobileNo: new FormControl(),
      email: new FormControl(),
      plant: new FormControl(),
      noOfPlant: new FormControl(),
      provider: new FormControl(),
      startDate: new FormControl(),
      password: new FormControl(),
    })
  }
  onLoadCustomer(){
    this.IsLoading = true;
    this.CustomerService.getAllCustomerDetail('').subscribe((data:any)=>{
      this.customerDetail = data.data;
      if(this.customerDetail.length > 0){
        this.totalItems = this.customerDetail.length
      }
      this.IsLoading=false
    });
  }
  onCustomerView(data:any){
    this.showTitle = `Edit Customer ${data.name}`; 
    this.IsLoading = true;
    this.setDataValueFrom(data);
    this.IsLoading=false
    return new Promise<boolean>((resolve) => {
      this.customerDetailPopu = this.modalService.open(this.modalContentViewingList, {
        size: 'xl',
      });
      this.customerDetailPopu.result.then(resolve, resolve);
    });
    
  }
  closeViewList(){
    this.isSave = false;
    this.customerDetailPopu.close()
  }
  onAddData(){
    this.showTitle = 'New Customer'
    this.isSave = false;
    this.initFrom()
    return new Promise<boolean>((resolve) => {
      this.customerDetailPopu = this.modalService.open(this.modalContentViewingList, {
        size: 'xl',
      });
      this.customerDetailPopu.result.then(resolve, resolve);
    });
  }
  onSubmit(){
    this.isSave = true;
  }
  setDataValueFrom(detail:any){
    this.customerDetailForm = new FormGroup({
      username: new FormControl(detail?.name === null ? null : detail?.name),
      address: new FormControl(detail?.address === null ? null : detail?.address),
      pinCode: new FormControl(detail?.pincode === null ? null : detail?.pincode),
      location: new FormControl(detail?.locationId?._id === null ? null : detail?.locationId?._id ),
      mobileNo: new FormControl(detail?.mobileNo === null ? null : detail?.mobileNo),
      email: new FormControl(detail?.email === null ? null : detail?.email),
      plant: new FormControl(null),
      noOfPlant: new FormControl(null),
      provider: new FormControl(detail?.providerId._id === null ? null : detail?.providerId?._id),
      startDate: new FormControl(detail?.startDate === null ? null : moment(detail?.startDate).format("DD-MM-YYYY")),
    }) 
   }
}
