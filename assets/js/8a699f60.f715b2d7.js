"use strict";(self.webpackChunklansuite_documentation=self.webpackChunklansuite_documentation||[]).push([[5524],{9249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(5893),r=n(1151);const o={id:"production-release",title:"Creating a Release",sidebar_position:5},s=void 0,l={id:"development/production-release",title:"Creating a Release",description:"Introduction",source:"@site/docs/development/production-release.md",sourceDirName:"development",slug:"/development/production-release",permalink:"/lansuite/docs/development/production-release",draft:!1,unlisted:!1,editUrl:"https://github.com/lansuite/lansuite/tree/master/website/docs/development/production-release.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"production-release",title:"Creating a Release",sidebar_position:5},sidebar:"documentationSidebar",previous:{title:"Documentation",permalink:"/lansuite/docs/development/documentation"},next:{title:"Folder structure",permalink:"/lansuite/docs/development/folder-structure"}},a={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Usage",id:"usage",level:2},{value:"Building the image",id:"building-the-image",level:3},{value:"Building a release from the latest version",id:"building-a-release-from-the-latest-version",level:3},{value:"Building a release from a tag",id:"building-a-release-from-a-tag",level:3},{value:"Archives",id:"archives",level:3}];function u(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"The production release is not the same as the LanSuite development version (aka the GitHub repository).\nThe production release only contains the required files to run LanSuite as a website.\nIt does not contain any functionality to develop the platform."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:"To build a production release, we are using Docker.\nThis way, we ensure that every contributor can release the same production release with the same version constraints."}),"\n",(0,i.jsx)(t.h3,{id:"building-the-image",children:"Building the image"}),"\n",(0,i.jsx)(t.p,{children:"First step: Building the docker image to create a release:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"docker build --file ./Dockerfile-Production-Release --tag lansuite/lansuite:prod-release .\n"})}),"\n",(0,i.jsx)(t.h3,{id:"building-a-release-from-the-latest-version",children:"Building a release from the latest version"}),"\n",(0,i.jsx)(t.p,{children:"If you aim to build a production release from the latest git HEAD:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"docker run  --rm --volume=./builds:/builds:rw lansuite/lansuite:prod-release\n"})}),"\n",(0,i.jsx)(t.h3,{id:"building-a-release-from-a-tag",children:"Building a release from a tag"}),"\n",(0,i.jsx)(t.p,{children:"If you want to build a production release from a git tag:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'docker run  --rm --volume=./builds:/builds:rw -e "LANSUITE_VERSION=v4.2-beta" lansuite/lansuite:prod-release\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Please replace ",(0,i.jsx)(t.code,{children:"v4.2-beta"})," with your git tag in the command."]}),"\n",(0,i.jsx)(t.h3,{id:"archives",children:"Archives"}),"\n",(0,i.jsxs)(t.p,{children:["In your ",(0,i.jsx)(t.code,{children:"./builds/"})," folder, you now have two files:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"1 x tar.gz, which is the compressed LanSuite production release"}),"\n",(0,i.jsxs)(t.li,{children:["1 x file with a checksum of the ",(0,i.jsx)(t.code,{children:".tar.gz"})," file"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var i=n(7294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);