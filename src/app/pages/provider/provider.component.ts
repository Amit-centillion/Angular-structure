import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProviderService } from 'app/service/provider-service/provider.service';
import * as moment from 'moment';
@Component({
    selector: 'provider-cmp',
    moduleId: module.id,
    templateUrl: 'provider.component.html',
    styleUrls: ['./provider.component.scss']

})
export class ProviderComponent{
    searchData:any;
    tagShow:boolean = true;
    storeProviderId:any;
    providersCustomerList:any;
    storeCustomerId:any;
    customerServiceList:any;
    showTitle:any;
    IsLoading:boolean = false;
    @ViewChild('providerAddPopup')
    private modalContentViewingList: TemplateRef<ProviderComponent>;
    @ViewChild('customerServices')
    private modalCustomerService : TemplateRef<ProviderComponent>;
    private providerDetailPopu: NgbModalRef | any;
    private customerServiceDetailPopu: NgbModalRef | any;
    providerDetailForm: FormGroup | any;
    providerDetail:any[]=[];
    locationData:any;
    providerData:any;
    itemsPerPage = 15;
    totalIeamPerPage =0;
    page = 1;
    totalItems: any;
    isSave: boolean = false;
    constructor(private ProviderService: ProviderService, private modalService: NgbModal){
  
    }
    getSerialNumber(index: number): number {
      return (this.page - 1) * this.itemsPerPage + index + 1;
    }
    get username(){
      return this.providerDetailForm.get('username')
    }
    get address(){
      return this.providerDetailForm.get('address')
    }
    get pinCode(){
      return this.providerDetailForm.get('pinCode')
    }
    get location(){
      return this.providerDetailForm.get('location')
    }
    get mobileNo(){
      return this.providerDetailForm.get('mobileNo')
    }
    get email(){
      return this.providerDetailForm.get('email')
    }
    get noOfPlant(){
      return this.providerDetailForm.get('noOfPlant')
    }
    get provider(){
      return this.providerDetailForm.get('provider')
    }
    get startDate(){
      return this.providerDetailForm.get('startDate')
    }
    get password(){
      return this.providerDetailForm.get('password')
    }
   
    ngOnInit():void {
      this.onLoadProvider();
      this.dropDownData();
      this.initFrom();
    }
    dropDownData(){
      
    }
   
     renderPage(e:any){
      this.page = e;
     }
    initFrom(){
      this.providerDetailForm = new FormGroup({
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
    onLoadProvider(){
      this.IsLoading = true;
      this.ProviderService.providerSummary().subscribe((data:any)=>{
        this.providerDetail = data.data;
        console.log('this.providerDetail', this.providerDetail)
        if(this.providerDetail.length > 0){
          this.totalItems = this.providerDetail.length
        }
        this.IsLoading=false
      });
    }
    customerServiceData(detail){
      this.storeCustomerId = detail._id;
      let filterProvider = this.providerDetail.find((x:any)=>x._id == this.storeProviderId);
      let findCustomerService = filterProvider.plans.filter((a:any)=>a.customerId == this.storeCustomerId)    
      this.customerServiceList = findCustomerService
      if(this.customerServiceList[0]?._id === undefined){
        alert("Customer don't have a service! ")
      }else{
        this.showTitle = `Customer Services List`; 
        return new Promise<boolean>((resolve) => {
          this.customerServiceDetailPopu = this.modalService.open(this.modalCustomerService, {
            size: 'xl',
          });
          this.customerServiceDetailPopu.result.then(resolve, resolve);
        });
      }
    }
    onproviderView(data:any){
      console.log("data.....",data)
      this.storeProviderId = data._id;
      if(data.customers.length > 0){
        this.showTitle = `Customer List`; 
        this.providersCustomerList = data.customers;
        this.IsLoading = true;
        // this.setDataValueFrom(data);
        this.IsLoading=false
        return new Promise<boolean>((resolve) => {
          this.providerDetailPopu = this.modalService.open(this.modalContentViewingList, {
            size: 'xl',
          });
          this.providerDetailPopu.result.then(resolve, resolve);
        });
      }    
     else{
      alert(`${data.name} You dont have a Customers!`)
    }
    }
    closeViewList(){
      this.isSave = false;
      this.providerDetailPopu.close()
    }
    closeCustomerServiceList(){
      this.customerServiceDetailPopu.close()
    }
    onAddData(){
      this.showTitle = 'New provider'
      this.isSave = false;
      this.initFrom()
      return new Promise<boolean>((resolve) => {
        this.providerDetailPopu = this.modalService.open(this.modalContentViewingList, {
          size: 'xl',
        });
        this.providerDetailPopu.result.then(resolve, resolve);
      });
    }
    onSubmit(){
      this.isSave = true;
    }
    setDataValueFrom(detail:any){
      this.providerDetailForm = new FormGroup({
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
