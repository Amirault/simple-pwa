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
    if ((navigator as any).standalone === false) {
      console.log("app showed on iOS browser");
      alert("You can add this application to home screen ('share/add to home screen')");
    } else if ((navigator as any).standalone === undefined) {
      if (window.matchMedia("(display-mode: browser)").matches) {
        console.log("app showed on browser (not iOS)"); // Web app banner
        window.addEventListener("beforeinstallprompt", event => {
          event.preventDefault(); // cancel add to home screen prompted by the navigator
          // customize user experience when it can add this add to home screen (decided by navigator heuristic)
          if (confirm("Do you want to install this app ?")) {
            (event as any).prompt(); // show add to home screen prompted by the navigator
          }
        });
      }
    }
    this.checkForUpdate();
  }

  private checkForUpdate() {
    this.swUpdate.available.subscribe((event) => {
      this.askUserForUpdate(event);
    });
  }

  private askUserForUpdate(event) {
    const message = 'New version available ( ' + event.current.appData["version"] + ' => ' + event.available.appData["version"] + ' ) , update now ?';
    if (confirm(message)) {
      this.swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    }
  }
}
