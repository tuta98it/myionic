"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4987],{4987:(M,p,r)=>{r.r(p),r.d(p,{LoginPageModule:()=>T});var m=r(4755),i=r(7002),u=r(5030),c=r(2852),h=r(5861),d=r(6122),f=r(9077),n=r(3020),P=r(6748);function y(o,l){if(1&o&&(n.TgZ(0,"span",18),n._uU(1),n.qZA()),2&o){const t=n.oxw();n.xp6(1),n.hij("*",t.accountLogin.error,"")}}function w(o,l){1&o&&(n.TgZ(0,"span",19),n._uU(1,"*T\xean \u0111\u0103ng nh\u1eadp kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"),n.qZA())}function _(o,l){1&o&&(n.TgZ(0,"span",19),n._uU(1,"*M\u1eadt kh\u1ea9u kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng"),n.qZA())}const L=[{path:"",component:(()=>{class o{constructor(t,e,s,a){this.router=t,this.modalController=e,this.navCtrl=s,this.dataService=a,this.accountLogin={username:"",password:"",error:""},this.isEmptyUsername=!1,this.isEmptyPassword=!1,this.showPassword=!1,this.listAccounts=[{id:1,username:"linhtl",password:"9167",avatar:"https://i.pravatar.cc/300?u=l",name:"L\xfd Thu\u1ef3 Linh",code:"",phone:"0971195594",address:"S\u1ed1 2 ng\xe1ch 62 ng\xf5 20 \u0111\u01b0\u1eddng M\u1ef9 \u0110\xecnh, Nam T\u1eeb Li\xeam, H\xe0 N\u1ed9i",socialNetwork:{facebook:"",zalo:"",telegram:"",twitter:""}},{id:2,username:"tuta",password:"9178",avatar:"https://i.pravatar.cc/300?u=b",name:"Tr\u1ea7n Anh T\xfa",code:"",phone:"0388493355",address:"30/8/14, Phan \u0110\xecnh Gi\xf3t, La Kh\xea, H\xe0 \u0110\xf4ng, H\xe0 N\u1ed9i",socialNetwork:{facebook:"",zalo:"",telegram:"",twitter:""}}]}isEmpty(t){return(new d.i).transform(t)}onKeyUpInputUsername(){this.accountLogin.error="",this.isEmptyUsername=this.isEmpty(this.accountLogin.username)}onKeyUpInputPassword(){this.accountLogin.error="",this.isEmptyPassword=this.isEmpty(this.accountLogin.password)}togglePassword(){this.showPassword=!this.showPassword}forgotPassword(){this.openDialog()}openDialog(){var t=this;return(0,h.Z)(function*(){const e=yield t.modalController.create({component:f.$,componentProps:{title:"B\u1ea1n qu\xean m\u1eadt kh\u1ea9u?",message:"Ui zoi \u01a1i b\u1ea1n \u01a1i, t\xf4i ch\u1ecbu!, b\u1ea1n th\u1ee9 c\u1ed1 nh\u1edb l\u1ea1i coi :). Hi\u1ec7n t\u1ea1i h\u1ec7 th\xf4ng \u0111ang bu\u1ed3n nh\u1ee7  ^zzz^zzz"}});return e.onDidDismiss().then(s=>{s.data?console.log("User clicked OK"):console.log("User clicked Cancel")}),yield e.present()})()}loginAccount(){let t=this.accountLogin,e=this.listAccounts;if(this.isEmpty(t.username)&&(this.isEmptyUsername=!0),this.isEmpty(t.password)&&(this.isEmptyPassword=!0),!this.isEmptyUsername&&!this.isEmptyPassword){let s=e.filter(a=>a.username==t.username);if(this.isEmpty(s))this.accountLogin.error="T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng h\u1ee3p l\u1ec7";else{let a=s.find(g=>g.password===t.password);this.isEmpty(a)?this.accountLogin.error="T\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng h\u1ee3p l\u1ec7":(this.dataService.setData(a),this.router.navigate(["/partner-management"]))}}}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(c.F0),n.Y36(i.IN),n.Y36(i.SH),n.Y36(P.D))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:39,vars:11,consts:[[3,"translucent"],["color","primary",1,".toolbar-app"],[1,"title-login"],["class","m-error","style","top: 0; padding: 0.25rem;",4,"ngIf"],[2,"margin-top","0.6rem"],["position","floating"],["name","person","slot","start"],[2,"color","red"],["type","text","placeholder","Username",3,"ngModel","ngModelChange","keyup"],["class","m-error",4,"ngIf"],[2,"margin-top","0.5rem"],["name","lock-closed","slot","start"],[1,"password-login"],["placeholder","Password",3,"type","ngModel","ngModelChange","keyup","keyup.enter"],["slot","end","size","small",1,"icon-password-login",3,"name","color","click"],["fill","clear",3,"click"],["expand","full",3,"click"],["slot","end","name","log-in-outline"],[1,"m-error",2,"top","0","padding","0.25rem"],[1,"m-error"]],template:function(t,e){1&t&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),n._uU(3," \u0110\u0103ng nh\u1eadp "),n.qZA()()(),n.TgZ(4,"ion-content")(5,"ion-grid"),n.YNc(6,y,2,1,"span",3),n.ALo(7,"isEmpty"),n.TgZ(8,"ion-row",4)(9,"ion-col")(10,"ion-item")(11,"ion-label",5),n._UZ(12,"ion-icon",6),n._uU(13," T\xean \u0111\u0103ng nh\u1eadp "),n.TgZ(14,"span",7),n._uU(15,"*"),n.qZA()(),n.TgZ(16,"ion-input",8),n.NdJ("ngModelChange",function(a){return e.accountLogin.username=a})("keyup",function(){return e.onKeyUpInputUsername()}),n.qZA()(),n.YNc(17,w,2,0,"span",9),n.qZA()(),n.TgZ(18,"ion-row",10)(19,"ion-col")(20,"ion-item")(21,"ion-label",5),n._UZ(22,"ion-icon",11),n._uU(23," M\u1eadt kh\u1ea9u "),n.TgZ(24,"span",7),n._uU(25,"*"),n.qZA()(),n.TgZ(26,"div",12)(27,"ion-input",13),n.NdJ("ngModelChange",function(a){return e.accountLogin.password=a})("keyup",function(){return e.onKeyUpInputPassword()})("keyup.enter",function(){return e.loginAccount()}),n.qZA(),n.TgZ(28,"ion-icon",14),n.NdJ("click",function(){return e.togglePassword()}),n.qZA()()(),n.YNc(29,_,2,0,"span",9),n.qZA()(),n.TgZ(30,"ion-row")(31,"ion-col")(32,"ion-button",15),n.NdJ("click",function(){return e.forgotPassword()}),n._uU(33," Qu\xean m\u1eadt kh\u1ea9u? "),n.qZA()()(),n.TgZ(34,"ion-row")(35,"ion-col")(36,"ion-button",16),n.NdJ("click",function(){return e.loginAccount()}),n._uU(37,"\u0110\u0103ng nh\u1eadp "),n._UZ(38,"ion-icon",17),n.qZA()()()()()),2&t&&(n.Q6J("translucent",!0),n.xp6(6),n.Q6J("ngIf",!n.lcZ(7,9,e.accountLogin.error)),n.xp6(10),n.Q6J("ngModel",e.accountLogin.username),n.xp6(1),n.Q6J("ngIf",e.isEmptyUsername),n.xp6(10),n.s9C("type",e.showPassword?"text":"password"),n.Q6J("ngModel",e.accountLogin.password),n.xp6(1),n.s9C("name",e.showPassword?"eye-off":"eye"),n.Q6J("color",e.showPassword?"primary":"medium"),n.xp6(1),n.Q6J("ngIf",e.isEmptyPassword))},dependencies:[m.O5,u.JJ,u.On,i.YG,i.wI,i.W2,i.jY,i.Gu,i.gu,i.pK,i.Ie,i.Q$,i.Nd,i.wd,i.sr,i.j9,d.i],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.toolbar-login[_ngcontent-%COMP%]{--min-height: 5rem;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.title-login[_ngcontent-%COMP%]{color:#fff}.password-login[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between}ion-icon.icon-password-login[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:flex-end}.show-password-icon[_ngcontent-%COMP%]{--ion-color-primary: red;--ion-color-secondary: blue}.m-error[_ngcontent-%COMP%]{position:absolute;margin-left:.8rem;bottom:-.9rem;min-height:18px;font-size:small;color:var(--ion-color-danger)}']}),o})()}];let E=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.Bz.forChild(L),c.Bz]}),o})();var A=r(3913);let T=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[m.ez,u.u5,i.Pc,A.m,E,c.Bz]}),o})()}}]);