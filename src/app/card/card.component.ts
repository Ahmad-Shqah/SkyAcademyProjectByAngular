import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HighlightSearchPipe } from '../highlight-search.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,HighlightSearchPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name!: string;
  @Input() submittedOn!: string;
  @Input() duration!: string;
  @Input() salary!: string;
}
