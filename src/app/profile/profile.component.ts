import { Component } from '@angular/core';
import { ProfileBoxComponent } from '../profile-box/profile-box.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileBoxComponent, CommonModule, RouterModule, CardComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  pendingRequests = [
    { name: 'Ahmad Azmi', submittedOn: '12 / 3 / 2023', duration: '1 week', currentlyAt: 'Omar Ahmad' },
    { name: 'Ahmad Azmi', submittedOn: '30 / 4 / 2023', duration: '2 weeks', currentlyAt: 'Omar Ahmad' },
  ];
}
