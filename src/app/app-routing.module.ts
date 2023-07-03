import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { EventsComponent } from './events/events.component';
import { MembershipComponent } from './membership/membership.component';
import { FormsOfMembershipComponent } from './forms-of-membership/forms-of-membership.component';
import { GetActiveComponent } from './get-active/get-active.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { BenefitsComponent } from './benefits/benefits.component';


const routes: Routes = [

  {
    path: '', component: HeroComponent
  },
  {
    path: "achievements", component: AchievementsComponent
  },
  {
    path: "events", component: EventsComponent
  },
  {
    path: "membership", component: MembershipComponent
  },
  {
    path: "forms-of-membership", component: FormsOfMembershipComponent
  },
  {
    path: "get-active", component: GetActiveComponent
  },
  {
    path: "mentoring", component: MentoringComponent
  },
  {
    path: "benefits", component: BenefitsComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
