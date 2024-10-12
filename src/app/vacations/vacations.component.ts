import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { VacationService , VacationRequest } from '../services/vacation.service';
import { ReactiveFormsModule, FormControl } from '@angular/forms'; 


@Component({
  selector: 'app-vacations',
  standalone: true,
  imports: [CardComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './vacations.component.html',
  styleUrl: './vacations.component.css',

})
export class VacationsComponent {
  vacation: VacationRequest[] = [];
  searchControl = new FormControl(''); 

  constructor(private vacationService: VacationService ){}
  ngOnInit(){
    this.vacation = this.vacationService.vacationRequests; 
  }
  filteredRequests(): VacationRequest[] {
    const searchText = this.searchControl.value?.toLowerCase() || '';
    return this.vacation.filter(request =>
      request.name.toLowerCase().includes(searchText) ||
      request.duration.toLowerCase().includes(searchText) ||
      request.salary.toLowerCase().includes(searchText)
    );
  }
}
