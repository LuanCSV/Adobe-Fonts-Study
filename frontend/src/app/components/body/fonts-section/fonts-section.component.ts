import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts-section',
  templateUrl: './fonts-section.component.html',
  styleUrls: ['./fonts-section.component.css']
})
export class FontsSectionComponent implements OnInit {

  iconFavorite = 'favorite_border';
  cards = [
    {
      fontImg: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
      fontTitle: 'Acumin',
      fontSubtitle: '9 faves from designer Tad Carpenter',
      fontInfo: '44 fonts • 86 fonts with CC',
      isFavorite: this.iconFavorite,
      isFav: false
    },
    {
      fontImg: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
      fontTitle: 'Cortado',
      fontSubtitle: 'XYZ Type',
      fontInfo: '1 font with CC',
      isFavorite: this.iconFavorite,
      isFav: false
    },
    {
      fontImg: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
      fontTitle: 'Sloop Script',
      fontSubtitle: 'Lipton Letter Design',
      fontInfo: '12 fonts with CC',
      isFavorite: this.iconFavorite,
      isFav: false
    },
    {
      fontImg: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
      fontTitle: 'Masqualero',
      fontSubtitle: 'Monotype',
      fontInfo: '14 fonts with CC',
      isFavorite: this.iconFavorite,
      isFav: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite(card): void {
      if (card.isFav === false) {
        card.isFavorite = 'favorite';
        card.isFav = true;
      } else {
        card.isFavorite = 'favorite_border';
        card.isFav = false;
      }
  }
}
