import { Routes } from '@angular/router';

import { customerComponent } from '../../pages/customer/customer.component';
import { UserComponent } from '../../pages/user/user.component';
import { ProviderComponent } from '../../pages/provider/provider.component';
import { Logincomponent } from '../../pages/login/login.component';
// import { TypographyComponent } from '../../pages/typography/typography.component';
// import { MapsComponent } from '../../pages/maps/maps.component';
// import { NotificationsComponent } from '../../pages/notifications/notifications.component';
// import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'customer',      component: customerComponent },
    { path: 'provider',          component: ProviderComponent },
    { path: 'user',           component: UserComponent },
    { path: 'login',          component: Logincomponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
