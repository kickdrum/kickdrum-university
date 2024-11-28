"use strict";(self.webpackChunkpre_kdu=self.webpackChunkpre_kdu||[]).push([["154"],{4543:function(e,s,n){n.r(s),n.d(s,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"intro-database/tutorials","title":"Tutorials","description":"Getting started with SQL","source":"@site/docs/intro-database/tutorials.md","sourceDirName":"intro-database","slug":"/intro-database/tutorials","permalink":"/pre-kdu-2025/docs/intro-database/tutorials","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Intro To Databases","permalink":"/pre-kdu-2025/docs/category/intro-to-databases"},"next":{"title":"Exercise","permalink":"/pre-kdu-2025/docs/intro-database/exercise"}}'),t=n("5893"),r=n("65");let i={sidebar_position:2},a="Tutorials",o={},c=[{value:"Getting started with SQL",id:"getting-started-with-sql",level:2},{value:"Install MySQL",id:"install-mysql",level:3},{value:"Install PostgreSQL",id:"install-postgresql",level:3},{value:"Learn SQL",id:"learn-sql",level:3},{value:"Core Topics",id:"core-topics",level:3},{value:"Tables &amp; Views",id:"tables--views",level:4},{value:"MySQL Clauses",id:"mysql-clauses",level:4}];function d(e){let s={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"tutorials",children:"Tutorials"})}),"\n",(0,t.jsx)(s.h2,{id:"getting-started-with-sql",children:"Getting started with SQL"}),"\n",(0,t.jsx)(s.h3,{id:"install-mysql",children:"Install MySQL"}),"\n",(0,t.jsx)(s.p,{children:"Before starting with MySQL, you need to have it installed on your system. Follow the steps below to install MySQL on your operating system:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"For Windows"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Download the MySQL Installer from the ",(0,t.jsx)(s.a,{href:"https://dev.mysql.com/downloads/installer/",children:"MySQL official website  \u2197  "}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Run the installer and follow the on-screen instructions."}),"\n",(0,t.jsx)(s.li,{children:"After installation, configure MySQL by setting the root password and starting the MySQL service."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"For macOS"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["You can install MySQL using Homebrew with the following command:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"brew install mysql\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Once installed, start the MySQL service:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"brew services start mysql\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Secure the installation by setting the root password:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"mysql_secure_installation\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"For Linux (Ubuntu/Debian)"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Install MySQL using ",(0,t.jsx)(s.code,{children:"apt"}),":","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt update\nsudo apt install mysql-server\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["After installation, start the MySQL service:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo service mysql start\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Secure the installation by running:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo mysql_secure_installation\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"install-postgresql",children:"Install PostgreSQL"}),"\n",(0,t.jsx)(s.p,{children:"To start using PostgreSQL, you first need to install it on your system. Follow the installation steps below:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"For Windows"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Download the PostgreSQL installer from the ",(0,t.jsx)(s.a,{href:"https://www.postgresql.org/download/windows/",children:"PostgreSQL official website \u2197  "}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Run the installer and follow the on-screen instructions."}),"\n",(0,t.jsx)(s.li,{children:"After installation, you can access PostgreSQL through the pgAdmin tool or the command line."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"For macOS"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Install PostgreSQL using Homebrew with the following command:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"brew install postgresql\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Start the PostgreSQL service:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"brew services start postgresql\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"For Linux (Ubuntu/Debian)"}),":"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Install PostgreSQL using ",(0,t.jsx)(s.code,{children:"apt"}),":","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo apt update\nsudo apt install postgresql postgresql-contrib\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Start the PostgreSQL service:","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sudo service postgresql start\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"learn-sql",children:"Learn SQL"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.javatpoint.com/mysql-tutorial",children:"Comprehensive MySQL Tutorial \u2197  "}),(0,t.jsx)(s.br,{}),"\n","This tutorial covers the basics of MySQL and helps you get started with database management. It includes the installation process, commands, queries, and more!"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.h3,{id:"core-topics",children:"Core Topics"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.h4,{id:"tables--views",children:"Tables & Views"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.scaler.com/topics/sql/views-in-sql/",children:"Learn about Tables & Views \u2197  "}),(0,t.jsx)(s.br,{}),"\n","Tables are the basic structure in MySQL to store data. Views are virtual tables that are the result of a stored query."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.h4,{id:"mysql-clauses",children:"MySQL Clauses"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.scaler.com/topics/clause-in-sql/",children:"Learn about MySQL Clauses \u2197  "}),(0,t.jsx)(s.br,{}),"\n","MySQL Clauses help you filter or modify query results. Topics include ",(0,t.jsx)(s.code,{children:"WHERE"}),", ",(0,t.jsx)(s.code,{children:"ORDER BY"}),", ",(0,t.jsx)(s.code,{children:"GROUP BY"}),", and more."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.hr,{})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},65:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return i}});var l=n(7294);let t={},r=l.createContext(t);function i(e){let s=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);