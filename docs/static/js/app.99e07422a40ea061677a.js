webpackJsonp([1],{"2bSD":function(e,t){},"9msG":function(e,t){},COqL:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),r={props:{totalStep:{type:Number,required:!0},currentStep:{type:Number,required:!0}},methods:{isDisabled:function(e){return e>this.currentStep},isCurrent:function(e){return e==this.currentStep}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"progressBar"},[e._l(e.totalStep,function(t,a){return[s("div",{key:"dot"+a,staticClass:"progressBar__dotWrapper",class:{"progressBar__dotWrapper-disabled":e.isDisabled(t),"progressBar__dotWrapper-current":e.isCurrent(t)}},[t<e.currentStep?s("i",{staticClass:"fas fa-check-circle"}):e._e(),e._v(" "),t==e.currentStep?s("div",{staticClass:"dot"}):e._e()]),e._v(" "),t<e.totalStep?s("div",{key:"line"+a,staticClass:"progressBar__line",class:{"progressBar__line-disabled":e.isDisabled(t+1)}}):e._e()]})],2)},staticRenderFns:[]};var n=s("VU/8")(r,i,!1,function(e){s("sDZ0")},"data-v-84817008",null).exports,l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stepOne"},[s("p",{staticClass:"title text-center mB0"},[e._v("Create Account")]),e._v(" "),s("p",{staticClass:"subtitle text-center mT5"},[e._v("Glad to see you here!")]),e._v(" "),s("p",{staticClass:"w100 form mB10 mT30"},[e._v("Account")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("email")}},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"w100 formInput",attrs:{name:"email",type:"text",placeholder:"example@email.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e.errors.has("email")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("email")))]):e._e()]),e._v(" "),s("p",{staticClass:"w100 form mB10 mT30"},[e._v("Password")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("password")}},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,min:8},expression:"{required: true, min:8}"},{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",staticClass:"w100 formInput",attrs:{name:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),e.errors.has("password")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._v(" "),s("p",{staticClass:"w100 form mB10 mT30"},[e._v("Confirm Password")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("checkPassword")}},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,confirmed:"password"},expression:"{required: true, confirmed: 'password'}"},{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],staticClass:"w100 formInput",attrs:{"data-vv-as":"password",name:"checkPassword",type:"password"},domProps:{value:e.checkPassword},on:{input:function(t){t.target.composing||(e.checkPassword=t.target.value)}}}),e._v(" "),e.errors.has("checkPassword")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("checkPassword")))]):e._e()]),e._v(" "),s("button",{staticClass:"w100 mT30 button-main",attrs:{disabled:!e.validate},on:{click:e.validateBeforeNextStep}},[e._v("SUBMIT & NEXT")])])},staticRenderFns:[]};var o=s("VU/8")({data:function(){return{email:"",password:"",checkPassword:""}},watch:{},computed:{validate:function(){return 0===this.errors.items.length}},methods:{validateBeforeNextStep:function(){var e=this;this.$validator.validate().then(function(t){t&&e.$emit("next-step")})}}},l,!1,function(e){s("2bSD")},null,null).exports,c=s("fZjL"),p=s.n(c),u=s("hlPV"),d=s("PJh5"),v=s.n(d),m={"基隆市":{"仁愛區":"200","信義區":"201","中正區":"202","中山區":"203","安樂區":"204","暖暖區":"205","七堵區":"206"},"台北市":{"中正區":"100","大同區":"103","中山區":"104","松山區":"105","大安區":"106","萬華區":"108","信義區":"110","士林區":"111","北投區":"112","內湖區":"114","南港區":"115","文山區":"116"},"新北市":{"萬里區":"207","金山區":"208","板橋區":"220","汐止區":"221","深坑區":"222","石碇區":"223","瑞芳區":"224","平溪區":"226","雙溪區":"227","貢寮區":"228","新店區":"231","坪林區":"232","烏來區":"233","永和區":"234","中和區":"235","土城區":"236","三峽區":"237","樹林區":"238","鶯歌區":"239","三重區":"241","新莊區":"242","泰山區":"243","林口區":"244","蘆洲區":"247","五股區":"248","八里區":"249","淡水區":"251","三芝區":"252","石門區":"253"},"宜蘭縣":{"宜蘭市":"260","頭城鎮":"261","礁溪鄉":"262","壯圍鄉":"263","員山鄉":"264","羅東鎮":"265","三星鄉":"266","大同鄉":"267","五結鄉":"268","冬山鄉":"269","蘇澳鎮":"270","南澳鄉":"272","釣魚台列嶼":"290"},"新竹市":{"東區":"300A","北區":"300B","香山區":"300C"},"新竹縣":{"竹北市":"302","湖口鄉":"303","新豐鄉":"304","新埔鎮":"305","關西鎮":"306","芎林鄉":"307","寶山鄉":"308","竹東鎮":"310","五峰鄉":"311","橫山鄉":"312","尖石鄉":"313","北埔鄉":"314","峨嵋鄉":"315"},"桃園市":{"中壢區":"320","平鎮區":"324","龍潭區":"325","楊梅區":"326","新屋區":"327","觀音區":"328","桃園區":"330","龜山區":"333","八德區":"334","大溪區":"335","復興區":"336","大園區":"337","蘆竹區":"338"},"苗栗縣":{"竹南鎮":"350","頭份市":"351","三灣鄉":"352","南庄鄉":"353","獅潭鄉":"354","後龍鎮":"356","通霄鎮":"357","苑裡鎮":"358","苗栗市":"360","造橋鄉":"361","頭屋鄉":"362","公館鄉":"363","大湖鄉":"364","泰安鄉":"365","銅鑼鄉":"366","三義鄉":"367","西湖鄉":"368","卓蘭鎮":"369"},"台中市":{"中區":"400","東區":"401","南區":"402","西區":"403","北區":"404","北屯區":"406","西屯區":"407","南屯區":"408","太平區":"411","大里區":"412","霧峰區":"413","烏日區":"414","豐原區":"420","后里區":"421","石岡區":"422","東勢區":"423","和平區":"424","新社區":"426","潭子區":"427","大雅區":"428","神岡區":"429","大肚區":"432","沙鹿區":"433","龍井區":"434","梧棲區":"435","清水區":"436","大甲區":"437","外埔區":"438","大安區":"439"},"彰化縣":{"彰化市":"500","芬園鄉":"502","花壇鄉":"503","秀水鄉":"504","鹿港鎮":"505","福興鄉":"506","線西鄉":"507","和美鎮":"508","伸港鄉":"509","員林市":"510","社頭鄉":"511","永靖鄉":"512","埔心鄉":"513","溪湖鎮":"514","大村鄉":"515","埔鹽鄉":"516","田中鎮":"520","北斗鎮":"521","田尾鄉":"522","埤頭鄉":"523","溪州鄉":"524","竹塘鄉":"525","二林鎮":"526","大城鄉":"527","芳苑鄉":"528","二水鄉":"530"},"南投縣":{"南投市":"540","中寮鄉":"541","草屯鎮":"542","國姓鄉":"544","埔里鎮":"545","仁愛鄉":"546","名間鄉":"551","集集鎮":"552","水里鄉":"553","魚池鄉":"555","信義鄉":"556","竹山鎮":"557","鹿谷鄉":"558"},"嘉義市":{"東區":"600","西區":"600"},"嘉義縣":{"番路鄉":"602","梅山鄉":"603","竹崎鄉":"604","阿里山":"605","中埔鄉":"606","大埔鄉":"607","水上鄉":"608","鹿草鄉":"611","太保市":"612","朴子市":"613","東石鄉":"614","六腳鄉":"615","新港鄉":"616","民雄鄉":"621","大林鎮":"622","溪口鄉":"623","義竹鄉":"624","布袋鎮":"625"},"雲林縣":{"斗南鎮":"630","大埤鄉":"631","虎尾鎮":"632","土庫鎮":"633","褒忠鄉":"634","東勢鄉":"635","臺西鄉":"636","崙背鄉":"637","麥寮鄉":"638","斗六市":"640","林內鄉":"643","古坑鄉":"646","莿桐鄉":"647","西螺鎮":"648","二崙鄉":"649","北港鎮":"651","水林鄉":"652","口湖鄉":"653","四湖鄉":"654","元長鄉":"655"},"台南市":{"中西區":"700","東區":"701","南區":"702","北區":"704","安平區":"708","安南區":"709","永康區":"710","歸仁區":"711","新化區":"712","左鎮區":"713","玉井區":"714","楠西區":"715","南化區":"716","仁德區":"717","關廟區":"718","龍崎區":"719","官田區":"720","麻豆區":"721","佳里區":"722","西港區":"723","七股區":"724","將軍區":"725","學甲區":"726","北門區":"727","新營區":"730","後壁區":"731","白河區":"732","東山區":"733","六甲區":"734","下營區":"735","柳營區":"736","鹽水區":"737","善化區":"741","大內區":"742","山上區":"743","新市區":"744","安定區":"745"},"高雄市":{"新興區":"800","前金區":"801","苓雅區":"802","鹽埕區":"803","鼓山區":"804","旗津區":"805","前鎮區":"806","三民區":"807","楠梓區":"811","小港區":"812","左營區":"813","仁武區":"814","大社區":"815","東沙群島":"817","南沙群島":"819","岡山區":"820","路竹區":"821","阿蓮區":"822","田寮區":"823","燕巢區":"824","橋頭區":"825","梓官區":"826","彌陀區":"827","永安區":"828","湖內區":"829","鳳山區":"830","大寮區":"831","林園區":"832","鳥松區":"833","大樹區":"840","旗山區":"842","美濃區":"843","六龜區":"844","內門區":"845","杉林區":"846","甲仙區":"847","桃源區":"848","那瑪夏區":"849","茂林區":"851","茄萣區":"852"},"屏東縣":{"屏東市":"900","三地門鄉":"901","霧臺鄉":"902","瑪家鄉":"903","九如鄉":"904","里港鄉":"905","高樹鄉":"906","鹽埔鄉":"907","長治鄉":"908","麟洛鄉":"909","竹田鄉":"911","內埔鄉":"912","萬丹鄉":"913","潮州鎮":"920","泰武鄉":"921","來義鄉":"922","萬巒鄉":"923","崁頂鄉":"924","新埤鄉":"925","南州鄉":"926","林邊鄉":"927","東港鎮":"928","琉球鄉":"929","佳冬鄉":"931","新園鄉":"932","枋寮鄉":"940","枋山鄉":"941","春日鄉":"942","獅子鄉":"943","車城鄉":"944","牡丹鄉":"945","恆春鎮":"946","滿州鄉":"947"},"台東縣":{"臺東市":"950","綠島鄉":"951","蘭嶼鄉":"952","延平鄉":"953","卑南鄉":"954","鹿野鄉":"955","關山鎮":"956","海端鄉":"957","池上鄉":"958","東河鄉":"959","成功鎮":"961","長濱鄉":"962","太麻里鄉":"963","金峰鄉":"964","大武鄉":"965","達仁鄉":"966"},"花蓮縣":{"花蓮市":"970","新城鄉":"971","秀林鄉":"972","吉安鄉":"973","壽豐鄉":"974","鳳林鎮":"975","光復鄉":"976","豐濱鄉":"977","瑞穗鄉":"978","萬榮鄉":"979","玉里鎮":"981","卓溪鄉":"982","富里鄉":"983"},"金門縣":{"金沙鎮":"890","金湖鎮":"891","金寧鄉":"892","金城鎮":"893","烈嶼鄉":"894","烏坵鄉":"896"},"連江縣":{"南竿鄉":"209","北竿鄉":"210","莒光鄉":"211","東引鄉":"212"},"澎湖縣":{"馬公市":"880","西嶼鄉":"881","望安鄉":"882","七美鄉":"883","白沙鄉":"884","湖西鄉":"885"}},h={directives:{mask:u.mask},data:function(){return{name:"",phone:"",birthYear:"",birthMonth:"",birthDate:"",city:"台北市",dist:"",address:""}},computed:{validate:function(){return 0===this.errors.items.length},allSelectableYear:function(){for(var e=[],t=v()("1960/01/01","YYYY/MM/DD");t.isBefore(v()());)e.push(t.format("YYYY")),t=t.add(1,"y");return e},allSelectableMonth:function(){for(var e=[],t=1;t<=12;t++)e.push(t);return e},allSelectableDate:function(){return v()(this.birthYear+"/"+this.birthMonth+"/1","YYYY/MM/DD").daysInMonth()},dateDisable:function(){return""==this.birthYear||""==this.birthMonth},allSelectableCity:function(){return p()(m)},allSelectableDist:function(){return""==this.city?[""]:p()(m[this.city])}},watch:{city:function(){this.dist=""}},methods:{validateBeforeNextStep:function(){var e=this;this.$validator.validate().then(function(t){t&&e.$emit("next-step")})}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stepTwo"},[s("p",{staticClass:"title text-center mB0"},[e._v("General Information")]),e._v(" "),s("p",{staticClass:"subtitle text-center mT5"},[e._v("Tell us who you are!")]),e._v(" "),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flex-1 mR20"},[e._m(0),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"w100 formInput",attrs:{type:"text",placeholder:"Example Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"flex-1"},[s("p",{staticClass:"w100 form mB10 mT30"},[e._v("Phone*")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("phone")}},[s("input",{directives:[{name:"mask",rawName:"v-mask",value:"#### ### ###",expression:"'#### ### ###'"},{name:"validate",rawName:"v-validate",value:"required|verify_phone",expression:"'required|verify_phone'"},{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"w100 formInput",attrs:{name:"phone",placeholder:"0912 345 678"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),e._v(" "),e.errors.has("phone")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("phone")))]):e._e()])])]),e._v(" "),s("div",{staticClass:"mT30"},[e._m(1),e._v(" "),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flex-1 mR20"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.birthYear,expression:"birthYear"}],staticClass:"w100 formInput",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.birthYear=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("year")]),e._v(" "),e._l(e.allSelectableYear,function(t,a){return s("option",{key:"year"+a,domProps:{value:t}},[e._v(e._s(t))])})],2)]),e._v(" "),s("div",{staticClass:"flex-1 mR20"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.birthMonth,expression:"birthMonth"}],staticClass:"w100 formInput",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.birthMonth=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("month")]),e._v(" "),e._l(e.allSelectableMonth,function(t,a){return s("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})],2)]),e._v(" "),s("div",{staticClass:"flex-1"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.birthDate,expression:"birthDate"}],staticClass:"w100 formInput",attrs:{disabled:e.dateDisable},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.birthDate=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("date")]),e._v(" "),e._l(e.allSelectableDate,function(t,a){return s("option",{key:a,domProps:{value:t}},[e._v(e._s(t))])})],2)])])]),e._v(" "),e._m(2),e._v(" "),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flex-1 inputWrapper mR20"},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],staticClass:"w100 formInput ",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.city=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("City")]),e._v(" "),e._l(e.allSelectableCity,function(t){return s("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})],2)]),e._v(" "),s("div",{staticClass:"flex-1 inputWrapper",class:{"inputWrapper-warning":e.errors.has("dist")}},[s("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.dist,expression:"dist"}],staticClass:"w100 formInput",attrs:{name:"dist"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.dist=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("Dist")]),e._v(" "),e._l(e.allSelectableDist,function(t){return s("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.has("dist")?s("p",{staticClass:"errorMsg"},[e._v(e._s(e.errors.first("dist")))]):e._e()])]),e._v(" "),s("div",{staticClass:"inputWrapper mT20",class:{"inputWrapper-warning":e.errors.has("address")}},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"w100 formInput",attrs:{type:"text",name:"address",placeholder:"Address Detail"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),e._v(" "),e.errors.has("address")?s("p",{staticClass:"errorMsg"},[e._v(e._s(e.errors.first("address")))]):e._e()]),e._v(" "),s("button",{staticClass:"w100 mT30 button-main",attrs:{disabled:!e.validate},on:{click:e.validateBeforeNextStep}},[e._v("SUBMIT & NEXT")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"w100 form mB10 mT30"},[this._v("Name "),t("span",{staticClass:"hint"},[this._v("(optional)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"w100 form mB10 mT30"},[this._v("Birth Date "),t("span",{staticClass:"hint"},[this._v("(optional)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mT30"},[t("p",{staticClass:"w100 form mB10 mT30"},[this._v("Address*")])])}]};var _=s("VU/8")(h,f,!1,function(e){s("kGLq")},null,null).exports,g={data:function(){return{selectedFile:[],image:[],isLoadingImg:!1}},computed:{validate:function(){return this.image.length>0&&this.image.every(function(e){return 1==e.valid})}},watch:{},methods:{onFileSelected:function(e){if(this.image.length+e.target.files.length<=3){this.selectedFile=e.target.files;for(var t=0;t<this.selectedFile.length;t++)this.getFileURL(this.selectedFile[t])}else alert("You can at most upload 3 images!")},getFileURL:function(e){var t=window.URL||window.webkitURL,s=this,a=void 0;(a=new Image).src=t.createObjectURL(e),a.onload=function(){var e=this.width,t=this.height,r=e<=150&&t<=150;s.image.push({dataUrl:a.src,width:e,height:t,valid:r})}},deleteImg:function(e){this.image.splice(e,1)},validateBeforeNextStep:function(){this.$emit("next-step")}}},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stepThree"},[s("p",{staticClass:"title text-center mB0"},[e._v("Update Profile Picture")]),e._v(" "),s("p",{staticClass:"subtitle text-center mT5"},[e._v("We wanna know you more!")]),e._v(" "),s("label",{staticClass:"imgUpload",attrs:{for:"imgUpload"}},[s("input",{staticClass:"hide",attrs:{id:"imgUpload",type:"file",multiple:"",accept:"image/*"},on:{change:e.onFileSelected}}),e._v(" "),e._m(0)]),e._v(" "),e.image.length>0&&!e.validate?s("div",{staticClass:"w100 mT15"},[e._m(1)]):e._e(),e._v(" "),s("div",{staticClass:"flex-box mT15"},e._l(e.image,function(t,a){return s("div",{key:a,staticClass:"imgItemWrapper"},[s("div",{staticClass:"imgWrapper"},[s("img",{staticClass:"w100",attrs:{src:t.dataUrl}}),e._v(" "),s("div",{staticClass:"imgDeleteBtn",on:{click:function(t){e.deleteImg(a)}}},[s("i",{staticClass:"fas fa-trash-alt"})])]),e._v(" "),t.valid?e._e():s("p",{staticClass:"label imgWarning"},[e._v("This image("+e._s(t.width)+"x"+e._s(t.height)+") is Over Max Size!")])])})),e._v(" "),s("button",{staticClass:"w100 mT30 button-main",attrs:{disabled:!e.validate},on:{click:e.validateBeforeNextStep}},[e._v("SUBMIT & NEXT")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("i",{staticClass:"fas fa-images fa-3x imgIcon"}),this._v(" "),t("p",{staticClass:"form m0 mB5 color-default"},[this._v("UPLOAD UP TO 3 PHOTHS")]),this._v(" "),t("p",{staticClass:"label m0 color-default"},[this._v("MAX SIZE: 150*150px")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sizeAlert text-center"},[t("span",{staticClass:"label"},[t("i",{staticClass:"fas fa-exclamation-triangle mR20"}),this._v("ONE FILE IS OVER THE MAXIMUM SIZE")])])}]};var b=s("VU/8")(g,w,!1,function(e){s("COqL")},"data-v-50d029b8",null).exports,x={directives:{mask:u.mask},data:function(){return{cardNumber:"",holderName:"",bankName:"",cvv:"",expireMonth:"",expireYear:"",cardType:""}},computed:{validate:function(){return 0===this.errors.items.length},allSelectableMonth:function(){for(var e=[],t=1;t<=12;)e.push(t),t++;return e},allSelectableYear:function(){for(var e=[],t=Number(v()().format("YY")),s=1;s<=30;)e.push(t+s),s++;return e}},watch:{cardNumber:function(e){/^4/.test(e)?this.cardType=1:/^5[1-5]/.test(e)?this.cardType=2:/^35(2[89]|[3-8][0-9])/.test(e)?this.cardType=3:this.cardType=""}},methods:{validateBeforeNextStep:function(){var e=this;this.$validator.validate().then(function(t){t&&e.$emit("next-step")})}}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"stepFour"},[s("p",{staticClass:"title text-center mB0"},[e._v("Payment Method")]),e._v(" "),s("p",{staticClass:"subtitle text-center mT5"},[e._v("Add your credit card information!")]),e._v(" "),s("p",{staticClass:"w100 form mB10 mT30"},[e._v("Card Number*")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("cardNumber")}},[s("input",{directives:[{name:"mask",rawName:"v-mask",value:"#### #### #### ####",expression:"'#### #### #### ####'"},{name:"validate",rawName:"v-validate",value:"required|credit_card",expression:"'required|credit_card'"},{name:"model",rawName:"v-model",value:e.cardNumber,expression:"cardNumber"}],staticClass:"w100 formInput",attrs:{name:"cardNumber",type:"text",placeholder:"1234 5678 9012 3456"},domProps:{value:e.cardNumber},on:{input:function(t){t.target.composing||(e.cardNumber=t.target.value)}}}),e._v(" "),e.errors.has("cardNumber")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("cardNumber")))]):s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[1==e.cardType?s("img",{staticClass:"creditCardIcon",staticStyle:{width:"35px"},attrs:{id:"visaIcon",src:"static/visa.png",alt:""}}):e._e(),e._v(" "),2==e.cardType?s("img",{staticClass:"creditCardIcon",staticStyle:{width:"35px"},attrs:{id:"masterIcon",src:"static/master.png",alt:""}}):e._e(),e._v(" "),3==e.cardType?s("img",{staticClass:"creditCardIcon",staticStyle:{width:"35px"},attrs:{id:"jcbIcon",src:"static/jcb.png",alt:""}}):e._e()])],1),e._v(" "),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flex-1 mR20"},[s("p",{staticClass:"form w100 mB10"},[e._v("Cardholder Name*")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("holderName")}},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.holderName,expression:"holderName"}],staticClass:"w100 formInput",attrs:{name:"holderName",type:"text",placeholder:"EXAMPLE NAME"},domProps:{value:e.holderName},on:{input:function(t){t.target.composing||(e.holderName=t.target.value)}}}),e._v(" "),e.errors.has("holderName")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("holderName")))]):e._e()])]),e._v(" "),s("div",{staticClass:"flex-1"},[s("p",{staticClass:"form w100 mB10"},[e._v("Bank Name*")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("bankName")}},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.bankName,expression:"bankName"}],staticClass:"w100 formInput",attrs:{name:"bankName",type:"text",placeholder:"EXAMPLE BANK"},domProps:{value:e.bankName},on:{input:function(t){t.target.composing||(e.bankName=t.target.value)}}}),e._v(" "),e.errors.has("bankName")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("bankName")))]):e._e()])])]),e._v(" "),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flex-1 mR20"},[s("p",{staticClass:"w100 form mB10"},[e._v("CVV*")]),e._v(" "),s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("cvv")}},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|digits:3",expression:"'required|digits:3'"},{name:"model",rawName:"v-model",value:e.cvv,expression:"cvv"}],staticClass:"formInput w100",attrs:{name:"cvv",type:"text",placeholder:"123"},domProps:{value:e.cvv},on:{input:function(t){t.target.composing||(e.cvv=t.target.value)}}}),e._v(" "),e.errors.has("cvv")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("cvv")))]):e._e()])]),e._v(" "),s("div",{staticClass:"flex-2"},[s("p",{staticClass:"w100 form mB10"},[e._v("Expire Date*")]),e._v(" "),s("div",{staticClass:"flex-box"},[s("div",{staticClass:"flex-1 mR20"},[s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("cvv")}},[s("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.expireMonth,expression:"expireMonth"}],staticClass:"w100 formInput",attrs:{name:"expireMonth"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.expireMonth=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("MM")]),e._v(" "),e._l(e.allSelectableMonth,function(t){return s("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.has("expireMonth")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("expireMonth")))]):e._e()])]),e._v(" "),s("div",{staticClass:"flex-1"},[s("div",{staticClass:"inputWrapper",class:{"inputWrapper-warning":e.errors.has("expireYear")}},[s("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.expireYear,expression:"expireYear"}],staticClass:"w100 formInput",attrs:{name:"expireYear"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.expireYear=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",disabled:""}},[e._v("YY")]),e._v(" "),e._l(e.allSelectableYear,function(t){return s("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})],2),e._v(" "),e.errors.has("expireYear")?s("p",{staticClass:"errorMsg label"},[e._v(e._s(e.errors.first("expireYear")))]):e._e()])])])])]),e._v(" "),s("button",{staticClass:"w100 mT30 button-main",attrs:{disabled:!e.validate},on:{click:e.validateBeforeNextStep}},[e._v("DONE")])])},staticRenderFns:[]};var j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"stepFour"},[t("p",{staticClass:"title text-center mB0"},[this._v("Congratulations")]),this._v(" "),t("p",{staticClass:"subtitle text-center mT5"},[this._v("Now you're one of us!")]),this._v(" "),t("div",{staticClass:"text-center w100"},[t("i",{staticClass:"fas fa-smile color-secondary smileIcon"})]),this._v(" "),t("p",{staticClass:"text-center color-main label font-italic"},[this._v("Redirect to homepage after 5 seconds...")])])}]};var y={name:"App",data:function(){return{currentStep:1}},methods:{nextStep:function(){this.currentStep<5&&this.currentStep++}},components:{ProgressBar:n,StepOne:o,StepTwo:_,StepThree:b,StepFour:s("VU/8")(x,C,!1,function(e){s("9msG")},"data-v-bb682934",null).exports,StepDone:s("VU/8")({data:function(){return{}}},j,!1,function(e){s("igSq")},"data-v-7f414b0a",null).exports}},N={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"pageView"},[s("div",{staticClass:"appProgressBar"},[s("progress-bar",{attrs:{"total-step":4,"current-step":e.currentStep}})],1),e._v(" "),s("div",{staticClass:"appStep"},[s("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[1==e.currentStep?s("step-one",{key:1,on:{"next-step":function(t){e.nextStep()}}}):e._e(),e._v(" "),2==e.currentStep?s("step-two",{key:2,on:{"next-step":function(t){e.nextStep()}}}):e._e(),e._v(" "),3==e.currentStep?s("step-three",{key:3,on:{"next-step":function(t){e.nextStep()}}}):e._e(),e._v(" "),4==e.currentStep?s("step-four",{key:4,on:{"next-step":function(t){e.nextStep()}}}):e._e(),e._v(" "),5==e.currentStep?s("step-done",{key:5}):e._e()],1)],1)])])])},staticRenderFns:[]};var k=s("VU/8")(y,N,!1,function(e){s("UrgW")},null,null).exports,S=s("sUu7");a.a.config.productionTip=!1;a.a.use(S.b),S.a.extend("verify_phone",{getMessage:function(){return"INVALID PHONE NUMBER"},validate:function(e){return null!==e.replace(/\s/g,"").match(/09[0-9]{8}/)&&10==e.match(/\S/g).length}}),new a.a({el:"#app",components:{App:k},template:"<App/>"})},UrgW:function(e,t){},igSq:function(e,t){},kGLq:function(e,t){},sDZ0:function(e,t){},uslO:function(e,t,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(e){return s(i(e))}function i(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.99e07422a40ea061677a.js.map