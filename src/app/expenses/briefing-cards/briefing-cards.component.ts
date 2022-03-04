import { Component, Input, OnInit } from '@angular/core';
import MonthSpending from '../briefling-cards';

@Component({
  selector: 'et-briefing-cards',
  templateUrl: './briefing-cards.component.html',
  styleUrls: ['./briefing-cards.component.css'],
})
export class BriefingCardsComponent implements OnInit {
  constructor() {}
  @Input() currentMonthSpending: MonthSpending;
  @Input() lastMonthSpending: MonthSpending;
  ngOnInit(): void {}
}
