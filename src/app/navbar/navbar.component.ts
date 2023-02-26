import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isDark:boolean = false;

  dark(){
    this.isDark = !this.isDark;
    if(this.isDark){
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      var nav = document.getElementById('navbar');
      nav.classList.remove('bg-white');
      nav.classList.add('bg-black');
      nav.classList.add('navbar-dark')
    }else{
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      var nav = document.getElementById('navbar');
      nav.classList.add('bg-white');
      nav.classList.remove('bg-black');
      nav.classList.remove('navbar-dark')
    }
  }

  darkPhone(){
    this.isDark = !this.isDark;
    if(this.isDark){
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      var nav = document.getElementById('navbar-phone');
      nav.classList.remove('bg-white');
      nav.classList.add('bg-black');
      nav.classList.add('navbar-dark')
      var canvas = document.getElementById('offcanvasNavbar');
      canvas.classList.add('text-bg-dark');
    }else{
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      var nav = document.getElementById('navbar-phone');
      nav.classList.add('bg-white');
      nav.classList.remove('bg-black');
      nav.classList.remove('navbar-dark')
      var canvas = document.getElementById('offcanvasNavbar');
      canvas.classList.remove('text-bg-dark');

    }
  }

}
