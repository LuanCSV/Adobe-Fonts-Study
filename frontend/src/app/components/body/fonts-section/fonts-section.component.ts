import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts-section',
  templateUrl: './fonts-section.component.html',
  styleUrls: ['./fonts-section.component.css']
})
export class FontsSectionComponent implements OnInit {

  iconFavorite = 'favorite_border';
  isFavorite = false;
  constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    if (!this.isFavorite) {
      this.iconFavorite = 'favorite';
      this.isFavorite = true;
    } else if (this.isFavorite) {
      this.isFavorite = false;
      this.iconFavorite = 'favorite_border';
    }
  }
}
