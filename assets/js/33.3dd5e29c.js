(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{471:function(_,t,v){"use strict";v.r(t);var e=v(29),o=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[_._v("#")]),_._v(" 介绍")]),_._v(" "),v("p",[_._v("关于"),v("code",[_._v("OAuth2.0")]),_._v("，网上很多介绍的，可以看一下相关文章")]),_._v(" "),v("p",[_._v("推荐两个：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("[["),v("a",{attrs:{href:"https://www.cnblogs.com/linianhui/p/oauth2-authorization.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("认证 & 授权] 1. OAuth2授权"),v("OutboundLink")],1),_._v("](https://www.cnblogs.com/linianhui/p/oauth2-authorization.html)")])]),_._v(" "),v("li",[v("p",[v("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("阮一峰——理解OAuth 2.0"),v("OutboundLink")],1)])])]),_._v(" "),v("h2",{attrs:{id:"正文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[_._v("#")]),_._v(" 正文")]),_._v(" "),v("p",[_._v("简单来说："),v("code",[_._v("OAuth2.0")]),_._v("就是一种授权访问资源的方式（我自己的理解），第三方应用通过用户授权，访问用户另外网站上所拥有的资源")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("可以使用多种语言，多种方式来实现"),v("code",[_._v("OAuth2.0")]),_._v("授权，各种语言都有相应的库实现，使用起来还是比较方便的")])]),_._v(" "),v("li",[v("p",[_._v("只用于授权，不包含身份认证")]),_._v(" "),v("ul",[v("li",[_._v("授权与认证的区别：\n"),v("ul",[v("li",[_._v("授权（Authorization）：你能干什么，"),v("code",[_._v("OAuth2.0")])]),_._v(" "),v("li",[_._v("认证（Authentication）：你是谁，"),v("code",[_._v("OpenId Connect")])])])])])])]),_._v(" "),v("h3",{attrs:{id:"大致流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大致流程"}},[_._v("#")]),_._v(" 大致流程")]),_._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"K:/Blog/docs/.vuepress/public/images/chrome_Z7zB4AX2Ko.png",alt:"chrome_Z7zB4AX2Ko"}}),_._v(" "),v("ul",[v("li",[_._v("用户正在使用某第三方应用")]),_._v(" "),v("li",[_._v("第三方应用想要访问用户的某资源，比如图片，然后第三方应用跳到了用户的资源网站的页面\n"),v("ul",[v("li",[_._v("如果需要登录，则用户输入账号密码登录")]),_._v(" "),v("li",[_._v("然后回跳到授权页面")]),_._v(" "),v("li",[_._v("一般是用户点击一个授权的按钮，表示授权完成")])])]),_._v(" "),v("li",[_._v("第三方应用拿到了用户的授权")]),_._v(" "),v("li",[_._v("去请求授权服务器拿"),v("code",[_._v("Token")])]),_._v(" "),v("li",[v("code",[_._v("Token")]),_._v("被返回后，通过"),v("code",[_._v("Token")]),_._v("访问资源，也就是刚开始说到的"),v("strong",[_._v("图片")])])]),_._v(" "),v("p",[_._v("大致流程就是如此")]),_._v(" "),v("h3",{attrs:{id:"授权类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#授权类型"}},[_._v("#")]),_._v(" 授权类型")]),_._v(" "),v("p",[_._v("类型大致分为几种：")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("Authorization Code：授权码；（也就是拿到"),v("code",[_._v("Token")]),_._v("，上面流程就是这种）")])]),_._v(" "),v("li",[v("p",[_._v("Implicit：隐式许可；（相比第一种，减少了一次获取授权码的步骤，直接拿到"),v("code",[_._v("Token")]),_._v("，以及"),v("code",[_._v("刷新Token")]),_._v("）")])]),_._v(" "),v("li",[v("p",[_._v("Resource Owner Password Credentials：资源所有者密码凭据；（直接使用用户的账号密码获取"),v("code",[_._v("Token")]),_._v("）")])]),_._v(" "),v("li",[v("p",[_._v("Client Credentials ：客户端凭据。（第三方应用与访问资源属于同一个公司，无需用户授权，可以通过第三方应用自己的名义访问）")])]),_._v(" "),v("li",[v("p",[_._v("...")])])]),_._v(" "),v("h3",{attrs:{id:"一些术语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一些术语"}},[_._v("#")]),_._v(" 一些术语")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("Socpe：范围，表示资源所有者在被保护资源那边的一些权限，权限范围由开发人员决定")])]),_._v(" "),v("li",[v("p",[_._v("Access Token："),v("code",[_._v("token")]),_._v("，访问被保护资源时使用，需要包含"),v("code",[_._v("权限范围")]),_._v("、"),v("code",[_._v("过期时间")])])]),_._v(" "),v("li",[v("p",[_._v("Refresh Token：可选，用于获取"),v("code",[_._v("Access Token")]),_._v("的凭据，一般是"),v("code",[_._v("token")]),_._v("过期后使用，随着访问次数，权限可以越来越低，下图表示的是"),v("code",[_._v("Refresh Token")]),_._v("的工作流程")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2021/01/27/cA712VGnKkxO9Qq.png",alt:"image-20210127061632586"}})])])])])}),[],!1,null,null,null);t.default=o.exports}}]);