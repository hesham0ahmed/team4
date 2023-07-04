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
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { HomeComponent } from './home/home.component';
import { MembershipFormComponent } from './membership-form/membership-form.component';
import { RenewDataComponent } from './renew-data/renew-data.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent
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
  }, {
    path: "about", component: AboutComponent
  }, {
    path: "career", component: CareerComponent
  }, {
    path: "alumni-directory", component: AlumniDirectoryComponent
  },
  {
    path: "membershipForm", component: MembershipFormComponent
  },
  {
    path: "renewData", component: RenewDataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
