import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'profile-npo/:id',
    loadChildren: () => import('./profile-npo/profile-npo.module').then( m => m.ProfileNPOPageModule)
  },
  {
    path: 'signup-npo',
    loadChildren: () => import('./signup-npo/signup-npo.module').then( m => m.SignupNpoPageModule)
  },
  {
    path: 'finish-signup-npo/:id',
    loadChildren: () => import('./finish-signup-npo/finish-signup-npo.module').then( m => m.FinishSignupNpoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'choose-donate',
    loadChildren: () => import('./choose-donate/choose-donate.module').then( m => m.ChooseDonatePageModule)
  },
  {
    path: 'verifying/:id',
    loadChildren: () => import('./verifying/verifying.module').then( m => m.VerifyingPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'verify/:id',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'make-payment/:id',
    loadChildren: () => import('./make-payment/make-payment.module').then( m => m.MakePaymentPageModule)
  },
  {
    path: 'create-acc',
    loadChildren: () => import('./create-acc/create-acc.module').then( m => m.CreateAccPageModule)
  },
  {
    path: 'donate-private',
    loadChildren: () => import('./donate-private/donate-private.module').then( m => m.DonatePrivatePageModule)
  },
  {
    path: 'signup-volunteer',
    loadChildren: () => import('./signup-volunteer/signup-volunteer.module').then( m => m.SignupVolunteerPageModule)
  },
  {
    path: 'signup-donor',
    loadChildren: () => import('./signup-donor/signup-donor.module').then( m => m.SignupDonorPageModule)
  },
  {
    path: 'approved/:id',
    loadChildren: () => import('./approved/approved.module').then( m => m.ApprovedPageModule)
  },
  {
    path: 'dissabled',
    loadChildren: () => import('./dissabled/dissabled.module').then( m => m.DissabledPageModule)
  },
  {
    path: 'login-volunteer',
    loadChildren: () => import('./login-volunteer/login-volunteer.module').then( m => m.LoginVolunteerPageModule)
  },
  {
    path: 'login-donor',
    loadChildren: () => import('./login-donor/login-donor.module').then( m => m.LoginDonorPageModule)
  },
  {
    path: 'finish-signup/:id',
    loadChildren: () => import('./finish-signup/finish-signup.module').then( m => m.FinishSignupPageModule)
  },
  {
    path: 'details-npo/:id',
    loadChildren: () => import('./details-npo/details-npo.module').then( m => m.DetailsNpoPageModule)
  },
  {
    path: 'edit-profile-npo/:id',
    loadChildren: () => import('./edit-profile-npo/edit-profile-npo.module').then( m => m.EditProfileNpoPageModule)
  },
  {
    path: 'add-mission/:id',
    loadChildren: () => import('./add-mission/add-mission.module').then( m => m.AddMissionPageModule)
  },
  {
    path: 'add-activity/:id',
    loadChildren: () => import('./add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  {
    path: 'edit-activity/:id/:actId',
    loadChildren: () => import('./edit-activity/edit-activity.module').then( m => m.EditActivityPageModule)
  },
  {
    path: 'applications/:id',
    loadChildren: () => import('./applications/applications.module').then( m => m.ApplicationsPageModule)
  },
  {
    path: 'profile-volunteer/:id',
    loadChildren: () => import('./profile-volunteer/profile-volunteer.module').then( m => m.ProfileVolunteerPageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'bio-vol/:id',
    loadChildren: () => import('./bio-vol/bio-vol.module').then( m => m.BioVolPageModule)
  },
  {
    path: 'details-vol/:id',
    loadChildren: () => import('./details-vol/details-vol.module').then( m => m.DetailsVolPageModule)
  },
  {
    path: 'home-npos/:id',
    loadChildren: () => import('./home-npos/home-npos.module').then( m => m.HomeNposPageModule)
  },
  {
    path: 'view-npo-profile/:id/:email',
    loadChildren: () => import('./view-npo-profile/view-npo-profile.module').then( m => m.ViewNpoProfilePageModule)
  },
  {
    path: 'applications-vol/:id',
    loadChildren: () => import('./applications-vol/applications-vol.module').then( m => m.ApplicationsVolPageModule)
  },
  {
    path: 'connections/:id',
    loadChildren: () => import('./connections/connections.module').then( m => m.ConnectionsPageModule)
  },
  {
    path: 'connections-vol/:id',
    loadChildren: () => import('./connections-vol/connections-vol.module').then( m => m.ConnectionsVolPageModule)
  },
  {
    path: 'view-vol-profile/:id/:email',
    loadChildren: () => import('./view-vol-profile/view-vol-profile.module').then( m => m.ViewVolProfilePageModule)
  },
  {
    path: 'history-vol/:id',
    loadChildren: () => import('./history-vol/history-vol.module').then( m => m.HistoryVolPageModule)
  },
  {
    path: 'profile-donor/:id',
    loadChildren: () => import('./profile-donor/profile-donor.module').then( m => m.ProfileDonorPageModule)
  },
  {
    path: 'bio-don/:id',
    loadChildren: () => import('./bio-don/bio-don.module').then( m => m.BioDonPageModule)
  },
  {
    path: 'edit-profile-don/:id',
    loadChildren: () => import('./edit-profile-don/edit-profile-don.module').then( m => m.EditProfileDonPageModule)
  },
  {
    path: 'view-npo-profile-don/:id/:email',
    loadChildren: () => import('./view-npo-profile-don/view-npo-profile-don.module').then( m => m.ViewNpoProfileDonPageModule)
  },
  {
    path: 'home-npos-don/:id',
    loadChildren: () => import('./home-npos-don/home-npos-don.module').then( m => m.HomeNposDonPageModule)
  },
  {
    path: 'donate/:id/:email/:actId',
    loadChildren: () => import('./donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'donation-history/:id',
    loadChildren: () => import('./donation-history/donation-history.module').then( m => m.DonationHistoryPageModule)
  },
  {
    path: 'bank-details/:id',
    loadChildren: () => import('./bank-details/bank-details.module').then( m => m.BankDetailsPageModule)
  },
  {
    path: 'view-bank-details/:id/:email',
    loadChildren: () => import('./view-bank-details/view-bank-details.module').then( m => m.ViewBankDetailsPageModule)
  },
  {
    path: 'donor-history/:id',
    loadChildren: () => import('./donor-history/donor-history.module').then( m => m.DonorHistoryPageModule)
  },
  {
    path: 'donations-admin/:id',
    loadChildren: () => import('./donations-admin/donations-admin.module').then( m => m.DonationsAdminPageModule)
  },
  {
    path: 'add-funding-need/:id',
    loadChildren: () => import('./add-funding-need/add-funding-need.module').then( m => m.AddFundingNeedPageModule)
  },
  {
    path: 'edit-funding/:id/:actId',
    loadChildren: () => import('./edit-funding/edit-funding.module').then( m => m.EditFundingPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'choose-admin/:admin',
    loadChildren: () => import('./choose-admin/choose-admin.module').then( m => m.ChooseAdminPageModule)
  },
  {
    path: 'fast-verify',
    loadChildren: () => import('./fast-verify/fast-verify.module').then( m => m.FastVerifyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
