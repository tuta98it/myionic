"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4843],{4843:(C,u,e)=>{e.r(u),e.d(u,{PartnerManagementPageModule:()=>f});var m=e(4755),c=e(5030),o=e(7002),s=e(2852),d=e(5861),t=e(3020);let g=(()=>{class n{constructor(i){this.modalController=i,this.title="Ti\xeau \u0111\u1ec1",this.message="N\u1ed9i dung"}dismiss(i){this.modalController.dismiss(i)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(o.IN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-confirm-dialog"]],inputs:{title:"title",message:"message"},decls:18,vars:2,consts:[[1,"content"],["slot","start"],[3,"click"],["slot","end"]],template:function(i,a){1&i&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.qZA()()(),t.TgZ(4,"ion-content")(5,"div",0)(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"ion-footer")(9,"ion-toolbar")(10,"ion-buttons",1)(11,"ion-button",2),t.NdJ("click",function(){return a.dismiss(!1)}),t._uU(12,"Cancel"),t.qZA(),t.TgZ(13,"ion-button",2),t.NdJ("click",function(){return a.dismiss(!0)}),t._uU(14,"OK"),t.qZA()(),t.TgZ(15,"ion-buttons",3)(16,"ion-button",2),t.NdJ("click",function(){return a.dismiss(!0)}),t._uU(17,"OK"),t.qZA()()()()()),2&i&&(t.xp6(3),t.Oqu(a.title),t.xp6(4),t.Oqu(a.message))},dependencies:[o.YG,o.Sm,o.W2,o.fr,o.Gu,o.wd,o.sr],styles:[".content[_ngcontent-%COMP%]{padding:16px}p[_ngcontent-%COMP%]{margin-bottom:16px}"]}),n})();const p=[{path:"",component:(()=>{class n{constructor(i,a,l){this.router=i,this.modalController=a,this.alertController=l,this.titleApp="X\xe9t nghi\u1ec7m",this.listAccounts=[{username:"",password:"",name:"",code:"",phone:"",address:"",socialNetwork:{facebook:"",zalo:"",telegram:"",twitter:""}},{username:"",password:"",name:"",code:"",phone:"",address:"",socialNetwork:{facebook:"",zalo:"",telegram:"",twitter:""}},{username:"",password:"",name:"",code:"",phone:"",address:"",socialNetwork:{facebook:"",zalo:"",telegram:"",twitter:""}}],this.alertConfirmButtons=[{text:"Hu\u1ef7",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:()=>{}}]}ngOnInit(){}onClickTab(){}logoutAccount(){this.router.navigate(["/login"])}setResult(i){let a=i.detail.role;(a="OK")&&this.logoutAccount()}openDialog(){var i=this;return(0,d.Z)(function*(){const a=yield i.modalController.create({component:g,componentProps:{title:"X\xe1c nh\u1eadn",message:"\u0110\u0103ng xu\u1ea5t kh\u1ecfi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n?"}});return a.onDidDismiss().then(l=>{l.data?console.log("User clicked OK"):console.log("User clicked Cancel")}),yield a.present()})()}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s.F0),t.Y36(o.IN),t.Y36(o.Br))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-partner-management"]],decls:46,vars:2,consts:[["contentId","main-content"],[1,"title-menu-partner"],["alt","Avatar teee","src","https://ionicframework.com/docs/img/demos/avatar.svg"],[1,"ion-padding"],["slot","start","name","call-outline"],["slot","start","name","information-outline"],["slot","start","name","ellipsis-horizontal-outline"],[1,"logout-button-wrapper"],["size","medium","color","light","id","comfirm-alert"],["slot","end","name","log-out-outline"],["trigger","comfirm-alert","header","\u0110\u0103ng xu\u1ea5t kh\u1ecfi t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n?",3,"buttons","didDismiss"],["id","main-content",1,"ion-page"],["color","primary",1,"toolbar-app"],["slot","start"],["slot","bottom"],["tab","laboratory",3,"click"],["name","clipboard-outline"],["tab","services",3,"click"],["name","prism-outline"],["tab","notifications",3,"click"],["name","notifications-outline"]],template:function(i,a){1&i&&(t.TgZ(0,"ion-tabs")(1,"ion-menu",0)(2,"ion-header")(3,"ion-toolbar")(4,"div",1)(5,"ion-chip")(6,"ion-avatar"),t._UZ(7,"img",2),t.qZA(),t.TgZ(8,"ion-label"),t._uU(9,"Chip Avatar"),t.qZA()()()()(),t.TgZ(10,"ion-content",3)(11,"ion-list")(12,"ion-item"),t._UZ(13,"ion-icon",4),t.TgZ(14,"ion-label"),t._uU(15,"Li\xean h\u1ec7"),t.qZA()(),t.TgZ(16,"ion-item"),t._UZ(17,"ion-icon",5),t.TgZ(18,"ion-label"),t._uU(19,"Th\xf4ng tin d\u1ecbch v\u1ee5"),t.qZA()(),t.TgZ(20,"ion-item"),t._UZ(21,"ion-icon",6),t.TgZ(22,"ion-label"),t._uU(23,"About"),t.qZA()()(),t.TgZ(24,"div",7)(25,"ion-button",8),t._uU(26,"\u0110\u0103ng xu\u1ea5t"),t._UZ(27,"ion-icon",9),t.qZA(),t.TgZ(28,"ion-alert",10),t.NdJ("didDismiss",function(Z){return a.setResult(Z)}),t.qZA()()()(),t.TgZ(29,"ion-header"),t._UZ(30,"div",11),t.TgZ(31,"ion-toolbar",12)(32,"ion-buttons",13),t._UZ(33,"ion-menu-button"),t.qZA(),t.TgZ(34,"ion-title"),t._uU(35),t.qZA()()(),t.TgZ(36,"ion-tab-bar",14)(37,"ion-tab-button",15),t.NdJ("click",function(){return a.titleApp="X\xe9t nghi\u1ec7m"}),t._UZ(38,"ion-icon",16),t._uU(39," X\xe9t nghi\u1ec7m "),t.qZA(),t.TgZ(40,"ion-tab-button",17),t.NdJ("click",function(){return a.titleApp="Th\xf4ng tin d\u1ecbch v\u1ee5"}),t._UZ(41,"ion-icon",18),t._uU(42," D\u1ecbch v\u1ee5 "),t.qZA(),t.TgZ(43,"ion-tab-button",19),t.NdJ("click",function(){return a.titleApp="Th\xf4ng b\xe1o"}),t._UZ(44,"ion-icon",20),t._uU(45," Th\xf4ng b\xe1o "),t.qZA()()()),2&i&&(t.xp6(28),t.Q6J("buttons",a.alertConfirmButtons),t.xp6(7),t.Oqu(a.titleApp))},dependencies:[o.Ge,o.BJ,o.YG,o.Sm,o.hM,o.W2,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.z0,o.fG,o.yq,o.ZU,o.wd,o.sr,o.UN],styles:[".title-menu-partner[_ngcontent-%COMP%]{width:auto;display:flex;justify-content:center}.logout-button-wrapper[_ngcontent-%COMP%]{position:fixed;bottom:20px;left:50%;transform:translate(-50%);text-align:center;width:100%}"]}),n})(),children:[{path:"",pathMatch:"full",redirectTo:"laboratory"},{path:"partnership",loadChildren:()=>e.e(2270).then(e.bind(e,2270)).then(n=>n.PartnershipModule)},{path:"laboratory",loadChildren:()=>Promise.all([e.e(8592),e.e(2594)]).then(e.bind(e,2594)).then(n=>n.LaboratoryModule)},{path:"services",loadChildren:()=>Promise.all([e.e(8592),e.e(5276)]).then(e.bind(e,5276)).then(n=>n.ServicesModule)},{path:"notifications",loadChildren:()=>e.e(1366).then(e.bind(e,1366)).then(n=>n.NotificationsModule)},{path:"request",loadChildren:()=>e.e(89).then(e.bind(e,89)).then(n=>n.RequestModule)}]}];let h=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(p),s.Bz]}),n})(),f=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,c.u5,h,o.Pc.forRoot({mode:"ios"})]}),n})()}}]);