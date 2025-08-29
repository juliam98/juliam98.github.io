this._s=this._s||{};(function(_){var window=this;
try{
_.t("Ko78Df");
var o4B=class{constructor(a){this.state=a}getId(){return this.state.id}getPushId(){return this.state.pushId}getUrl(){return this.state.url}getUserData(){return this.state.userData}};
_.Xe(_.i0a,class extends _.Io{static Sa(){return{service:{history:_.Ybb}}}constructor(a){super();this.history=a.service.history;this.uw=document.body;this.oa=new Map;this.history.addListener((b,c,d)=>{if(d.Tfa)for(const e of d.Tfa)if(this.oa.has(e.id)){const f=this.oa.get(e.id);f&&_.Fn(()=>{f(e.ZMa)});this.oa.delete(e.id)}d.userInitiated&&this.uw.dispatchEvent(new CustomEvent("FWkcec"))})}pushAsync(a,b,c,d){a=d?this.history.oa(a,b):this.history.pushAsync(a,b);return Promise.resolve(a.then(e=>{c&&
this.oa.set(e.id,c);return e.id}))}pop(a,b){a=b?this.history.Ca(a):this.history.pop(a);return Promise.resolve(a.then(c=>c?new o4B(c):null))}getState(){const a=this.history.getState();return a?new o4B(a):null}getCurrentUrl(){return this.history.getCurrentUrl()}getEventTarget(){return this.uw}navigate(a,b){a=this.history.navigate(a,b).committed;return Promise.resolve(a.then(c=>new o4B(c)))}});
_.u();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
