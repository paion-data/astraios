"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=t(5893),o=t(1151);const i={sidebar_position:11,title:"Setup"},a=void 0,r={id:"setup",title:"Setup",description:"This section discusses the one-time setup in order to develop [Astraios].",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/astraios/docs/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/paion-data/astraios/tree/master/docs/docs/setup.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Performance",permalink:"/astraios/docs/performance"},next:{title:"Development",permalink:"/astraios/docs/development"}},l={},c=[{value:"Prepare for Local Development",id:"prepare-for-local-development",level:2},{value:"Installing Java &amp; Maven (on Mac)",id:"installing-java--maven-on-mac",level:3},{value:"Installing Docker Engine",id:"installing-docker-engine",level:3},{value:"Getting Source Code",id:"getting-source-code",level:2},{value:"Syncing up with Astraios&#39;s Code Styles with IntelliJ",id:"syncing-up-with-astraioss-code-styles-with-intellij",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This section discusses the one-time setup in order to develop ",(0,s.jsx)(n.a,{href:"https://paion-data.github.io/astraios/",children:"Astraios"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prepare-for-local-development",children:"Prepare for Local Development"}),"\n",(0,s.jsx)(n.h3,{id:"installing-java--maven-on-mac",children:"Installing Java & Maven (on Mac)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"brew update\nbrew install openjdk@17\n"})}),"\n",(0,s.jsx)(n.p,{children:"At the end of the last command prompt, something like the below will show up:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'For the system Java wrappers to find this JDK, symlink it with\n  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk\n\nopenjdk@17 is keg-only, which means it was not symlinked into /usr/local,\nbecause this is an alternate version of another formula.\n\nIf you need to have openjdk@17 first in your PATH, run:\n  echo \'export PATH=".../openjdk@17/bin:$PATH"\' >> .../.bash_profile\n\nFor compilers to find openjdk@17 you may need to set:\n  export CPPFLAGS="-I.../openjdk@17/include"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Make sure to execute the ",(0,s.jsx)(n.code,{children:"sudo ln -sfn"}),", ",(0,s.jsx)(n.code,{children:"echo 'export PATH=..."}),", and the ",(0,s.jsx)(n.code,{children:"export CPPFLAGS="})," commands above"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Maven uses a separate JDK version, which can be seen via ",(0,s.jsx)(n.code,{children:"mvn -v"}),". If it's not JDK 17, we should have Maven point\nto our JDK 17 using ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/a/2503679",children:"JAVA_HOME"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ /usr/libexec/java_home\n/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n\n$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"If we see something similar after typing the command with the version flag below we're good to go"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ java --version\nopenjdk 17.0.10 2021-01-19\nOpenJDK Runtime Environment (build 17.0.10+9)\nOpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installing-docker-engine",children:"Installing Docker Engine"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://paion-data.github.io/astraios/",children:"Astraios"})," has ",(0,s.jsx)(n.a,{href:"https://github.com/paion-data/astraios/blob/master/src/test/groovy/com/paiondata/astraios/application/ResourceConfigITSpec.groovy",children:"Docker-based integration tests"}),"; it also supports\n",(0,s.jsx)(n.a,{href:"development#running-astraios-in-docker-compose",children:"running in Docker Compose"}),". Docker can be installed by following its\n",(0,s.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"official instructions"})]}),"\n",(0,s.jsx)(n.h2,{id:"getting-source-code",children:"Getting Source Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone git@github.com:paion-data/astraios.git\ncd astraios\n"})}),"\n",(0,s.jsx)(n.h3,{id:"syncing-up-with-astraioss-code-styles-with-intellij",children:"Syncing up with Astraios's Code Styles with IntelliJ"}),"\n",(0,s.jsxs)(n.p,{children:["For the moment, we have distilled the most important code style conventions with respect to Astraios' code as\nIntelliJ settings. If IntelliJ is used for IDE, we may import these code style settings by importing the\n",(0,s.jsx)(n.a,{href:"https://github.com/paion-data/astraios/blob/master/Astraios-Project-intellij-code-style.xml",children:"Astraios-Project-intellij-code-style.xml"}),' file in the root of the repo. The setting for the\nproject will appear as a new Scheme named "Astraios-Project" under IDE\'s ',(0,s.jsx)(n.code,{children:"Editor -> Code Style"})," section."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(7294);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);