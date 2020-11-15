import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "owner",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "analytics", pathMatch: "full" },
             
      {
        path: "analytics",
        loadChildren: "./owner/analytics/analytics.module#AnalyticsModule",
        data: { breadcrumb: "Analytics" },
      },   
      {
        path: "patients",
        loadChildren: "./owner/patients/patients.module#PatientsModule",
        data: { breadcrumb: "Patients" },
      },   
      {
        path: "pricing",
        loadChildren: "./owner/pricing/pricing.module#PricingModule",
        data: { breadcrumb: "Pricing" },
      },   
      {
        path: "subscription",
        loadChildren: "./owner/subscription/subscription.module#SubscriptionModule",
        data: { breadcrumb: "Subscriptions" },
      },        
      {
        path: "admin",
        loadChildren: "./owner/admin/admin.module#AdminModule",
        data: { breadcrumb: "Admin" },
      }, 
      {
        path: "more",
        loadChildren: "./owner/more/more.module#MoreModule",
        data: { breadcrumb: "More" },
      },       
    ],
  },
  {
    path: "admin",
    component: LayoutComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
             
      {
        path: "dashboard",
        loadChildren: "./hospital-admin/dashboard/dashboard.module#DashboardModule",
        data: { breadcrumb: "Analytics" },
      },   
      {
        path: "manage",
        loadChildren: "./hospital-admin/manage/manage.module#ManageModule",
        data: { breadcrumb: "Manage" },
      },   
     
      {
        path: "admin",
        loadChildren: "./hospital-admin/admin/admin.module#AdminModule",
        data: { breadcrumb: "Admin" },
      },      
    ],
  },
  { path: '', loadChildren:'./login/login.module#LoginModule', data: { breadcrumb: 'Login' } },
  {
    path: "**",
    component: NotFoundComponent,
    data: { breadcrumb: "Not found" },
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
  // useHash: true
});
