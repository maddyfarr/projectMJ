import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProjectMjSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ProjectMjSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class ProjectMjHomeModule {}
