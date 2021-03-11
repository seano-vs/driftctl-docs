(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(138)),i={id:"gitlabci",title:"GitlabCI"},l={unversionedId:"ci_cd/guides/gitlabci",id:"ci_cd/guides/gitlabci",isDocsHomePage:!1,title:"GitlabCI",description:"You can integrate driftctl in GitlabCI by taking as example this repository.",source:"@site/docs/ci_cd/guides/gitlabci.mdx",slug:"/ci_cd/guides/gitlabci",permalink:"/next/ci_cd/guides/gitlabci",editUrl:"https://github.com/cloudskiff/driftctl-docs/edit/main/docs/ci_cd/guides/gitlabci.mdx",version:"current",sidebar:"docs",previous:{title:"CircleCI",permalink:"/next/ci_cd/guides/circleci"}},o=[{value:"Full example",id:"full-example",children:[]}],s={toc:o};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can integrate driftctl in GitlabCI by taking as example this ",Object(c.b)("a",{parentName:"p",href:"https://gitlab.com/cloudskiff/driftctl-ci-example"},"repository"),"."),Object(c.b)("p",null,"You can integrate driftctl within your GitOps workflow to get something like this:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"success",src:n(186).default})),Object(c.b)("p",null,"In this kind of workflow if a new drift happens it will block your pipeline execution:"),Object(c.b)("p",null,Object(c.b)("img",{alt:"failure",src:n(187).default})),Object(c.b)("p",null,"You can also setup a scheduled job to detect drifts as they happen, in the screenshot below it schedules a driftctl run every hour"),Object(c.b)("p",null,Object(c.b)("img",{alt:"schedule",src:n(188).default})),Object(c.b)("h2",{id:"full-example"},"Full example"),Object(c.b)("p",null,"Below you can find a full GitlabCI example with a complete GitOps workflow example and a scheduled run of driftctl."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-yml"},'stages:\n  - init\n  - validate\n  - plan\n  - deploy\n\n.driftctl:\n  image:\n    name: cloudskiff/driftctl\n    entrypoint: [""]\n  script:\n    - driftctl scan\n\n# ====================\n# Scheduled driftctl run\n# ====================\n# Scheduled driftctl run\ndriftctl:scheduled:\n  extends: .driftctl\n  only:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\n# ====================\n# Classic GitOps workflow\n# ====================\n\n# Used to share .terraform cached providers in terraform jobs\n.tfcache: &tfcache\n  cache:\n    key: ${CI_PIPELINE_ID}\n    paths:\n      - .terraform\n\n# Terraform image to use for every terraform jobs\n.terraform: &terraform\n  image:\n    name: hashicorp/terraform:0.14.4\n    entrypoint: [""]\n\nterraform/init:\n  <<: *terraform\n  <<: *tfcache\n  stage: init\n  except:\n    - schedules\n  script:\n    - terraform init\n\ndriftctl:\n  extends: .driftctl\n  except:\n    - schedules\n  stage: validate\n  variables:\n    AWS_DEFAULT_REGION: us-east-1\n    DCTL_FILTER: "Type==\'aws_s3_bucket\'"\n\nterraform/fmt:\n  <<: *terraform\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform fmt -check -diff\n\nterraform/validate:\n  <<: *terraform\n  <<: *tfcache\n  stage: validate\n  except:\n    - schedules\n  script:\n    - terraform validate\n\nterraform/plan:\n  <<: *terraform\n  <<: *tfcache\n  stage: plan\n  except:\n    - schedules\n  artifacts:\n    name: plan\n    expire_in: 1 day\n    paths:\n      - "plan.out"\n  script:\n    - terraform plan -out=plan.out\n\nterraform/apply:\n  <<: *terraform\n  <<: *tfcache\n  stage: deploy\n  when: manual\n  dependencies:\n    - terraform/plan\n  except:\n    - schedules\n  script:\n    - terraform apply plan.out\n\n')))}u.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||c;return n?a.a.createElement(b,l(l({ref:t},s),{},{components:n})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},186:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/success-739403b2ff1c76505754d68b5cf4f3c3.png"},187:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/failure-a4ca4f35cf518566b1c6280998a321e4.png"},188:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/schedule-638af56b6a9427cae93b13493b558e5d.png"}}]);