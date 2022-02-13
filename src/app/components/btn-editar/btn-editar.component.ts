import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-btn-editar',
  templateUrl: './btn-editar.component.html',
  styleUrls: ['./btn-editar.component.css']
})
export class BtnEditarComponent implements OnInit {

  sesionIniciada: boolean;
  constructor(private authService: AuthService) { 
    this.sesionIniciada = authService.logIn
  }

  ngOnInit(): void {
  }

}
