_F_installCss(".oYLlHe{display:-moz-box;display:flex;-moz-box-flex:1;flex-grow:1;overflow:clip}sentinel{}");
this._s=this._s||{};(function(_){var window=this;
try{
_.t("G6wU6e");
_.MKE=new _.Ue(_.TZa);
_.u();
}catch(e){_._DumpException(e)}
try{
_.uD=class extends _.m{constructor(a){super(a,2)}Rw(){return _.hg(this,_.sD,1,_.ig())}};_.uD.prototype.ob="U9CFPc";_.h1c=[-2,{},_.F,_.e1c];
}catch(e){_._DumpException(e)}
try{
_.aE=class extends _.m{constructor(a){super(a)}cMb(){return _.Hd(this,_.uD,2)}};_.aE.prototype.ob="X2sNs";
}catch(e){_._DumpException(e)}
try{
_.i1c=function(a,b){return _.Zf(a,1,b)};_.j1c=function(a,b){return _.Eb(a,_.sD,2,b)};_.k1c=function(a){return _.p(a,_.U0c,15)};_.l1c=_.Ob(_.sD);_.m1c=_.Ob(_.tD);new _.oh(_.sD);_.wp.XZxcdf=function(a){return _.xp(_.yp(_.S0c(a)))};new _.oh(_.uD);_.wp.U9CFPc=_.vp;_.jr(_.uD,_.sD,function(a){return a.Rw()});_.vD=_.Fb(444383007,_.Az,_.tD);_.Bz[444383007]=_.g1c;var n1c=new _.oh(_.tD);n1c.Va=new _.oh(_.X0c);n1c.hb=_.vD;_.wp.j0Opre=function(a){return _.xp(_.yp(a.Bf()))};_.jr(_.tD,_.sD,function(a){a=a.getImage();return a!=null?[a]:[]});_.jr(_.tD,_.X0c,function(a){a=a.VBa();return a!=null?[a]:[]});_.wp.IRVcEb=function(a){return _.xp(_.yp(a.Bf()))};
}catch(e){_._DumpException(e)}
try{
_.$bd=function(a){return(0,_.m1c)(a)?a.getId():(0,_.oHc)(a)?a.JU():a.getUniqueId()};
}catch(e){_._DumpException(e)}
try{
_.Zbd=_.w("Wn3aEc",[]);
}catch(e){_._DumpException(e)}
try{
_.t("Wn3aEc");
var acd;acd=function(a){if((0,_.l1c)(a))return a;if((0,_.oHc)(a)){let c,d;a=(c=a.Ca())==null?void 0:(d=c.we())==null?void 0:d.getExtension(_.vD);if(!a)return null}let b;return a.getType()===1?(b=a.getImage())!=null?b:null:null};
_.bcd=class extends _.qh{static Sa(){return{Lf:{snc:_.aE}}}constructor(a){super();this.oa=a.Lf.snc;this.Aa=_.Ae();this.Ba=_.Ae();this.results=new Map;a:{if(this.getData("vnora").Lb()){a=_.bm("WA6vPb",this.Ca());if(a.length===1){a=Number(_.df(a[0],"count"));break a}a=_.bm("LgL7He",this.Ca());if(a.length===1){a=Number(_.df(a[0],"count"));break a}}a=_.ed(this.getData("count"),-1)}this.Da=a}Jba(){if(this.Da<0){const a=this.oa?_.p(this.oa,_.uD,2):null;return a?_.Af(a.Rw()):_.Af([])}return this.Aa.promise}Rw(){return this.Jba().then(a=>
a.map(acd).filter(b=>b!=null))}lEc(){return this.Ba.promise}kee(){return this.lEc().then(a=>{const b=new Map;for(const [c,d]of a){a=c;const e=acd(d);e&&b.set(a,e)}return b})}Pz(a,b){b&&_.$bd(b)&&this.results.set(a,b);if(--this.Da===0){this.Aa.resolve(Array.from(this.results.entries()).sort((c,d)=>_.cGa(c[0],d[0])).map(c=>c[1]));a=new Map;for(const [c,d]of this.results.entries()){b=c;const e=d;e&&a.set(b,e)}this.Ba.resolve(a)}}};_.is(_.Zbd,_.bcd);
_.u();
}catch(e){_._DumpException(e)}
try{
_.OKE=!!(_.Gh[36]>>17&1);
}catch(e){_._DumpException(e)}
try{
_.ZAB=_.w("Um3BXb",[_.Zbd]);
}catch(e){_._DumpException(e)}
try{
_.mRu=!!(_.Gh[25]>>26&1);_.nRu=!!(_.Gh[25]>>28&1);_.oRu=!!(_.Gh[25]>>29&1);
}catch(e){_._DumpException(e)}
try{
_.qz=function(a,b=!1,c){var d=a.getRoot().el();_.Qf(d,"EormBc",new QFc(a,b,c))};_.RFc=function(a,b=!1,c=!1){a=a.getRoot().el();_.Qf(a,"EormBc",{logVisibility:b,Pe:c,RF:void 0})};var QFc=class{constructor(a,b,c){this.logVisibility=b;this.RF=c;this.ufa=a}};
}catch(e){_._DumpException(e)}
try{
_.t("Um3BXb");
var RKE,PKE,SKE;_.QKE=function({construct:a}){PKE.push({construct:a})};RKE=_.Rb(_.tD);PKE=[];
SKE=class extends _.ng{static Sa(){return{model:{e$:_.bcd},Lf:{JTc:_.tD}}}constructor(a){super(a.Oa);this.oa=!this.getData("ni").Lb();this.Cs=a.Lf.JTc;if((this.Ba=this.getData("au").Lb())&&this.Cs){var b=(b=this.getRoot().closest(_.Lo("jsname","uK8Ylc")).el())?_.df(b,"ved"):null;const e=RKE(this.Cs.serialize());if(b&&e&&e.Wj()){var c;(c=e.getImage())!=null&&_.Zf(c,5,b)}this.Cs=e}a.model.e$.Pz(this.getRoot().el(),this.Cs);_.qz(this);let d;(c=(d=this.Cs)==null?void 0:d.getImage())&&this.trigger("cEfxe",
c==null?void 0:c.getUniqueId());this.n1(a)}Y2a(){let a,b;return(b=(a=this.Cs)==null?void 0:a.getImage())!=null?b:null}Ca(a){var b=a.targetElement.parent();a=_.cm("srrRv",this.getRoot().el());b=_.vs(this,b.eq(0),"YsWoif").el();_.$v([new _.ro(b,"show")],{triggerElement:b,userAction:9});_.Tf(b,"BUYwVb");a==null&&_.Im(b,"display","inline-block")}Da(a){const b=a.targetElement;a=a.targetElement.parent();a=_.vs(this,a.eq(0),"YsWoif").el();_.$v([new _.ro(a,"hide")],{triggerElement:b.eq(0).el(),userAction:9});
_.Im(a,"display","none")}Pc(a){if(this.Cs&&this.Cs.getId()){var b,c;(c=(b=a.event).preventDefault)==null||c.call(b);var d,e;(e=(d=a.event).stopPropagation)==null||e.call(d);this.trigger("PdWSXe",{Rx:a.event});var f;(a=(f=this.Cs)==null?void 0:f.getImage())&&this.trigger("Kc2lDe",a==null?void 0:a.getUniqueId())}}Af(){this.notify("BUYwVb")}hf(){this.oa||(_.$v([new _.ro(this.getRoot().el(),"show")]),this.oa=!0)}hidden(){}n1(a){for(const b of PKE)b.construct(this,a)}Aa(){this.notify("BUYwVb");const a=
!_.mRu;this.getRoot().setStyle("display",a?"inline-flex":"unset");this.getRoot().removeAttr("aria-hidden");this.hf()}};SKE.prototype.$wa$bNsLWe=function(){return this.Aa};SKE.prototype.$wa$L6cTce=function(){return this.hidden};SKE.prototype.$wa$TSZdd=function(){return this.hf};SKE.prototype.$wa$AwdEqd=function(){return this.Af};SKE.prototype.$wa$h5M12e=function(){return this.Pc};SKE.prototype.$wa$XEuVS=function(){return this.Da};SKE.prototype.$wa$RrAr1=function(){return this.Ca};
SKE.prototype.$wa$TsqBdc=function(){return this.Y2a};_.ps(_.ZAB,SKE);
var TKE=function(a,b,c,d){const e=a.Ya("tdeeNb");e.isEmpty()||(d=new _.eo(_.ol(d.url)),c=d.get("imgrc")===c&&!d.get("imgdii")||d.get("vhid")===c,c||(a=a.getRoot(),e.hasClass("srrRv")&&(d=e.prev(),b.Oue(a,d))),e.toggleClass("srrRv",c))},VKE=function(a,b){if(!a.closest(g=>UKE.some(h=>g.classList.contains(h))).isEmpty()){var c=a.el().getBoundingClientRect();a=a.parent();a.hasClass("dECn0b")&&(a=a.closest(".T62xob"));var d=a.el().getBoundingClientRect();a=c.top===d.top;var e=Math.abs(d.bottom-c.bottom)<
8,f=Math.abs(d.left-c.left)<8;c=Math.abs(d.right-c.right)<8;b.toggleClass("Xn9Tkc",a&&f);b.toggleClass("oGwWse",a&&c);b.toggleClass("y0jvId",e&&c);b.toggleClass("lM9tvf",e&&f)}},UKE=["DhGrzc","l5X1Ye","o6uAG","OXEsB","T62xob"];
_.QKE({construct(a){const b=_.Bl(a.getData("docid"));b&&(_.OKE?(document.addEventListener("viewerUpdated",f=>{f=f.detail.vhid.replace("e-","")===b;a.Ya("tdeeNb").toggleClass("srrRv",f)}),document.addEventListener("viewerClosed",()=>{a.Ya("tdeeNb").toggleClass("srrRv",!1)})):_.qg(a,{service:{WGc:_.QD,focus:_.MKE}}).then(f=>{const g=f.service.focus;f=f.service.WGc;f.addListener(h=>{TKE(a,g,b,h)});TKE(a,g,b,f.getState())},f=>void _.de(f)));const c=a.getRoot();_.Lf(c.el(),"qWWJ8e",()=>{VKE(c,a.Ya("tdeeNb"))});
VKE(c,a.Ya("tdeeNb"));let d=null;const e=a.Ya("qQjpJ").el();e&&(e.addEventListener("mouseenter",()=>{d===null&&(d=(0,_.xo)(()=>{c.toggleClass("dB3j8",!0);d=null},50))}),e.addEventListener("mouseleave",()=>{d&&((0,_.yo)(d),d=null);c.toggleClass("dB3j8",!1)}))}});
_.u();
}catch(e){_._DumpException(e)}
try{
_.tcd=function(a){return _.Mg(a,1,2)};_.ucd=function(a){return _.Mg(a,2,2)};_.vcd=function(a,b){return _.Mg(a,3,b)};
}catch(e){_._DumpException(e)}
try{
_.gcd=function(a,b){return _.th(a,2,b)};_.hcd=function(a,b){return _.th(a,3,b)};_.icd=function(a,b){return _.Mg(a,1,b)};_.jcd=function(a,b){return _.Zf(a,2,b)};var kcd=[0,_.E,_.D];var lcd=[0,_.E,_.Gk,_.C,_.E];var mcd=class extends _.m{constructor(a){super(a)}};mcd.prototype.ob="IV0Wqf";var ncd=[0,_.E,-1];_.ocd=function(a,b){return _.Zf(a,3,b)};_.pcd=function(a,b){return _.Zf(a,4,b)};_.qcd=function(a,b){return _.Zf(a,13,b)};_.rcd=function(a,b){return _.Zf(a,18,b)};
_.scd=class extends _.m{constructor(a){super(a,37)}eI(){return _.B(this,3)}M4(){return _.Ei(this,3)}UB(){return _.B(this,4)}vwa(){return _.Ei(this,4)}We(){return _.B(this,5)}Rt(){return _.Qj(this,5)}Nu(){return _.B(this,11)}Mcb(){return _.Ei(this,11)}sM(){return _.B(this,13)}NSa(){return _.Ei(this,13)}hdb(){return _.B(this,18)}Pk(){return _.B(this,31)}wub(){return _.p(this,mcd,32)}};_.scd.prototype.ob="onFC6b";_.bE=_.Fb(2003,_.sD,_.scd);_.T0c[2003]=[-37,{},_.E,-4,_.D,1,_.E,1,_.D,_.E,_.D,_.E,4,_.E,lcd,1,kcd,1,_.D,1,_.D,2,_.D,_.E,1,_.E,ncd,1,_.E,_.$o,_.D];
}catch(e){_._DumpException(e)}
try{
var ecd=class extends _.m{constructor(a){super(a)}};ecd.prototype.ob="LMXOyf";_.fcd=_.Fb(2009,_.sD,ecd);_.T0c[2009]=[0,_.D];
}catch(e){_._DumpException(e)}
try{
_.t("cNgdQc");
var wcd;
_.xcd=function(a){if(a){var b=a.getImage(),c,d=b==null?void 0:(c=b.getExtension(_.bE))==null?void 0:c.eI(),e;d&&((e=_.nl(d))==null?0:e.match(/\.gstatic\.com$/))&&_.oDa(d)==="/licensed-image"&&(b==null||_.icd(b,18));switch(b==null?void 0:_.jj(b,1)){case 16:c=a.Ba;d=new _.V0c;d=_.Og(d,5,!0);d=_.Mg(d,6,2);c=c.call(a,d);d=c.Aa;e=wcd();e=_.Og(e,5,!0);d.call(c,e);break;case 9:case 19:a.Aa(wcd());break;case 18:c=a.Aa;d=new _.U0c;d=_.Mg(d,4,2);c.call(a,_.ucd(_.tcd(d)));break;case 20:a.Aa(_.tcd(_.ucd(new _.U0c)))}var f,g;
c=(g=b==null?void 0:_.z(b,9))!=null?g:!1;g=(b==null?void 0:_.Ii(b,1))===18;!c&&!g&&(b==null?void 0:(f=b.jf(_.fcd))==null?void 0:_.Pg(f,1))!==!0||_.vcd(a.Ca(),2)}};_.ycd=function(a){a&&(a.oa(_.bE,a.jf(_.bE)||new _.scd),a=a.getExtension(_.bE),a.sM()||_.qcd(a,a.hdb()||_.nl(a.eI()||"")))};wcd=function(){var a=_.vcd(_.ucd(new _.U0c),2);a=_.Mg(a,4,2);a=_.Mg(a,7,2);return _.Mg(a,8,2)};
_.u();
}catch(e){_._DumpException(e)}
try{
_.t("K02r3e");

_.u();
}catch(e){_._DumpException(e)}
try{
_.Qfq=_.w("qKrDxc",[_.Jr,_.vr,_.Fr,_.dl,_.vz]);
}catch(e){_._DumpException(e)}
try{
var Xdd;
_.Ydd=function(a,b,c,d,e){var f=(a==null?void 0:a.Ea())||"";if(!f){var g,h,k;if(a=(h=(g=a.Ca())==null?void 0:g.we())==null?void 0:(k=h.jf(_.vD))==null?void 0:k.getImage()){f=a;a=(0,_.m1c)(f)?f.getImage():f;g=(f=a.jf(_.bE))&&_.$f(f,2);h=f&&_.$f(f,3);k=_.$f(a,2);var l=a.dJ();a=l?_.P0c(l):"";const n=l?_.R0c(l):"";l=l?_.Q0c(l):"";if(!g||!h||!k)throw Error("Kh");b=new Map([["q",b],["imgurl",a],["imgrefurl",h],["docid",g],["tbnid",k],["vet",1],["w",n],["h",l],["hcb","2"]]);_.z(f,10)&&b.set("itg",1);c&&
(b.set("ved",c),d&&b.set("ictx",d),e&&b.set("vet",e));f=_.nc(Xdd,b)}}return f};Xdd=(0,_.mc)`/imgres`;
}catch(e){_._DumpException(e)}
try{
_.yNc=function(a){return _.p(a,_.Eu,4)};
}catch(e){_._DumpException(e)}
try{
_.yB=function(a,b){return _.uh(a,1,_.Cz,b)};_.zB=function(a,b){return _.Eb(a,_.Az,1,b)};
}catch(e){_._DumpException(e)}
try{
_.t("qKrDxc");
var Rfq=function(a){var b=(new _.Hu).tq(7);const c=a.getId(),d=new _.Cz;_.Ez(d).oa(_.vD,a);b=_.Fz(_.Iz(_.Hz(new _.Gz,b),c),d);_.xcd(a);_.ycd(a.getImage());return b};var Sfq=function(a,b,c){_.y(function*(){var d=yield a.vy();const e=_.B(d,5);var f=a.Ca(c),g=e&&_.nTa(e)||void 0;(d=_.Ydd(d,_.go(new _.Zn(a.Bj.getCurrentUrl()),"q")||"",e,f,g))&&(d=_.ec(d.toString()))&&_.Ic(b,d)})},Tfq=class extends _.zz{static Sa(){return{jsdata:{Cs:_.tD},service:{history:_.QD,navigation:_.Nz,focus:_.Ew,Cc:_.Yu}}}constructor(a){super(a.Oa);this.Ea=!1;this.Ba=b=>{const c=this.getRoot();if(c.el()){var d=_.Bl(this.getData("docid"));c.toggleClass("loWRed",d!==null&&b.detail.vhid===d)}};
this.oa=()=>{const b=this.getRoot();b.el()&&b.hasClass("loWRed")&&(b.removeClass("loWRed"),_.Aw(this.Kf,b,{preventScroll:!0}))};_.xz(this,Rfq(a.jsdata.Cs));this.Bj=a.service.history;this.kc=a.service.navigation;this.Kf=a.service.focus;this.Tb=a.service.Cc;this.logger=null;_.Mw&&(document.addEventListener("viewerUpdated",this.Ba),document.addEventListener("viewerClosed",this.oa),this.addOnDisposeCallback(()=>{document.removeEventListener("viewerUpdated",this.Ba);document.removeEventListener("viewerClosed",
this.oa)}))}Ka(a){if(this.Ea)return!0;let b=a.targetElement.el();for(let c=0;c<10&&b;c++,b=b.parentElement){let d;if(((d=b)==null?void 0:d.tagName)==="A"){Sfq(this,b,a);this.Ea=!0;break}}return!0}Pc(a){this.trigger("yu1Hm");return super.Pc(a)}Na(a){this.Pc(a);return null}Ma(a){a=a.targetElement.el();if(!a)return null;var b=a.getAttribute("href");if(!b)return null;b=_.ec(b);if(!b)return null;this.kc.navigateTo(b);this.Tb.logEvent({Be:_.Ig(a)});return null}};Tfq.prototype.$wa$WZxsNc=function(){return this.Ma};
Tfq.prototype.$wa$Esn7Cd=function(){return this.Na};Tfq.prototype.$wa$h5M12e=function(){return this.Pc};Tfq.prototype.$wa$UI3Kjd=function(){return this.Ka};_.ps(_.Qfq,Tfq);
_.u();
}catch(e){_._DumpException(e)}
try{
_.xmB=_.w("Z2vhDb",[]);
}catch(e){_._DumpException(e)}
try{
var uve,yve,wve,zve,xve,vve;uve=function(a,b){a[_.usa]=b;b.map(()=>{delete a[_.usa]})};_.kH=function(a){const b={[vve]:a,description:a,[_.Ne]:(c,d)=>{const e=wve(b).ZPc;e?e.unwrap(c,d):c(_.Xma)}};return b};yve=function(a,b){const c=a instanceof _.Zwa,d={},e=[];for(const [f,g]of Object.entries(b)){b=f;const {ZPc:h,kAe:k}=wve(g);k&&c?(e.push(k),d[b]=h):d[b]=k?k.flatMap(()=>h):h}e.length&&xve(a,f=>{uve(f,_.Rna(e))});return d};
wve=function(a){(0,_.Hza)(a);const b=a[vve];a=_.nna();var c;const d=(c=a.getAttribute("jscallback"))==null?void 0:c.split(";").find(h=>h.startsWith(`${b}${":"}`));if(!d)return{ZPc:_.Re(null)};const [,e,f]=d.split(":");c=zve(a,e);let g=()=>{};c=_.jna().Jla(c).flatMap(h=>{g=_.lqa(h,f).bind(h);return _.vsa(h)});return{ZPc:_.Re((...h)=>g.apply(null,h)),kAe:c}};
zve=function(a,b){let c=0;for(;a=a.parentElement;){a.hasAttribute("jsslot")&&c++;if(c===0&&a.getAttribute("jscontroller")===b)return a;a.hasAttribute("jsshadow")&&c--;if(c<0)break}};xve=function(a,b){a.Ba=b};vve=Symbol("jn");"optionalCallback"in _.Vma||_.Ce({Aq:yve},!0);
}catch(e){_._DumpException(e)}
try{
_.t("Z2vhDb");
var q3B=_.kH("xg558"),r3B=_.kH("wCwf3e");var s3B=class extends _.ng{static Sa(){return{Aq:{rac:q3B,Zkc:r3B}}}constructor(a){super(a.Oa);this.rac=a.Aq.rac;this.Zkc=a.Aq.Zkc}oa(a){this.rac&&this.rac(a)}Aa(a){this.Zkc&&this.Zkc(a)}};s3B.prototype.$wa$RAHB1d=function(){return this.Aa};s3B.prototype.$wa$rN5So=function(){return this.oa};_.ps(_.xmB,s3B);
_.u();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
