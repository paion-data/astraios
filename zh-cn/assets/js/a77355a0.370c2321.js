"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[370],{3307:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=s(5893),a=s(1151);const i={sidebar_position:2,title:"\u8bbe\u7f6e"},o=void 0,r={id:"setup",title:"\u8bbe\u7f6e",description:"\u672c\u8282\u8ba8\u8bba\u5f00\u53d1 [Astraios] \u7684\u4e00\u6b21\u6027\u8bbe\u7f6e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/setup.md",sourceDirName:".",slug:"/setup",permalink:"/astraios/zh-cn/docs/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8bbe\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Astraios \u6587\u6863",permalink:"/astraios/zh-cn/docs/intro"},next:{title:"\u5f00\u53d1",permalink:"/astraios/zh-cn/docs/development"}},c={},d=[{value:"\u4e3a\u672c\u5730\u5f00\u53d1\u505a\u597d\u51c6\u5907",id:"\u4e3a\u672c\u5730\u5f00\u53d1\u505a\u597d\u51c6\u5907",level:2},{value:"\u5b89\u88c5 Java &amp; Maven (Mac\u7248)",id:"\u5b89\u88c5-java--maven-mac\u7248",level:3},{value:"\u5b89\u88c5 Docker Engine",id:"\u5b89\u88c5-docker-engine",level:3},{value:"\u83b7\u53d6\u6e90\u4ee3\u7801",id:"\u83b7\u53d6\u6e90\u4ee3\u7801",level:2},{value:"\u4e0e IntelliJ \u540c\u6b65 Astraios \u7684\u4ee3\u7801\u98ce\u683c",id:"\u4e0e-intellij-\u540c\u6b65-astraios-\u7684\u4ee3\u7801\u98ce\u683c",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u672c\u8282\u8ba8\u8bba\u5f00\u53d1 ",(0,t.jsx)(n.a,{href:"https://paion-data.github.io/astraios/",children:"Astraios"})," \u7684\u4e00\u6b21\u6027\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4e3a\u672c\u5730\u5f00\u53d1\u505a\u597d\u51c6\u5907",children:"\u4e3a\u672c\u5730\u5f00\u53d1\u505a\u597d\u51c6\u5907"}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5-java--maven-mac\u7248",children:"\u5b89\u88c5 Java & Maven (Mac\u7248)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"brew update\nbrew install openjdk@17\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u6700\u540e\u4e00\u4e2a\u547d\u4ee4\u63d0\u793a\u7b26\u7684\u672b\u5c3e\uff0c\u5c06\u663e\u793a\u5982\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'For the system Java wrappers to find this JDK, symlink it with\n  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk\n\nopenjdk@17 is keg-only, which means it was not symlinked into /usr/local,\nbecause this is an alternate version of another formula.\n\nIf you need to have openjdk@17 first in your PATH, run:\n  echo \'export PATH=".../openjdk@17/bin:$PATH"\' >> .../.bash_profile\n\nFor compilers to find openjdk@17 you may need to set:\n  export CPPFLAGS="-I.../openjdk@17/include"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u786e\u4fdd\u6267\u884c\u4e0a\u9762\u7684 ",(0,t.jsx)(n.code,{children:"sudo ln -sfn"}),"\u3001 ",(0,t.jsx)(n.code,{children:"echo 'export PATH=..."}),"\u3001 \u548c ",(0,t.jsx)(n.code,{children:"export CPPFLAGS="})," \u547d\u4ee4"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Maven \u4f7f\u7528\u5355\u72ec\u7684 JDK \u7248\u672c\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"mvn -v"})," \u67e5\u770b\u3002\u5982\u679c\u4e0d\u662f JDK 17\uff0c\u6211\u4eec\u5e94\u8be5\u4f7f\u7528\n",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/a/2503679",children:"JAVA_HOME"})," \u8ba9 Maven \u6307\u5b9a\u6211\u4eec\u7684 JDK 17 \uff1a"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ /usr/libexec/java_home\n/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n\n$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u5728\u8f93\u5165\u67e5\u770b\u7248\u672c\u7684\u547d\u4ee4\u540e\u770b\u5230\u7c7b\u4f3c\u7684\u5185\u5bb9\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5f00\u59cb\u4e86"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ java --version\nopenjdk 17.0.10 2021-01-19\nOpenJDK Runtime Environment (build 17.0.10+9)\nOpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5-docker-engine",children:"\u5b89\u88c5 Docker Engine"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://paion-data.github.io/astraios/",children:"Astraios"})," \u6709\u57fa\u4e8e ",(0,t.jsx)(n.a,{href:"https://github.com/paion-data/astraios/blob/master/src/test/groovy/com/paiondata/astraios/application/ResourceConfigITSpec.groovy",children:"Docker \u7684\u96c6\u6210\u6d4b\u8bd5"}),"\uff1b\u5b83\u8fd8\u652f\u6301\u5728 ",(0,t.jsx)(n.a,{href:"development#running-astraios-in-docker-compose",children:"Docker Compose"})," \u4e2d\u8fd0\u884c\u3002\nDocker \u53ef\u4ee5\u6309\u7167",(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"\u5b98\u65b9\u8bf4\u660e"}),"\u8fdb\u884c\u5b89\u88c5"]}),"\n",(0,t.jsx)(n.h2,{id:"\u83b7\u53d6\u6e90\u4ee3\u7801",children:"\u83b7\u53d6\u6e90\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:paion-data/astraios.git\ncd astraios\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0e-intellij-\u540c\u6b65-astraios-\u7684\u4ee3\u7801\u98ce\u683c",children:"\u4e0e IntelliJ \u540c\u6b65 Astraios \u7684\u4ee3\u7801\u98ce\u683c"}),"\n",(0,t.jsxs)(n.p,{children:["\u76ee\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u63d0\u70bc\u4e86\u4e0eAstraios\u7684\u4ee3\u7801\u76f8\u5173\u7684\u6700\u91cd\u8981\u7684\u4ee3\u7801\u98ce\u683c\u7ea6\u5b9a\uff0c\u4f5c\u4e3aIntelliJ\u7684\u8bbe\u7f6e\u3002\u5982\u679cIntelliJ\u7528\u4e8eIDE\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5bfc\u5165repo\u6839\u76ee\u5f55\u4e0b\u7684\n",(0,t.jsx)(n.a,{href:"https://github.com/paion-data/astraios/blob/master/Astraios-Project-intellij-code-style.xml",children:"Astraios-Project-intellij-code-style.xml"})," \u6587\u4ef6\u6765\u5bfc\u5165\u8fd9\u4e9b\u4ee3\u7801\u98ce\u683c\u8bbe\u7f6e\u3002\u9879\u76ee\u7684\u8bbe\u7f6e\u5c06\u5728IDE\u7684 ",(0,t.jsx)(n.code,{children:"\u7f16\u8f91\u5668->\u4ee3\u7801\u6837\u5f0f"}),"\n\u90e8\u5206\u4e0b\u663e\u793a\u4e3a\u540d\u4e3a \u201cAstraios-Project\u201d \u7684\u65b0\u65b9\u6848\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(7294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);