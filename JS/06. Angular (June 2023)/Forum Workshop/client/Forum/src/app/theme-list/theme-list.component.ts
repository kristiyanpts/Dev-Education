import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../models/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css'],
})
export class ThemeListComponent {
  themesList: Theme[] = [];
  isLoading: boolean = true;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe({
      next: (themes) => {
        this.themesList = themes;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}
