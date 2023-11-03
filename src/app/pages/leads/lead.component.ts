import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { leadService } from 'app/service/lead/lead.service';

@Component({
    selector: 'lead-cmp',
    moduleId: module.id,
    templateUrl: 'lead.component.html',
    styleUrls:['./lead.component.scss']
})

export class leadComponent{
    nameForm: FormGroup;
    basicDetailForm: FormGroup;

    constructor(private LeadService: leadService,private fb: FormBuilder){}

    ngOnInit(){
      this.initFrom();
      this.basicDetailFormData();
    }
    basicDetailFormData(){
      this.basicDetailForm = new FormGroup({
        FirstName:new FormControl(null),
        LastName:new FormControl(null)
      })
    }
    initFrom(){
      this.nameForm = this.fb.group({
        nameFields: this.fb.array([this.createNameField()])
      });
    }
    createNameField(): FormGroup {
        return this.fb.group({
          firstEnergyName: [''],
          lastEnergyName:['']
        });
      }
    
      get nameFields() {
        return this.nameForm.get('nameFields') as FormArray;
      }
    
      addNameField() {
        this.nameFields.push(this.createNameField());
      }
    
      removeNameField(index: number) {
        this.nameFields.removeAt(index);
      }
    
      onSubmit() {
        if (this.nameForm.valid) {
          let setFromPayload = {
            ...this.basicDetailForm.value,
            EnergyList:this.nameForm.value.nameFields
           }
           console.log("main fron data",setFromPayload)
        }
      }

  steps: { name: string, active: boolean }[] = [
    { name: 'Customer', active: true },
    { name: 'Meter Account', active: false },
    { name: 'Supply Group', active: false },
    { name: 'Billing Group', active: false },
    { name: 'Contract', active: false },
    { name: 'Enroll', active: false }
  ];

  activateStep(stepIndex: number) {
    this.steps.forEach((step, index) => {
      step.active = index <= stepIndex;
    });
  }


  getAllBasicDetail(){
        let data = {
            componyId:4,
            roleId:3,
            userId:2
        }
        this.LeadService.getAllLeadDetails(data).subscribe((data:any)=>{
            console.log("data",data)
        })
    }
}
