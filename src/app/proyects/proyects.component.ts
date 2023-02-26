import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {


  enter(x){
    if(x == 1){
      document.getElementById('p1').style.setProperty("display","block","important");
    }else if(x == 2){
      document.getElementById('p2').style.setProperty("display","block","important");
    }else if(x == 3){
      document.getElementById('p3').style.setProperty("display","block","important");
    }else{
      document.getElementById('p4').style.setProperty("display","block","important");
    }
  }

  exit(x){
    if(x == 1){
      document.getElementById('p1').style.setProperty("display","none","important");
    }else if(x == 2){
      document.getElementById('p2').style.setProperty("display","none","important");
    }else if(x == 3){
      document.getElementById('p3').style.setProperty("display","none","important");
    }else{
      document.getElementById('p4').style.setProperty("display","none","important");
    }
  }
}
