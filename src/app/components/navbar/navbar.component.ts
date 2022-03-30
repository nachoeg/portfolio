import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { isEnabled as isDarkReaderEnabled } from 'darkreader';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  darkmode: boolean;
  sesionIniciada: boolean;
  constructor(private authService: AuthService) { 
    this.sesionIniciada = authService.logIn
    this.darkmode = isDarkReaderEnabled();
  }

  ngOnInit(): void {
  }


}


