(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(73)},45:function(e,t,a){},46:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(33),r=a.n(c),o=(a(45),a(21)),i=a(9),u=a(10),l=a(13),d=a(11),p=a(14),b=a(5);a(46);function v(e){return s.a.createElement("input",{type:"button",className:"keyButton",value:e.keyNumber,onClick:function(){e.onKeyClick(e.keyNumber)},onMouseUp:function(t){e.onDelayedCallback(t)}})}var h=JSON.parse(localStorage.getItem("password")),m={sn:4815162342},f=function(){return!!localStorage.getItem("password")},k=function(e){var t=!1;if(e.length==="000000".length)for(var a=0;a<e.length;a++){if(e[a]!=="000000"[a]){t=!1;break}t=!0}return!!t},y=function(e){return 6===e.length&&(localStorage.setItem("password",e.join("")),!0)},O=function(e){var t=h+"",a=!1;if(t.length===e.length)for(var n=0;n<e.length;n++){if(e[n]!==t[n]){a=!1;break}a=!0}return!!a};var j=["1","2","3","4","5","6","7","8","9","*","0","L"],E=a(34),C=a.n(E),g=a(17),S="CHECK_MASTER_CODE",I="SUBMIT_PASSCODE",N="SERVICE_MODE",w="MASTER_CODE_CONFIRMED",A="IS_VALIDATING",D="IS_LOADING",_="TOGGLE_LOCK";function K(e,t){return{type:I,valid:e,locking:t}}function x(e){return{type:N,status:e}}function T(e){return{type:D,loading:e}}function R(e,t){return{type:_,valid:e,status:t}}var L=a(16),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:var a=t.valid,n=t.valid||"LOCKING"===t.locking?"Ready":"Error";return Object(L.a)({},e,{unlocked:a,status:n});case N:return n=t.status,Object(L.a)({},e,{status:n});case _:return a=t.valid,n=t.status,Object(L.a)({},e,{unlocked:a,status:n});case w:return a=!!t.masterCodeValid,n=t.masterCodeValid?"Ready":"Error",Object(L.a)({},e,{unlocked:a,status:n});case D:return n=t.loading,Object(L.a)({},e,{status:n});case A:return n=t.validating?"Validating":n,Object(L.a)({},e,{status:n});default:return e}},P=a(15),U=a(39),V=a(8),G=a.n(V),J=a(18),B=a(36),H=a(37),q=a.n(H),z=G.a.mark(W),F="https://9w4qucosgf.execute-api.eu-central-1.amazonaws.com/default/CR-JS_team_M02a";function W(e){var t,a;return G.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=function(){return(a=Object(B.a)(G.a.mark(function t(){var a;return G.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.a.get(F+"?code="+e.masterCode);case 2:if(200!==(a=t.sent).status){t.next=6;break}t.next=7;break;case 6:throw new Error;case 7:return t.abrupt("return",a.data);case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)},t=function(){return a.apply(this,arguments)},n.next=4,t(e.masterCode);case 4:if(n.sent.sn!==e.serialNumber){n.next=10;break}return n.next=8,Object(J.b)({type:w,masterCodeValid:!0});case 8:n.next=12;break;case 10:return n.next=12,Object(J.b)({type:w,masterCodeValid:!1});case 12:case"end":return n.stop()}},z)}var Q=G.a.mark(Y),X=G.a.mark(Z);function Y(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.c)("CHECK_MASTER_CODE",W);case 2:case"end":return e.stop()}},Q)}function Z(){return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([Y()]);case 2:case"end":return e.stop()}},X)}var $=[],ee=Object(U.a)();$.push(ee);var te=P.a.apply(void 0,$),ae=Object(P.d)(M,te);ee.run(Z);var ne=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={passcode:[]},a.onKeyClick=a.onKeyClick.bind(Object(b.a)(Object(b.a)(a))),a.onDelayedCallback=a.onDelayedCallback.bind(Object(b.a)(Object(b.a)(a))),a.delayedCallback=C.a.debounce(a.submitPasscode,2e3),a.submitPasscode=a.submitPasscode.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"onDelayedCallback",value:function(e){e.persist(),this.delayedCallback(e)}},{key:"submitPasscode",value:function(){var e=this;if(this.state.passcode&&this.state.passcode.length>0){if(k(this.state.passcode))return this.props.dispatch(x("Service")),void this.setState({passcode:[]});"Service"!==this.props.status&&this.props.dispatch(T("Unlocking")),setTimeout(function(){var t;"Service"===e.props.status?e.props.dispatch((t=e.state.passcode,{type:S,masterCode:t,serialNumber:m})):e.state.passcode.length>0&&(k(e.state.passcode)?e.props.dispatch(x("Service")):f()?O(e.state.passcode)?e.props.dispatch(K(!0)):e.props.dispatch(K(!1)):y(e.state.passcode)?setTimeout(e.props.dispatch(R(!0,"Ready")),3e3):setTimeout(e.props.dispatch(R(!1,"Error")),3e3)),e.setState({passcode:[]})},3e3)}}},{key:"onKeyClick",value:function(e){var t=this;"L"===e&&"Service"!==this.props.status?(this.props.dispatch(T("Locking")),setTimeout(function(){t.props.dispatch(R(!1,"Ready"))},3e3)):this.setState({passcode:[].concat(Object(o.a)(this.state.passcode),[e])})}},{key:"render",value:function(){var e=this,t=j.map(function(t,a){return s.a.createElement(v,{key:a,keyNumber:t,onKeyClick:e.onKeyClick,onDelayedCallback:e.onDelayedCallback})});return s.a.createElement("div",{className:"safeKeyboard"},t)}}]),t}(n.Component);var se=Object(g.b)(function(e,t){var a=ae.getState();return{status:a.status?a.status:"Ready"}})(ne);function ce(e){return s.a.createElement("div",{className:"locking"},e.isUnlocked?s.a.createElement("p",null,"UNLOCKED"):s.a.createElement("p",null,"LOCKED"))}function re(e){return s.a.createElement("div",{className:"status"},s.a.createElement("p",null,e.status))}var oe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isIdle,a=e.isUnlocked,n=e.status,c=t?"safeDisplay backlightIdle":"safeDisplay";return s.a.createElement("div",{className:c},s.a.createElement(ce,{isUnlocked:a}),s.a.createElement(re,{status:n}))}}]),t}(n.Component);var ie=Object(g.b)(function(){var e=ae.getState();return{isUnlocked:e.unlocked,status:e.status?e.status:"Ready"}})(oe),ue=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hotelSafe"},s.a.createElement(ie,{isIdle:this.props.isIdle}),s.a.createElement(se,null),s.a.createElement("div",{className:"serialNumber"},"S/N: "+m.sn))}}]),t}(n.Component),le=a(38),de=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).idleTimer=null,a.onAction=a._onAction.bind(Object(b.a)(Object(b.a)(a))),a.onActive=a._onActive.bind(Object(b.a)(Object(b.a)(a))),a.onIdle=a._onIdle.bind(Object(b.a)(Object(b.a)(a))),a.onKeyClick=a.onKeyClick.bind(Object(b.a)(Object(b.a)(a))),a.submitPasscode=a.submitPasscode.bind(Object(b.a)(Object(b.a)(a))),a.state={isAppIdle:!1,passcode:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"_onAction",value:function(e){}},{key:"_onActive",value:function(e){this.setState({isAppIdle:!1})}},{key:"_onIdle",value:function(e){this.setState({isAppIdle:!0})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyClick)}},{key:"onKeyClick",value:function(e){var t=function(e){switch(console.log(e.keyCode),e.keyCode){case 49:return 1;case 50:return 2;case 51:return 3;case 52:return 4;case 53:return 5;case 54:return 6;case 55:return 7;case 56:return 8;case 57:return 9;case 48:return 0;case 106:return"*";case 76:return"L";case 13:return"ENTER";default:console.log("Not a valid key pressed")}}(e);"ENTER"===t?(console.log("ENTER"),this.submitPasscode(this.state.passcode,"nbt")):this.setState({passcode:[].concat(Object(o.a)(this.state.passcode),[t])})}},{key:"submitPasscode",value:function(){k(this.state.passcode)?console.log("service"):f()?O(this.state.passcode)?console.log("validan "):console.log("validan NOT"):y(this.state.passcode),this.setState({passcode:[]})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"application"},s.a.createElement(le.a,{ref:function(t){e.idleTimer=t},element:document,onActive:this.onActive,onIdle:this.onIdle,onAction:this.onAction,debounce:250,timeout:5e3}),s.a.createElement(g.a,{store:ae},s.a.createElement(ue,{isIdle:this.state.isAppIdle})))}}]),t}(n.Component);r.a.render(s.a.createElement(de,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.8ce7cbc3.chunk.js.map