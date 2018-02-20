import {Component} from '@angular/core';
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.available.subscribe((event) => {
      const message = 'New version available ( ' + event.current.appData["version"] + ' => ' + event.available.appData["version"] + ' ) , update now ?';
      if (confirm(message)) {
        this.swUpdate.activateUpdate().then(() => {
          document.location.reload();
        });
      }
    });
  }
}
