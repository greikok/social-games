import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public links = [
    {
      "name": "El nuevo Slot.com",
      "link": "https://www.slot.com/es"
    },
    {
      "name": "Ayuda y Contacto",
      "link": "https://support.slot.com/hc/es?p=cD1XZWI="
    },
    {
      "name": "Términos y Condiciones",
      "link": "https://www.slot.com/es/terms"
    },
    {
      "name": "Privacidad",
      "link": "https://www.slot.com/es/privacy"
    },
    {
      "name": "Política de Cookies",
      "link": "https://www.slot.com/es/cookies"
    },
    {
      "name": "Blog",
      "link": "https://blog.slot.com"
    },
  ];
  constructor(private router: Router, public gameService: GameService) { }

  home() {
    this.router.navigate(['home'])
  }

  close() {
    this.sidenav.close();
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
