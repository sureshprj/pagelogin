import { 
    Component,Input,Output,Pipe,PipeTransform,OnInit
} from '@angular/core';
import { commonCls } from './commonCls';
import { Observable } from 'rxjs';
import {  FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
   <h1>Forms</h1>
` 
})
export class AppComponent {
}

@Component({
  selector:'template-driven',
  styles:[`
    div,input,label{
      padding:5px;
      margin:2px
    }`],
  template:`
    <h2>Template Driven</h2> 
<form (ngSubmit)="onsubmit()" #studForm="ngForm">
        <div>
          <label>Name</label> 
         
          <input type="text"
              #studName="ngModel"
              [(ngModel)]='stud.name' 
              required name="studName" 
               />
          <br/>
           <div *ngIf="studName.invalid && (studName.dirty || studName.touched)">

            <div *ngIf="studName.errors.required">
              Name is required.
            </div>

          </div>

        </div>
        <div>
         <label>Age</label> 
             <input type="text"
              #age="ngModel"
              [(ngModel)]='stud.age' 
              required name="age" maxage="100"
              />
            
            <div *ngIf="age.invalid && (age.dirty || age.touched)">
             
              <div *ngIf="age.errors.required">
                Age is required.
              </div>
              <div *ngIf="age.errors.ageLimit">
                age should be 0 to 100
              </div>
          </div>

          </div>

        <div>
          <input type="submit" [disabled]="!studForm.form.valid" value="submit" />
        </div>
    </form>
  `
})
export class templateDirven {
  public stud = {
    age:'',
    name:""
  }
  onsubmit(e){
  }
}



