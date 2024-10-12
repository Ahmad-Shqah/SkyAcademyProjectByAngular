import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: string | null | undefined, searchText: string): string {
    if (typeof value !== 'string') {
      return ''; 
    }

    if (!searchText) {
      return value;
    }

    const regex = new RegExp(searchText, 'gi');
    return value.replace(regex, (match) => `<span class="highlight">${match}</span>`);
  }

}
