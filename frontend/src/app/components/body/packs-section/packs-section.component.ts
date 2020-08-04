import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packs-section',
  templateUrl: './packs-section.component.html',
  styleUrls: ['./packs-section.component.css']
})
export class PacksSectionComponent implements OnInit {

  cards = [
    {
      // tslint:disable-next-line: max-line-length
      packImg: 'https://typekit.com/cloudfront_blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYzA9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--49c093da752db1222e9b8b91f3dbdda12987d366/Build-a-Brand-750-430.jpg',
      packTitle: 'Build a Brand',
      packSub: '9 faves from designer Tad Carpenter'
    },
    {
      // tslint:disable-next-line: max-line-length
      packImg: 'https://typekit.com/cloudfront_blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaXZaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e75846a4ef22718a23b14eb1bf1fa0a280104eb5/Standout%20On%20Social_Premium%20Font%20Thumbnails_750x430.jpg',
      packTitle: 'Spark Front Pack',
      packSub: 'Bold type for a bold social media presence'
    },
    {
      // tslint:disable-next-line: max-line-length
      packImg: 'https://typekit.com/cloudfront_blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWUE9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2f15e6a66aa6ea95374c7747cbf373caa3068eec/xd-starter-750-430.jpg',
      packTitle: 'UX Font Pack',
      packSub: 'Screen-frindle fonts for UX/UI design'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
