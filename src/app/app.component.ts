import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
  variableControlMenu: boolean = false

  /* Manejo de evento del menu */
  @HostListener('document:click', ['$event'])
  outOfContext(event: Event) {
    const target = event.target as HTMLElement;
    const menu = document.getElementById("menu_btn")
    if (!menu?.contains(target) && this.variableControlMenu) {
      this.closeMenu()
    }
  }

  mostrarMenu(){
    this.variableControlMenu = !this.variableControlMenu
    document.getElementById("menu")?.classList.toggle("show")
  }

  closeMenu() {
    this.variableControlMenu = false
    document.getElementById("menu")?.classList.toggle("show")
  }
}
