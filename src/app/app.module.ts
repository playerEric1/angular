import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {PreloadAllModules, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CoreModule } from './Core/core.module';
import { SharedModule } from './Shared/shared.module';
import {FooterComponent} from "./Core/Layout/footer.component";
import {HeaderComponent} from "./Core/Layout/header.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {OrdersComponent} from "./Public/orders.component";
import {ProductListComponent} from "./Public/product-list.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent},
      {path: "Orders", component: OrdersComponent },
      {path: 'Account', loadChildren: () => import('./Account/account.module').then(m => m.AccountModule)}
    ],
      { preloadingStrategy: PreloadAllModules }),
    CoreModule,
    SharedModule,
    FooterComponent,
    HeaderComponent,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
