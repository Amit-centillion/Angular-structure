import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { customerComponent }       from '../../pages/customer/customer.component';
import { UserComponent }            from '../../pages/user/user.component';
import { ProviderComponent }           from '../../pages/provider/provider.component';
import { Logincomponent }           from '../../pages/login/login.component';
import { leadComponent }      from '../../pages/leads/lead.component';
import { customerSummaryComponent }            from '../../pages/customer-summary/customer-summary.component';
// import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
// import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgxPaginationModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    customerComponent,
    UserComponent,
    ProviderComponent,
    Logincomponent,
    customerSummaryComponent,
    leadComponent,
    // UpgradeComponent,
    // NotificationsComponent,
  ]
})

export class AdminLayoutModule {}
