import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AchievementStatsComponent} from './achievement-stats/achievement-stats.component';
import {AchievementsComponent} from './achievements.component';
import {CategoryGroupComponent} from './category-group/category-group.component';
import {AchievementListComponent} from './achievement-list/achievement-list.component';
import {CategoryComponent} from './category-group/category-group-item/category/category.component';
import {CategoryItemComponent} from './category-group/category-group-item/category/category-item/category-item.component';
import {AchievementItemComponent} from './achievement-list/achievement-item/achievement-item.component';
import {CategoryGroupItemComponent} from './category-group/category-group-item/category-group-item.component';
import {BusyModule} from 'angular2-busy';
import {DataService} from '../../shared/data.service';

@NgModule({
  imports: [
    CommonModule,
    BusyModule
  ],
  declarations: [
    AchievementsComponent,
    CategoryGroupComponent,
    CategoryGroupItemComponent,
    CategoryComponent,
    CategoryItemComponent,
    AchievementListComponent,
    AchievementItemComponent,
    AchievementStatsComponent
  ],
  exports: [
    AchievementsComponent
  ],
  providers: [
    DataService
  ]
})
export class AchievementsModule { }
