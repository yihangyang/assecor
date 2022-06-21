import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/services/apis/types';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() title = "default";
  @Input() subtitle = "default"
  @Input() movies: Movie[] = [];

  planetShow = false
  pic_url = "https://picsum.photos/500/300/?image=10";
  constructor() { }

  ngOnInit(): void {
  }

  readmore(): void {

  }

}
