import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { VacationsComponent } from './vacations/vacations.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,ProfileComponent,VacationsComponent,CommonModule,RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';

}
