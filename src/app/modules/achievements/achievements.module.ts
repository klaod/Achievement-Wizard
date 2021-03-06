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
import {RouterModule} from '@angular/router';
import {achievementRoutes} from './achievements.routes';
import {AchievementDetailsComponent} from './achievement-list/achievement-item/achievement-details/achievement-details.component';
import {AchievementsSearchResultsComponent} from './achievements-search-results/achievements-search-results.component';
import {AchievementsSearchFormComponent} from './achievements-search-form/achievements-search-form.component';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';

@NgModule({
  imports: [
    RouterModule.forChild(achievementRoutes),
    CommonModule,
    BusyModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    AchievementsComponent,
    CategoryGroupComponent,
    CategoryGroupItemComponent,
    CategoryComponent,
    CategoryItemComponent,
    AchievementListComponent,
    AchievementItemComponent,
    AchievementStatsComponent,
    AchievementDetailsComponent,
    AchievementsSearchFormComponent,
    AchievementsSearchResultsComponent
  ],
  exports: [
    AchievementsComponent,
    RouterModule
  ],
  providers: []
})
export class AchievementsModule { }
