'use strict';!function(d,b,f,l){XF.KeyCaptcha=XF.Element.newHandler({options:{user:null,session:null,sign:null,sign2:null},$form:null,$code:null,init:function(){this.$form=this.$target.closest("form");this.$form.xfUniqueId();this.$code=this.$form.find("input[name=keycaptcha_code]");this.$code.xfUniqueId();this.load();this.$target.closest("form").on("ajax-submit:error ajax-submit:always",XF.proxy(this,"reload"))},load:function(){b.s_s_c_onload?this.create():(b.s_s_c_user_id=this.options.user,b.s_s_c_session_id=
this.options.session,b.s_s_c_captcha_field_id=this.$code.attr("id"),b.s_s_c_submit_button_id="sbutton-#-r",b.s_s_c_web_server_sign=this.options.sign,b.s_s_c_web_server_sign2=this.options.sign2,f.s_s_c_element=this.$form[0],f.s_s_c_debugmode=1,d("#div_for_keycaptcha").length||d("body").append('<div id="div_for_keycaptcha" />'),d.ajax({url:"https://backs.keycaptcha.com/swfs/cap.js",dataType:"script",cache:!0,global:!1}))},create:function(){b.s_s_c_onload(this.$form.attr("id"),this.$code.attr("id"),
"sbutton-#-r")},reload:function(a){b.s_s_c_onload&&(d(a.target).is("form")||a.preventDefault(),this.load())}});XF.ReCaptcha=XF.Element.newHandler({options:{sitekey:null,invisible:null},$reCaptchaTarget:null,reCaptchaId:null,invisibleValidated:!1,reloading:!1,init:function(){if(this.options.sitekey){var a=this.$target.closest("form");if(this.options.invisible){var c=d("<div />"),e=this.$target.closest(".formRow");e.hide();e.after(c);this.$reCaptchaTarget=c;a.on("ajax-submit:before",XF.proxy(this,"beforeSubmit"))}else this.$reCaptchaTarget=
this.$target;a.on("ajax-submit:error ajax-submit:always",XF.proxy(this,"reload"));b.grecaptcha?this.create():(XF.ReCaptcha.Callbacks.push(XF.proxy(this,"create")),d.ajax({url:"https://www.recaptcha.net/recaptcha/api.js?onload=XFReCaptchaCallback&render=explicit",dataType:"script",cache:!0,global:!1}))}},create:function(){if(b.grecaptcha){var a={sitekey:this.options.sitekey};this.options.invisible&&(a.size="invisible",a.callback=XF.proxy(this,"complete"));this.reCaptchaId=grecaptcha.render(this.$reCaptchaTarget[0],
a)}},beforeSubmit:function(a,c){this.invisibleValidated||(a.preventDefault(),c.preventSubmit=!0,grecaptcha.execute())},complete:function(){this.invisibleValidated=!0;this.$target.closest("form").submit()},reload:function(){if(b.grecaptcha&&null!==this.reCaptchaId&&!this.reloading){this.reloading=!0;var a=this;setTimeout(function(){grecaptcha.reset(a.reCaptchaId);a.reloading=!1;a.invisibleValidated=!1},50)}}});XF.ReCaptcha.Callbacks=[];b.XFReCaptchaCallback=function(){for(var a=XF.ReCaptcha.Callbacks,
c=0;c<a.length;c++)a[c]()};XF.Turnstile=XF.Element.newHandler({options:{sitekey:null,theme:"light",action:""},$turnstileTarget:null,turnstileId:null,reloading:!1,init:function(){if(this.options.sitekey){var a=this.$target.closest("form");this.$turnstileTarget=this.$target;a.on("ajax-submit:error ajax-submit:always",XF.proxy(this,"reload"));b.turnstile?this.create():(XF.Turnstile.Callbacks.push(XF.proxy(this,"create")),d.ajax({url:"https://challenges.cloudflare.com/turnstile/v0/api.js?onload=XFTurnstileCaptchaCallback",
dataType:"script",cache:!0,global:!1}))}},create:function(){b.turnstile&&(this.turnstileId=b.turnstile.render(this.$turnstileTarget[0],{sitekey:this.options.sitekey,theme:this.options.theme,action:this.options.action}))},complete:function(){this.$target.closest("form").submit()},reload:function(){if(b.turnstile&&null!==this.turnstileId&&!this.reloading){this.reloading=!0;var a=this;setTimeout(function(){b.turnstile.reset(a.turnstileId);a.reloading=!1},50)}}});XF.Turnstile.Callbacks=[];b.XFTurnstileCaptchaCallback=
function(){for(var a=XF.Turnstile.Callbacks,c=0;c<a.length;c++)a[c]()};XF.HCaptcha=XF.Element.newHandler({options:{sitekey:null,invisible:null},$hCaptchaTarget:null,hCaptchaId:null,invisibleValidated:!1,reloading:!1,init:function(){if(this.options.sitekey){var a=this.$target.closest("form");a.on("ajax-submit:error ajax-submit:always",XF.proxy(this,"reload"));if(this.options.invisible){var c=d("<div />"),e=this.$target.closest(".formRow");e.hide();e.after(c);this.$hCaptchaTarget=c;a.on("ajax-submit:before",
XF.proxy(this,"beforeSubmit"))}else this.$hCaptchaTarget=this.$target;b.hcaptcha?this.create():(XF.HCaptcha.Callbacks.push(XF.proxy(this,"create")),a={dataType:"script",cache:!0,global:!1},XF.browser.msie?(a.url="https://hcaptcha.com/1/api.js?render=explicit",a.success=b.XFHCaptchaCallback):a.url="https://hcaptcha.com/1/api.js?onload=XFHCaptchaCallback&render=explicit",d.ajax(a))}},create:function(){if(b.hcaptcha){var a={sitekey:this.options.sitekey};this.options.invisible&&(a.size="invisible",a.callback=
XF.proxy(this,"complete"));this.hCaptchaId=b.hcaptcha.render(this.$hCaptchaTarget[0],a)}},beforeSubmit:function(a,c){this.invisibleValidated||(a.preventDefault(),c.preventSubmit=!0,b.hcaptcha.execute(this.hCaptchaId))},complete:function(){this.invisibleValidated=!0;this.$target.closest("form").submit()},reload:function(){if(b.hcaptcha&&null!==this.hCaptchaId&&!this.reloading){this.reloading=!0;var a=this;setTimeout(function(){b.hcaptcha.reset(a.hCaptchaId);a.reloading=!1;a.invisibleValidated=!1},
50)}}});XF.HCaptcha.Callbacks=[];b.XFHCaptchaCallback=function(){for(var a=XF.HCaptcha.Callbacks,c=0;c<a.length;c++)a[c]()};XF.QaCaptcha=XF.Element.newHandler({options:{url:null},reloading:!1,init:function(){if(this.options.url)this.$target.closest("form").on("ajax-submit:error ajax-submit:always",XF.proxy(this,"reload"))},reload:function(){this.reloading||(this.reloading=!0,this.$target.fadeTo(XF.config.speed.fast,.5),XF.ajax("get",this.options.url,XF.proxy(this,"show")))},show:function(a){var c=
this.$target,e=this;XF.setupHtmlInsert(a.html,function(g,h,k){g.hide();c.after(g);c.xfFadeUp(XF.config.speed.fast,function(){g.xfFadeDown(XF.config.speed.fast);c.remove()});e.reloading=!1;k()})}});XF.SolveCaptcha=XF.Element.newHandler({options:{ckey:null,theme:"white"},instance:null,reloading:!1,init:function(){this.instance&&this.instance.remove();this.instance=this;this.options.ckey&&(this.$target.closest("form").on("ajax-submit:error ajax-submit:always",XF.proxy(this,"reload")),this.$target.siblings("noscript").remove(),
this.load(),d(b).on("unload",XF.proxy(this,"remove")))},load:function(){if(b.ACPuzzle)this.create();else{var a="https:"==b.location.protocol?"https://api-secure":"http://api";b.ACPuzzleOptions={onload:XF.proxy(this,"create")};d.ajax({url:a+".solvemedia.com/papi/challenge.ajax",dataType:"script",cache:!0,global:!1})}},create:function(){b.ACPuzzle.create(this.options.ckey,this.$target.attr("id"),{theme:this.options.theme||"white",lang:d("html").attr("lang").substr(0,2)||"en"})},reload:function(a){b.ACPuzzle&&
!this.reloading&&(d(a.target).is("form")||a.preventDefault(),b.ACPuzzle.reload())},remove:function(){this.$target.empty().remove();b.ACPuzzle&&b.ACPuzzle.destroy()}});XF.GuestCaptcha=XF.Element.newHandler({options:{url:"index.php?misc/captcha&with_row=1",captchaContext:"",target:".js-captchaContainer",skip:"[name=more_options]"},$captchaContainer:null,initialized:!1,init:function(){var a=this.$target;this.$captchaContainer=a.find(this.options.target);this.$captchaContainer.length&&(a.on("focusin",
XF.proxy(this,"initializeCaptcha")),a.on("submit ajax-submit:before",XF.proxy(this,"submit")))},initializeCaptcha:function(a){a=d(f.activeElement);this.initialized||a.is(this.options.skip)||(a=this.$captchaContainer.data("row-type")||"",XF.ajax("get",XF.canonicalizeUrl(this.options.url),{row_type:a,context:this.options.captchaContext},XF.proxy(this,"showCaptcha")),this.initialized=!0)},showCaptcha:function(a){var c=this;XF.setupHtmlInsert(a.html,function(e,g,h){e.replaceAll(c.$captchaContainer);h()})},
submit:function(a){if(!this.initialized&&!d(f.activeElement).is(this.options.skip))return a.preventDefault(),!1}});XF.Element.register("key-captcha","XF.KeyCaptcha");XF.Element.register("re-captcha","XF.ReCaptcha");XF.Element.register("turnstile","XF.Turnstile");XF.Element.register("h-captcha","XF.HCaptcha");XF.Element.register("qa-captcha","XF.QaCaptcha");XF.Element.register("solve-captcha","XF.SolveCaptcha");XF.Element.register("guest-captcha","XF.GuestCaptcha")}(jQuery,window,document);