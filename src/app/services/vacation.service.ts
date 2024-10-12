import { Injectable } from '@angular/core';

export interface VacationRequest {
  name: string;
  submittedOn: string;
  duration: string;
  salary: string;
}


@Injectable({
  providedIn: 'root'
})

export class VacationService {

  vacationRequests = [
    { name: 'Ahmad Khaled', submittedOn : '12 / 3 / 2023', duration: '1 week', salary: '450$' },
    { name: 'Mohammad Ali', submittedOn: '25 / 7 / 2023', duration: '3 weeks', salary: '900$' },
    { name: 'Omar Hassan', submittedOn: '10 / 9 / 2023', duration: '2 weeks', salary: '600$' },
    { name: 'Khaled Mahmoud', submittedOn: '15 / 1 / 2024', duration: '4 weeks', salary: '1200$' },
    { name: 'Fatima Zahraa', submittedOn: '5 / 8 / 2023', duration: '1.5 weeks', salary: '450$' },
    { name: 'Yasser Ahmad', submittedOn: '30 / 6 / 2023', duration: '2 weeks', salary: '700$' },
    { name: 'Maryam Abdullah', submittedOn: '17 / 5 / 2023', duration: '3 weeks', salary: '1000$' },
    { name: 'Zaynab Ali', submittedOn: '22 / 11 / 2023', duration: '1 week', salary: '450$' },
    { name: 'Ibrahim Youssef', submittedOn: '3 / 2 / 2024', duration: '2 weeks', salary: '750$' },
    { name: 'Layla Mohammad', submittedOn: '27 / 10 / 2023', duration: '4 weeks', salary: '1300$' },
    

  ];
  
}

