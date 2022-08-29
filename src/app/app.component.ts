import { Component,VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // name = 'Angular ' + VERSION.major;
  
  phoneNumber = "25565220";

  hobbies=[{name:"Chess",startdt:"2022-01-01",fav:0},
  {name:"Badminton",startdt:"2022-01-01",fav:0}];
  isLoggedin=false;
  title = 'Hobbies';
  favhobby:any[]=[];

lnk="";

  updatelnk(data:string){
  this.lnk=data;
  }

  addHobby(data:any){
    let obj={name:data, startdt:"2022-01-01",fav:0};
    this.hobbies.unshift(obj);
    console.log(data);
  }

  deleteHobby($event:any){
    this.hobbies.splice($event,1);
  }

  addtofav($event:any){
    // console.log($event)
    this.hobbies[$event].fav=1;
    this.favhobby=this.hobbies.filter(item=>item.fav==1);

  }

  removefav($event:any){
    this.hobbies[$event].fav=0;
  }
}

  // deleteHobby($event:any){
  //   if(this.hobbies.length!=0){
  //     const index=this.hobbies.indexOf($event.target.value)
  //     this.hobbies.splice(index,1)
  //   }

  // }
  

  // addToFav(index:number){
  //   if(this.hobbies.length==0&&index!=0){
  //     const hobby=this.hobbies[index];
  //     console.log(hobby)
  //   }
  // }

  // deleteHobby(data:any){
  //   let obj={name:data, startdt:"2022-01-01"};
  //   this.hobbies.pop[obj.data];
  // }




  // invalue="";
  // isActive=false;

  // col=2;
  // email="krish@gmail.com"
  //  pic="https://upload.wikimedia.org/wikipedia/commons/7/72/A_backpacking_travel_to_europe_R002-005.jpg";
  // test($event:any){
  //   console.log($event.target.value);
  //   this.invalue=$event.target.value;
  // }
 
  // deleteHobby (data:any) {
  //   this.hobbies = this.hobbies.filter((v, i) => i !== data);
  // }
