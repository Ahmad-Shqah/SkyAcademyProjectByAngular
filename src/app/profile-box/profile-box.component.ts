import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-box',
  standalone: true,
  imports: [],
  templateUrl: './profile-box.component.html',
  styleUrl: './profile-box.component.css'
})
export class ProfileBoxComponent {
  RefuseRequest(){
    window.alert("Requests are not allowed at this moment.");
  }
}
