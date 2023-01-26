import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent {



newOnomatopia: string = ""

 @Output()
sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

createOnomatopia():void {
  //  = this.newOnomatopia
 console.log("envoi")
 this.sendOnomatopiaToParent.emit(this.newOnomatopia)
}

}
