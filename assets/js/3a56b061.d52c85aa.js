"use strict";(self.webpackChunkpre_kdu=self.webpackChunkpre_kdu||[]).push([["449"],{6864:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"tools/linters-java","title":"Linters for Java","description":"After you run the init script, your repo has been initialised with Linters and Static checkers for all your assignments.","source":"@site/docs/tools/linters-java.md","sourceDirName":"tools","slug":"/tools/linters-java","permalink":"/kickdrum-university/docs/tools/linters-java","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Exercise","permalink":"/kickdrum-university/docs/scm/exercise"},"next":{"title":"Linters for Javascript/Typescript","permalink":"/kickdrum-university/docs/tools/linters-js-ts"}}'),i=n("5893"),r=n("65");let o={sidebar_position:1},a="Linters for Java",l={},c=[];function d(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"linters-for-java",children:"Linters for Java"})}),"\n",(0,i.jsx)(t.p,{children:"After you run the init script, your repo has been initialised with Linters and Static checkers for all your assignments."}),"\n",(0,i.jsxs)(t.p,{children:["Know more about what linters are ",(0,i.jsx)(t.a,{href:"https://www.sonarsource.com/learn/linter/#:~:text=A%20linter%20works%20through%20the,the%20user%20about%20the%20issue.",children:"here"})]}),"\n",(0,i.jsx)(t.p,{children:"For Java Assignments there are primarily 2 tools involved -"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://pmd.github.io/",children:"PMD"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://checkstyle.sourceforge.io/",children:"Checkstyle"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These will enforce certain basic coding conventions for you guys to be aware of before you step into KDU."}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["The Java Assignments use Maven for Project Management. You can explore more about Maven ",(0,i.jsx)(t.a,{href:"https://www.baeldung.com/maven",children:"here"})]}),(0,i.jsxs)(t.p,{children:["A typical Java Project in Maven looks like this -\n",(0,i.jsx)(t.img,{alt:"Project",src:n(5222).Z+"",width:"834",height:"486"})]})]}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["While these linters would be run before each commit, you can manually run them for Java projects and avoid the committing loop by executing ",(0,i.jsx)(t.code,{children:"./mvnw clean verify"}),". Make sure you are inside the project folder before running these commands."]}),(0,i.jsxs)(t.p,{children:["If you want a detailed report of where your code is going wrong and debug it, run ",(0,i.jsx)(t.code,{children:"./mvnw clean site"}),".\nThis would output something like this - ",(0,i.jsx)(t.code,{children:"Checkstyle and PMD Report generated at /Users/asishmahapatra/Desktop/Developer/Company/assignments/java/target/site/project-reports.html"})," which you can copy paste and open in your browser."]}),(0,i.jsxs)(t.p,{children:["You might see .xml file as well instead of .html in the console output ",(0,i.jsx)(t.code,{children:"Failed to execute goal org.apache.maven.plugins:maven-pmd-plugin:3.23.0:check (default) on project java: You have 6 PMD violations. For more details see: /Users/asishmahapatra/Desktop/Developer/Company/assignments/java/target/pmd.xml"}),". You'll need to open it in a code editor of your choice. That'll also have similar details as the .html report."]}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["For Windows folks, You will need to select Git Bash as your terminal prompt in VS Code or Intellij.","\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.strong,{children:"VSCode"}),"\n",(0,i.jsx)(t.img,{alt:"git_bash",src:n(4274).Z+"",width:"2392",height:"608"}),"\n",(0,i.jsx)(t.strong,{children:"Intellij"}),"\n",(0,i.jsx)(t.img,{alt:"git_bash",src:n(972).Z+"",width:"1172",height:"784"})]}),"\n",(0,i.jsxs)(t.li,{children:["If that doesn't work then you need to make sure you use the Command Prompt instead of Powershell (default). The command will look slightly different in that case. Notice the initial slash.","\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.strong,{children:"VSCode"}),"\n",(0,i.jsx)(t.img,{alt:"command_prompt",src:n(2195).Z+"",width:"2392",height:"608"}),"\n",(0,i.jsx)(t.strong,{children:"Intellij"}),"\n",(0,i.jsx)(t.img,{alt:"command_prompt",src:n(13).Z+"",width:"1172",height:"784"})]}),"\n"]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5222:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/folder_structure-819d444955d032f9fee6136078472ccb.png"},13:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/command_prompt_intellij-f5237aeaeaa52f09f87a8688dbc27b83.png"},2195:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/command_prompt_vscode-3fe6d1d546c84e3d84624d536a8fd10c.png"},972:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/git_bash_intellij-dc57dcc2d211b26cd980cc7bb23d6a6b.png"},4274:function(e,t,n){n.d(t,{Z:function(){return s}});let s=n.p+"assets/images/git_bash_vscode-500ae36c25639de58c9d685af3cf7bfb.png"},65:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(7294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);