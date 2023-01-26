import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quete-angular-8';
  onomatopoeiaList: string[] = []

onReceiveNewOnomatopia (event: string):void{
  console.log("receive")
  console.log(event)
  this.onomatopoeiaList.push(event)
  console.log(this.onomatopoeiaList)
}

}
