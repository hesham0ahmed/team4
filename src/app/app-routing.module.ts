import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementsComponent } from './achievements/achievements.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { EventsComponent } from './events/events.component';


const routes: Routes = [

  {
    path: '', component: HeroComponent
  },
  {
    path : "achievements" , component : AchievementsComponent
  },
  {
    path : "events" , component : EventsComponent
  }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
