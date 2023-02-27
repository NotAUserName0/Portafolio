import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {


  enter(x){
    if(x == 1){
      document.getElementById('p1').classList.remove('hide');
      document.getElementById('p1').classList.add('show');
    }else if(x == 2){
      document.getElementById('p2').classList.remove('hide');
      document.getElementById('p2').classList.add('show');
    }else if(x == 3){
      document.getElementById('p3').classList.remove('hide');
      document.getElementById('p3').classList.add('show');
    }else{
      document.getElementById('p4').classList.remove('hide');
      document.getElementById('p4').classList.add('show');
    }
  }

  exit(x){
    if(x == 1){
      document.getElementById('p1').classList.remove('show');
      document.getElementById('p1').classList.add('hide');
    }else if(x == 2){
      document.getElementById('p2').classList.remove('show');
      document.getElementById('p2').classList.add('hide');
    }else if(x == 3){
      document.getElementById('p3').classList.remove('show');
      document.getElementById('p3').classList.add('hide');
    }else{
      document.getElementById('p4').classList.remove('show');
      document.getElementById('p4').classList.add('hide');
    }
  }
}
