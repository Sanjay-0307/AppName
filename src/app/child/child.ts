import { Component,EventEmitter,Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child implements OnInit,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng Onchange called!!" + changes)
    //throw new Error('Method not implemented.');
  }

  @Input() ChildClassvar : any;
  MyList:any=[];
  @Output() passDataToParent =new EventEmitter<any>();

  ngOnInit(): void {

    this.MyList=[
      {
        FNAME:"Sanjay",
        LNAME:"Mekwan"
      },
    {
        FNAME:"Sanjay1dd",
        LNAME:"Mekwand"
      }
    
    
    ]
    console.log("On Init called");
}

ngDoCheck():void{
  console.log("Do Check Called!");
}

ngOnDestroy():void{
  console.log("destroy!!!!!!!")
}

PassDataToParent(){
  this.passDataToParent.emit(this.ChildClassvar);
}


}
