import { Component, OnInit } from '@angular/core';
import { enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  isEnabled as isDarkReaderEnabled,
  auto
} from 'darkreader';

@Component({
  selector: 'app-switch-mode',
  templateUrl: './switch-mode.component.html',
  styleUrls: ['./switch-mode.component.css']
})
export class SwitchModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    auto({
      brightness: 100,
      contrast: 100,
      sepia: 0,
  });
  }

  switchMode(){
    if (isDarkReaderEnabled()){
      disableDarkMode();
    }
    else{
      enableDarkMode({
        brightness: 100,
        contrast: 100,
        sepia: 0,
    });    
    }
  }
  
}
