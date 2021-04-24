import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  

  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
 
  
  {
  
    path: 'manage-business',
    loadChildren: () => import('./manage-business/manage-business.module').then( m => m.ManageBusinessPageModule)
  },
 
  {
  path: 'pvt',
  loadChildren: () => import('./pvt/pvt.module').then( m => m.PvtPageModule)
},
  {
    path: 'one-prsn',
    loadChildren: () => import('./one-prsn/one-prsn.module').then( m => m.OnePrsnPageModule)
  },
  {
    path: 'lmtd',
    loadChildren: () => import('./lmtd/lmtd.module').then( m => m.LmtdPageModule)
  },
 
  {
    path: 'gst',
    loadChildren: () => import('./gst/gst.module').then( m => m.GstPageModule)
  },
  {
    path: 'section',
    loadChildren: () => import('./section/section.module').then( m => m.SectionPageModule)
  },
  {
    path: 'grow-business',
    loadChildren: () => import('./grow-business/grow-business.module').then( m => m.GrowBusinessPageModule)
  },
  {
    path: 'iso',
    loadChildren: () => import('./iso/iso.module').then( m => m.IsoPageModule)
  },
  
  {
  
    path: 'msme',
    loadChildren: () => import('./msme/msme.module').then( m => m.MsmePageModule)
  },
  {
    path: 'trade-reg',
    loadChildren: () => import('./trade-reg/trade-reg.module').then( m => m.TradeRegPageModule)
  },
  {
    path: 'reply-trade',
  
    loadChildren: () => import('./reply-trade/reply-trade.module').then( m => m.ReplyTradePageModule)
  },
  {
  
    path: 'renew-trade',
    loadChildren: () => import('./renew-trade/renew-trade.module').then( m => m.RenewTradePageModule)
  },
  {
    path: 'license-trade',
    loadChildren: () => import('./license-trade/license-trade.module').then( m => m.LicenseTradePageModule)
  },
  {
    path: 'sell-trade',
    loadChildren: () => import('./sell-trade/sell-trade.module').then( m => m.SellTradePageModule)
  },
  
  
  
  
  {
    path: 'cpyrght-reg',
    loadChildren: () => import('./cpyrght-reg/cpyrght-reg.module').then( m => m.CpyrghtRegPageModule)
  },
  {
    path: 'rply-cpyrght',
    loadChildren: () => import('./rply-cpyrght/rply-cpyrght.module').then( m => m.RplyCpyrghtPageModule)
  },
  {
    path: 'prtct-business',
    loadChildren: () => import('./prtct-business/prtct-business.module').then( m => m.PrtctBusinessPageModule)
  },
  {
    path: 'roc-return',
    loadChildren: () => import('./roc-return/roc-return.module').then( m => m.RocReturnPageModule)
  },
  {
    path: 'roc-opc',
    loadChildren: () => import('./roc-opc/roc-opc.module').then( m => m.RocOpcPageModule)
  },
  {
    path: 'roc-llp',
    loadChildren: () => import('./roc-llp/roc-llp.module').then( m => m.RocLlpPageModule)
  },
  {
    path: 'appntmnt',
    loadChildren: () => import('./appntmnt/appntmnt.module').then( m => m.AppntmntPageModule)
  },
  {
    path: 'resgntn',
    loadChildren: () => import('./resgntn/resgntn.module').then( m => m.ResgntnPageModule)
  },
  {
    path: 'inc-capital',
    loadChildren: () => import('./inc-capital/inc-capital.module').then( m => m.IncCapitalPageModule)
  },
  {
    path: 'closure',
    loadChildren: () => import('./closure/closure.module').then( m => m.ClosurePageModule)
  },
  {
    path: 'c-opc',
    loadChildren: () => import('./c-opc/c-opc.module').then( m => m.COpcPageModule)
  },
  {
    path: 'c-llp',
    loadChildren: () => import('./c-llp/c-llp.module').then( m => m.CLlpPageModule)
  },
  {
    path: 'free-agree',
    loadChildren: () => import('./free-agree/free-agree.module').then( m => m.FreeAgreePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'publc-lmtd',
    loadChildren: () => import('./publc-lmtd/publc-lmtd.module').then( m => m.PublcLmtdPageModule)
  },
  {
    path: 'chgaddr',
    loadChildren: () => import('./chgaddr/chgaddr.module').then( m => m.ChgaddrPageModule)
  },
  
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'adminlogin',
    loadChildren: () => import('./adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'getquote',
    loadChildren: () => import('./getquote/getquote.module').then( m => m.GetquotePageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'getprotect',
    loadChildren: () => import('./getprotect/getprotect.module').then( m => m.GetprotectPageModule)
  },
  {
    path: 'getmanage',
    loadChildren: () => import('./getmanage/getmanage.module').then( m => m.GetmanagePageModule)
  },
  {
    path: 'getgrow',
    loadChildren: () => import('./getgrow/getgrow.module').then( m => m.GetgrowPageModule)
  },
  
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./UserProfile/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'profile/edit',
    loadChildren: () => import('./UserProfile/editprofile/editprofile.module').then( m => m.EditprofilePageModule),
    canActivate:[AuthGuard]
  },
  
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
