import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements=[{type:'blueprint', name:'dummy', content:'just a test'}];

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
      }

      onBluePrintAdded(blueData:{serverName:string, serverContent:string}){
        this.serverElements.push({
          type:'blueprint',
          name:blueData.serverName,
          content:blueData.serverContent
        });
      }
}
