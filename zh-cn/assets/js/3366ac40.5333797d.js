"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[140],{7460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=n(5893),r=n(1151);const a={sidebar_position:3,title:"\u5f00\u53d1"},i=void 0,c={id:"development",title:"\u5f00\u53d1",description:"[//]: # (Copyright Paion Data)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/development.md",sourceDirName:".",slug:"/development",permalink:"/zh-cn/docs/development",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/development.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5f00\u53d1"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e",permalink:"/zh-cn/docs/setup"},next:{title:"\u914d\u7f6e",permalink:"/zh-cn/docs/configuration"}},d={},o=[{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:2},{value:"\u6253\u5305",id:"\u6253\u5305",level:2},{value:"\u5728 Standalone Jetty \u4e2d\u8fd0\u884c Webservice (\u751f\u4ea7\u73af\u5883)",id:"\u5728-standalone-jetty-\u4e2d\u8fd0\u884c-webservice-\u751f\u4ea7\u73af\u5883",level:2},{value:"\u4e0b\u8f7d Jetty",id:"\u4e0b\u8f7d-jetty",level:3},{value:"\u8bbe\u7f6e Standalone Jetty",id:"\u8bbe\u7f6e-standalone-jetty",level:3},{value:"\u8fd0\u884c Webservice",id:"\u8fd0\u884c-webservice",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"\u8fd0\u884c\u6d4b\u8bd5",children:"\u8fd0\u884c\u6d4b\u8bd5"}),"\n",(0,s.jsx)(t.p,{children:"\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mvn clean verify\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5bf9\u4e8eIT\u6d4b\u8bd5\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/testcontainers-java/",children:"Testcontainers"})," \u800c\u4e0d\u662f ",(0,s.jsx)(t.a,{href:"https://mysql.jcabi.com/",children:"jcabi-mysql"}),"\uff0c\u56e0\u4e3a\u540e\u8005\u5f88\u96be\u914d\u7f6e\u548c\u8c03\u8bd5\uff0c\u5e76\u4e14 ",(0,s.jsx)(t.a,{href:"https://qubitpi.github.io/testcontainers-java/",children:"Testcontainers"})," \u652f\u6301\u66f4\u591a\u7c7b\u578b\u7684\u6570\u636e\u5e93\uff0c\u4f8b\u5982\nmongo"]}),"\n",(0,s.jsx)(t.h2,{id:"\u6253\u5305",children:"\u6253\u5305"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mvn clean package\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5728 target \u76ee\u5f55\u4e0b\u4f1a\u751f\u6210\u4e00\u4e2a\u540d\u4e3a astraios-1.0-SNAPSHOT.war \u7684 ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/WAR_(file_format)",children:"WAR \u6587\u4ef6"}),"\uff0c\n\u4ee5\u4fbf",(0,s.jsx)(t.a,{href:"#running-in-standalone-jetty",children:"\u5728 Jetty \u4e2d\u8fd0\u884c"})]}),"\n",(0,s.jsx)(t.h2,{id:"\u5728-standalone-jetty-\u4e2d\u8fd0\u884c-webservice-\u751f\u4ea7\u73af\u5883",children:"\u5728 Standalone Jetty \u4e2d\u8fd0\u884c Webservice (\u751f\u4ea7\u73af\u5883)"}),"\n",(0,s.jsx)(t.h3,{id:"\u4e0b\u8f7d-jetty",children:"\u4e0b\u8f7d Jetty"}),"\n",(0,s.jsxs)(t.p,{children:["\u5728",(0,s.jsx)(t.a,{href:"https://www.eclipse.org/jetty/download.php",children:"\u4e0b\u8f7d\u9875\u9762"}),"\uff0c\u9009\u62e9\u4e00\u4e2a ",(0,s.jsx)(t.code,{children:".tgz"})," \u53d1\u884c\u7248\u3002",(0,s.jsx)(t.strong,{children:"\u9009\u62e9\u4e0e JDK \u7248\u672c\u5339\u914d\u7684 Jetty \u670d\u52a1\u5668\u7248\u672c\u975e\u5e38\u91cd\u8981"}),"\u3002\u5bf9\u4e8e JDK ",(0,s.jsx)(t.strong,{children:"17"}),"\uff0c\u7ecf\u6d4b\u8bd5\nJetty ",(0,s.jsx)(t.em,{children:"11.0.15"})," \u53ef\u4ee5\u5de5\u4f5c\u3002"]}),"\n",(0,s.jsx)(t.p,{children:"\u56e0\u6b64\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u201c11.0.15\u201d\u7248\u672c\u4f5c\u4e3a\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error loading download-jetty.png",src:n(3360).Z+"",width:"3584",height:"1724"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5c06 ",(0,s.jsx)(t.code,{children:"tar.gz"})," \u6587\u4ef6\u653e\u5165\u60a8\u9009\u62e9\u7684\u5b89\u88c5\u8def\u5f84\u7684\u4f4d\u7f6e\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u63d0\u53d6 Jetty \u4e8c\u8fdb\u5236\u6587\u4ef6"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"tar -xzvf jetty-home-11.0.15.tar.gz\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u63d0\u53d6\u7684\u76ee\u5f55\u540d\u79f0 ",(0,s.jsx)(t.em,{children:"jetty-home-11.0.15"})," \u662fJetty\u53d1\u884c\u7248\u3002\u6211\u4eec\u5c06\u6b64\u76ee\u5f55\u79f0\u4e3a ",(0,s.jsx)(t.strong,{children:"$JETTY_HOME"}),"\uff0c\u4e0d\u5e94\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002"]}),"\n",(0,s.jsx)(t.h3,{id:"\u8bbe\u7f6e-standalone-jetty",children:"\u8bbe\u7f6e Standalone Jetty"}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u7684 ",(0,s.jsx)(t.a,{href:"#packaging",children:"WAR \u6587\u4ef6"})," \u5c06\u88ab\u653e\u7f6e\u5230 Jetty \u53ef\u4ee5\u62fe\u53d6\u5e76\u8fd0\u884c\u7684\u76ee\u5f55\u4e2d\u3002\u6211\u4eec\u5c06\u6b64\u76ee\u5f55\u79f0\u4e3a ",(0,s.jsx)(t.strong,{children:"$JETTY_BASE"}),"\uff0c\u5b83\u901a\u5e38\u4e0e ",(0,s.jsx)(t.em,{children:"$JETTY_HOME"}),"\n\u4e0d\u540c\u3002",(0,s.jsx)(t.em,{children:"$JETTY_BASE"})," \u8fd8\u5305\u542b\u5bb9\u5668\u8fd0\u884c\u65f6\u7684\u914d\u7f6e\u3002\u7b80\u800c\u8a00\u4e4b\uff0cStandalone Jetty \u5bb9\u5668\u5c06\u8bbe\u7f6e\u4e3a\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"export JETTY_HOME=/path/to/jetty-home-11.0.15\nmkdir -p /path/to/jetty-base\ncd /path/to/jetty-base\njava -jar $JETTY_HOME/start.jar --add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp,websocket\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5176\u4e2d ",(0,s.jsx)(t.code,{children:"/path/to/"})," \u662f\u5305\u542b ",(0,s.jsx)(t.code,{children:"jetty-home-11.0.15"})," \u6587\u4ef6\u5939\u7684\u76ee\u5f55\u7684\u7edd\u5bf9\u8def\u5f84"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"--add-module=annotations,server,http,deploy,servlet,webapp,resources,jsp,websocket"})," \u5c31\u662f\u6211\u4eec\u914d\u7f6e Jetty \u5bb9\u5668\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,s.jsxs)(t.p,{children:["\u6700\u540e\uff0c\u5c06 ",(0,s.jsx)(t.a,{href:"#packaging",children:"WAR \u6587\u4ef6"})," \u653e\u5165 ",(0,s.jsx)(t.strong,{children:"/path/to/jetty-base/webapps"})," \u76ee\u5f55\u5e76\u5c06 WAR \u6587\u4ef6\u91cd\u547d\u540d\u4e3a ",(0,s.jsx)(t.strong,{children:"ROOT.war"}),"\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mv /path/to/war-file /path/to/jetty-base/webapps/ROOT.war\n"})}),"\n",(0,s.jsx)(t.h3,{id:"\u8fd0\u884c-webservice",children:"\u8fd0\u884c Webservice"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"java -jar $JETTY_HOME/start.jar\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Webservice \u5c06\u5728 ",(0,s.jsx)(t.strong,{children:"8080"})," \u7aef\u53e3\u4e0a\u8fd0\u884c\uff0c\u60a8\u5c06\u770b\u5230\u60a8\u63d2\u5165\u7684\u6570\u636e"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},3360:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/download-jetty-ad92ade85dc5fc42515c00d578a54eb4.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var s=n(7294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);