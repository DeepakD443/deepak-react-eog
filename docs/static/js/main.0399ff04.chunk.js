(this["webpackJsonpeog-react-visualization-base"]=this["webpackJsonpeog-react-visualization-base"]||[]).push([[0],{230:function(e,t,a){e.exports=a(403)},403:function(e,t,a){"use strict";a.r(t);var r=a(218),n=a(0),c=a.n(n),i=a(21),o=a.n(i),l=a(30),u=a(102),s=a(219),m=a(29),p=a.n(m),d=a(47),v=a(68),f=a(79),b=Object(f.a)({name:"weather",initialState:{temperatureinCelsius:0,temperatureinFahrenheit:0,description:"",locationName:""},reducers:{weatherDataRecevied:function(e,t){var a=t.payload,r=a.description,n=a.locationName,c=a.temperatureinCelsius;e.temperatureinCelsius=c,e.temperatureinFahrenheit=9*c/5+32,e.description=r,e.locationName=n},weatherApiErrorReceived:function(e,t){return e}}}),h=b.reducer,E=b.actions,O=p.a.mark(j),g=p.a.mark(w);function j(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(v.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),O)}function w(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(E.weatherApiErrorReceived.type,j);case 2:case"end":return e.stop()}}),g)}var y=a(138),M=a.n(y),D=Object(f.a)({name:"metrics",initialState:{allMetrics:[],multipleMeasurements:{},liveData:{}},reducers:{allMetricsDataRecevied:function(e,t){var a=t.payload.getMetrics;e.allMetrics=a},multipleMeasurementsDataRecevied:function(e,t){e.multipleMeasurements=t.payload},metricLiveDataRecevied:function(e,t){var a;e.liveData=null===(a=[t.payload])||void 0===a?void 0:a.map((function(e){return{[e.metric]:e.value,at:M()(parseInt(e.at)).format("LTS"),unit:e.unit}}))[0]},metricsApiErrorReceived:function(e,t){return e}}}),x=D.reducer,R=D.actions,k=p.a.mark(N),A=p.a.mark(S);function N(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(v.b.error,"Error Received: ".concat(e.payload.error));case 2:case"end":return t.stop()}}),k)}function S(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(R.metricsApiErrorReceived.type,N);case 2:case"end":return e.stop()}}),A)}var C=p.a.mark(q);function q(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.b)(w);case 2:return e.next=4,Object(d.b)(S);case 4:case"end":return e.stop()}}),C)}var L={weather:h,metrics:x},F=Object(l.combineReducers)(L),B=a(52),W=a(217),$=a(438),z=a(439),T=(a(240),a(433)),G=a(431),I=a(432),J=a(430),K=a(25),Q=a(100),H=a(46),P=a(442),V=a(443),Z=a(440),U=a(19),X=Object(U.a)((function(e){return{root:{background:e.palette.secondary.main},label:{color:e.palette.primary.main}}}))(Z.a),Y=Object(Q.a)({url:"https://react.eogresources.com/graphql"}),_=function(e){var t=e.weather;return{temperatureinFahrenheit:t.temperatureinFahrenheit,description:t.description,locationName:t.locationName}},ee=function(){return c.a.createElement(H.a,{value:Y},c.a.createElement(te,null))},te=function(){var e=Object(P.a)(),t={latitude:e.latitude||29.7604,longitude:e.longitude||-95.3698},a=Object(B.b)(),r=Object(B.c)(_),i=r.temperatureinFahrenheit,o=r.description,l=r.locationName,u=Object(H.b)({query:"\nquery($latLong: WeatherQuery!) {\n  getWeatherForLocation(latLong: $latLong) {\n    description\n    locationName\n    temperatureinCelsius\n  }\n}\n",variables:{latLong:t}}),s=Object(K.a)(u,1)[0],m=s.fetching,p=s.data,d=s.error;return Object(n.useEffect)((function(){if(d)a(E.weatherApiErrorReceived({error:d.message}));else if(p){var e=p.getWeatherForLocation;a(E.weatherDataRecevied(e))}}),[a,p,d]),m?c.a.createElement(V.a,null):c.a.createElement(X,{label:"Weather in ".concat(l,": ").concat(o," and ").concat(i,"\xb0")})},ae=Object(J.a)({grow:{flexGrow:1}}),re=function(){var e=ae();return c.a.createElement(G.a,{position:"static"},c.a.createElement(I.a,null,c.a.createElement(T.a,{variant:"h6",color:"inherit",className:e.grow},"deepak's"," EOG React Visualization Assessment"),c.a.createElement(ee,null)))},ne=Object(J.a)({wrapper:{height:"100vh"}}),ce=function(e){var t=e.children,a=ne();return n.createElement("div",{className:a.wrapper},t)},ie=a(436),oe=a(437),le=a(441),ue=a(220),se=a(203),me=a(144),pe=a(48),de=a(138),ve=[],fe=[],be={},he=Object(J.a)({wrapper:{width:"100%",height:"70vh",minHeight:"300px"}});function Ee(e){var t=new Map;return e.forEach((function(e){var a=e.at;t.has(a)?t.set(a,Object(me.a)(Object(me.a)({},e),t.get(a))):t.set(a,e)})),Array.from(t.values())}var Oe=function(e){var t=he(),a=e.data,r=e.liveData,i=e.selectedChartOptions;Object(n.useEffect)((function(){!function(e,t){for(var a=0;a<e.length;a++)for(var r=0;r<e[a].measurements.length;r++)ve.push({at:de(e[a].measurements[r].at).format("LTS"),[e[a].measurements[r].metric]:e[a].measurements[r].value});ve.filter((function(e){return be.hasOwnProperty(e.at)?(be[e.at].data.push(e),!1):(Array.isArray(e)||(e.data=[e.data]),be[e.at]=e,!0)})),fe=Ee(ve)}(a)}),[a]),Object(n.useEffect)((function(){fe.push(r),fe=Ee(fe)}),[r]);var o=["#16302B","#694873","#8B728E","#85B79D","#C0E5C8","#5E5D5C","#453643","#28112B"];return 0===i.length?c.a.createElement("p",{style:{textAlign:"center"}},"Select a metric from the dropdown"):c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:t.wrapper},c.a.createElement(pe.e,null,c.a.createElement(pe.d,{data:fe,margin:{top:70,right:70,left:70,bottom:70}},c.a.createElement(pe.g,{dataKey:"at",tickCount:30}),c.a.createElement(pe.h,{type:"number",domain:["auto","auto"],tickCount:30,scale:"linear",padding:{top:10,bottom:10}}),c.a.createElement(pe.a,{strokeDasharray:"3 3"}),c.a.createElement(pe.b,null),c.a.createElement(pe.f,null),null===i||void 0===i?void 0:i.map((function(e,t){return c.a.createElement(pe.c,{type:"monotone",key:e.value,dataKey:e.value,stroke:o[t],dot:!1,isAnimationActive:!1})}))))))},ge=a(434),je=a(435),we=Object(J.a)({root:{width:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),ye=function(e){var t=we(),a=Object(n.useState)({metric:"",unit:"",value:""}),r=Object(K.a)(a,2),i=r[0],o=r[1],l=[e.liveData].find((function(t){return t.metric===e.info.value})),u=void 0!==l?l:i;return Object(n.useEffect)((function(){void 0!==u&&o(u)}),[u]),c.a.createElement(ge.a,{className:t.root},c.a.createElement(je.a,null,c.a.createElement(T.a,{variant:"h5",component:"h2"},e.info.label),c.a.createElement(T.a,{className:t.pos,color:"textSecondary"},"".concat(i.value," - ").concat(i.unit))))},Me=Object(se.a)(),De=(new Date).valueOf(),xe=Object(J.a)((function(e){return Object(le.a)({select:{padding:e.spacing(2)}})})),Re=function(e){var t=e.metrics;return{allMetrics:t.allMetrics,multipleMeasurements:t.multipleMeasurements,liveData:t.liveData}},ke=function(){var e=xe(),t=Object(B.b)(),a=Object(n.useState)([]),r=Object(K.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)([]),u=Object(K.a)(l,2),s=u[0],m=u[1],p=Object(B.c)(Re),d=p.allMetrics,v=p.multipleMeasurements,f=p.liveData,b=Object(H.b)({query:"{\n  getMetrics\n  }\n"}),h=Object(K.a)(b,1)[0],E=Object(H.b)({query:"\nquery($input: [MeasurementQuery]){\n  getMultipleMeasurements(input: $input) {\n    metric\n    measurements {\n     at\n     value\n     metric\n     unit\n    }\n  }\n}",variables:{input:d.map((function(e){return{metricName:e,after:De-18e5,before:De}}))}}),O=Object(K.a)(E,1)[0],g=Object(H.c)({query:"\n  subscription {\n    newMeasurement{\n      metric\n      at\n      value\n      unit\n    }\n  }\n"}),j=Object(K.a)(g,1)[0];return Object(n.useEffect)((function(){var e=[];d.forEach((function(t){e.push({value:t,label:t.replace(/([A-Z])/g," $1")})})),m(e)}),[d]),Object(n.useEffect)((function(){var e=h.data,a=h.error;a?t(R.metricsApiErrorReceived({error:null===a||void 0===a?void 0:a.message})):e&&t(R.allMetricsDataRecevied(e))}),[t,h]),Object(n.useEffect)((function(){var e=O.data,a=O.error;a?t(R.metricsApiErrorReceived({error:null===a||void 0===a?void 0:a.message})):e&&t(R.multipleMeasurementsDataRecevied(null===e||void 0===e?void 0:e.getMultipleMeasurements))}),[t,O]),Object(n.useEffect)((function(){var e=j.data,a=j.error;a?t(R.metricsApiErrorReceived({error:null===a||void 0===a?void 0:a.message})):e&&t(R.metricLiveDataRecevied(null===e||void 0===e?void 0:e.newMeasurement))}),[t,j]),(null===O||void 0===O?void 0:O.fetching)?c.a.createElement(V.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(ie.a,{maxWidth:"lg"},c.a.createElement(oe.a,{item:!0,xs:10,className:e.select},c.a.createElement(ue.a,{onChange:function(e){o(null===e?[]:e)},closeMenuOnSelect:!0,components:Me,isMulti:!0,options:s}))),c.a.createElement(oe.a,{container:!0,spacing:1,className:e.select},null===i||void 0===i?void 0:i.map((function(e,t){return c.a.createElement(oe.a,{key:t,item:!0,xs:2},c.a.createElement(ye,{info:e,liveData:j.data.newMeasurement}))}))),c.a.createElement(oe.a,{container:!0,spacing:1,className:e.select}),c.a.createElement(Oe,{data:v,liveData:f,selectedChartOptions:i}))},Ae=function(){var e=Object(u.composeWithDevTools)({}),t=Object(s.a)(),a=Object(l.applyMiddleware)(t),r=Object(l.createStore)(F,e(a));return t.run(q),r}(),Ne=Object(W.a)({palette:{primary:{main:"rgb(39,49,66)"},secondary:{main:"rgb(197,208,222)"},background:{default:"rgb(226,231,238)"}}}),Se=function(){return c.a.createElement($.a,{theme:Ne},c.a.createElement(z.a,null),c.a.createElement(B.a,{store:Ae},c.a.createElement(ce,null,c.a.createElement(re,null),c.a.createElement(ke,null),c.a.createElement(v.a,null))))},Ce=new(a(216).SubscriptionClient)("wss://react.eogresources.com/graphql",{reconnect:!0}),qe=Object(Q.a)({url:"https://react.eogresources.com/graphql",exchanges:[].concat(Object(r.a)(Q.b),[Object(Q.c)({forwardSubscription:function(e){return Ce.request(e)}})])});o.a.render(c.a.createElement(H.a,{value:qe},c.a.createElement(Se,null)),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.0399ff04.chunk.js.map