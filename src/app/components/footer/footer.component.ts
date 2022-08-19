import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public colored = false;

  constructor() {
  }

  ngOnInit(): void {
    this.colored = this.isBackgroundColored();
  }

  isBackgroundColored(): boolean {
    const storageKey = 'refreshCounter';
    let counter = +localStorage[storageKey] || 0;
    if (+counter === 4) {
      localStorage.setItem(storageKey, '0');
      return true;
    }
    localStorage.setItem(storageKey, (++counter).toString());
    return false;
  }

}
