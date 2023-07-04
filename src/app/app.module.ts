import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from './header/header.component';

import { AchievementsComponent } from './achievements/achievements.component';
import { StoriesComponent } from './stories/stories.component';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { EventsComponent } from './events/events.component';
import { MembershipComponent } from './membership/membership.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FormsOfMembershipComponent } from './forms-of-membership/forms-of-membership.component';
import { GetActiveComponent } from './get-active/get-active.component';
import { MentoringComponent } from './mentoring/mentoring.component';
import { MembershipFormComponent } from './membership-form/membership-form.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { DetailsComponent } from './details/details.component';
<<<<<<< HEAD
import { RenewDataComponent } from './renew-data/renew-data.component';
=======
import { MergeComponent } from './merge/merge.component';
>>>>>>> 25ab16e403bc7a0ebf7163ef656b0e54e463b201

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    HeaderComponent,
    AchievementsComponent,
    StoriesComponent,
    AlumniDirectoryComponent,
    EventsComponent,
    MembershipComponent,
    BenefitsComponent,
    FormsOfMembershipComponent,
    GetActiveComponent,
    MentoringComponent,
    MembershipFormComponent,
    AboutComponent,
    CareerComponent,
    DetailsComponent,
<<<<<<< HEAD
    RenewDataComponent,
=======
    MergeComponent,
>>>>>>> 25ab16e403bc7a0ebf7163ef656b0e54e463b201
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
