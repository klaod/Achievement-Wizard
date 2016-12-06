import {Component, OnInit, Input} from '@angular/core';
import {Category, AccountAchievement} from "../../../shared/achievements.model";

@Component({
  selector: 'app-achievement-list',
  templateUrl: './achievement-list.component.html',
  styleUrls: ['./achievement-list.component.scss']
})
export class AchievementListComponent implements OnInit {

  @Input() currentlyOpenedCategory: Category;
  @Input() accountAchievements: AccountAchievement[];

  constructor() { }

  ngOnInit() {
  }

}