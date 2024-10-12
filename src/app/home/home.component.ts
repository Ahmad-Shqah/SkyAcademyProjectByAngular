import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from '../user-data/user-data.component';
import { NewsComponent } from '../news/news.component';
import { CardComponent } from '../card/card.component';
import { RouterModule } from '@angular/router';
import { VacationService, VacationRequest } from '../services/vacation.service'; 
import { ReactiveFormsModule, FormControl } from '@angular/forms'; 
import { HighlightSearchPipe } from '../highlight-search.pipe';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserDataComponent, NewsComponent, CardComponent, CommonModule, RouterModule,ReactiveFormsModule,HighlightSearchPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VacationService]
})
export class HomeComponent implements OnInit { 
  vacation: VacationRequest[] = []; 
  searchControl = new FormControl(''); 
  constructor(private vacationService: VacationService) {}

  ngOnInit() {
    this.vacation = this.vacationService.vacationRequests; 
  }

  RefuseRequest() {
    window.alert("Requests are not allowed at this moment.");
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
