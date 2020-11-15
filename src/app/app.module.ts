import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OverlayContainer } from "@angular/cdk/overlay";
import { CustomOverlayContainer } from "./theme/utils/custom-overlay-container";
import { AgmCoreModule, GoogleMapsAPIWrapper, AgmMarker } from "@agm/core";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { SharedModule } from "./shared/shared.module";
import { PipesModule } from "./theme/pipes/pipes.module";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AppSettings } from "./app.settings";
import { LoginComponent } from "./login/login.component";
import { SidenavComponent } from "./theme/components/sidenav/sidenav.component";
import { VerticalMenuComponent } from "./theme/components/menu/vertical-menu/vertical-menu.component";
import { HorizontalMenuComponent } from "./theme/components/menu/horizontal-menu/horizontal-menu.component";
import { BreadcrumbComponent } from "./theme/components/breadcrumb/breadcrumb.component";
import { FlagsMenuComponent } from "./theme/components/flags-menu/flags-menu.component";
import { FullScreenComponent } from "./theme/components/fullscreen/fullscreen.component";
import { ApplicationsComponent } from "./theme/components/applications/applications.component";
import { MessagesComponent } from "./theme/components/messages/messages.component";
import { UserMenuComponent } from "./theme/components/user-menu/user-menu.component";
import { ModalModule } from "ngx-bootstrap";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { PasswordDialogComponent } from "./theme/components/user-menu/password-dialog/password-dialog.component";
import { ProfileDialogComponent } from "./theme/components/user-menu/profile-dialog/profile-dialog.component";
import { MglTimelineModule } from "angular-mgl-timeline";
import { ConfirmDialogComponent } from "./shared/confirm-dialog/confirm-dialog.component";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { ToasterModule } from "angular2-toaster";
import { DragDropModule } from "primeng/dragdrop";
import { TableModule } from "primeng/table";
import { TabViewModule } from "primeng/tabview";
import { TooltipModule } from "ngx-tooltip";
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap';
import { AddNoteDialogComponent } from "./shared/add-note-dialog/add-note-dialog.component";
import { DataTableModule } from "angular2-datatable";
import { UniversalFilterComponent } from "./layout/universal-filter/universal-filter.component";
import { AlertService } from "./shared/services/alert.service";
import { DndModule } from 'ngx-drag-drop';
import {
  AgmJsMarkerClustererModule,
  ClusterManager
} from "@agm/js-marker-clusterer";
// import { MessageCenterComponent } from './bw/message-center/message-center.component';
import { HelpDialogComponent } from "./shared/help-dialog/help-dialog.component";
import { XHRBackend, HttpModule } from "@angular/http";
import { AppInterceptorService } from "./shared/services/app-interceptor.service";
import { LoginService } from "./login/login.service";
import { LoaderService } from "./shared/services/loader.service";


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true,
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TooltipModule,
    ReactiveFormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyD1rdFVTvmZLUDZI4F5FCGY-XC0_VvQZXg",
    // }),
    PerfectScrollbarModule,
    ToasterModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    SharedModule,
    PipesModule,
    TabViewModule,
    routing,
    HttpModule,
    ModalModule.forRoot(),
    TourNgxBootstrapModule.forRoot(),
    HttpClientModule,
    MglTimelineModule,
    DragDropModule,
    HttpClientJsonpModule,
    TableModule,
    DndModule,
    AgmJsMarkerClustererModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: "danger", // set defaults here
    }),
    DataTableModule,
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    SidenavComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    FlagsMenuComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent,
    UniversalFilterComponent,
    
  ],
  entryComponents: [
    VerticalMenuComponent,
    PasswordDialogComponent,
    ConfirmDialogComponent,
    ProfileDialogComponent,
    AddNoteDialogComponent,
    HelpDialogComponent,
    MessagesComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppSettings,
    LoginService,
    LoaderService,
    AlertService,
    GoogleMapsAPIWrapper,AlertService,ClusterManager,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    { provide: XHRBackend, useClass: AppInterceptorService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
