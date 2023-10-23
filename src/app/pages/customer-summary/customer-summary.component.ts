import { Component } from '@angular/core';
import { CustomerSummaryService} from '../../service/customer-summary/customer-summary.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
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
    customerServiceDetail:any;
    userDetail:any;
    customerPendingService:any;
    customerCompletedService:any;
    customerServiceform: FormGroup;
    customerAndProvider:boolean = false
    constructor(private CustomerSummaryService: CustomerSummaryService, private modalService: NgbModal){
    }
    ngOnInit(){
        this.getAllcustomers();
        this.initForm()
    }
    initForm(){
        this.customerServiceform = new FormGroup({
            customerId:new FormControl(),
        });
    }
    getAllcustomers(){
        this.IsLoading = true;
        this.CustomerSummaryService.getAllCustomerDetail('').subscribe((data:any)=>{
          this.customerDetail = data.data;
          this.IsLoading=false
        });
    }
    onChangeCustomer(e){
        this.IsLoading = true;
        this.customerAndProvider = true;
        this.CustomerSummaryService.getCustomerServiceDetail(this.customerServiceform.value.customerId).subscribe((data:any)=>{
            this.customerServiceDetail = data.data.planDetail
            let serviceDetail:any = data.data?.planDetail[0]?.customerId;
            this.userDeivde(serviceDetail)
            this.IsLoading = false;
        })
    }
    userDeivde(data){
        this.userDetail = {
            customerName:data?.name,
            providerName:data?.providerId?.name,
            customerLocation:data?.locationId?.locationName,
            providerLocation:data?.providerId?.locationId?.locationName,
            customerMobile:data?.mobileNo,
            providerMobile:data?.providerId?.mobileNo
        }
    }
}
