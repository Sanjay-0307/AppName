import { Component , ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent implements OnInit{

ParentnameVar="This is from Parent Class";
isVisible=true;
@ViewChild("txtName") txtName = ElementRef;
  
ngOnInit(): void {
      
  }

   ngOnAfterViewInit(): void {
    debugger;
    // Logic to run after the component's view has been fully initialized
    var a=this.txtName;
    console.log('View initialized');
  }

  getDataFromChild(e:any){
    debugger;
    console.log(e);
    this.ParentnameVar=e;
  }

}
