(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{501:function(t,r,e){"use strict";e.r(r);var _=e(29),v=Object(_.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("blockquote",[e("p",[t._v("注：以下尝试仅供参考，系统这东西，不了解，得从方法面面来分析。")]),t._v(" "),e("p",[t._v("好几次了，每次想点击从1809升级1903的版本，就会出错，然后就是一大堆的修复，怪谁呢，怪我手贱😓，还怪Windows太霸道，每次都要覆盖Grub引导。")]),t._v(" "),e("p",[t._v("搞得我现在Ubuntu引导都整没有了。")])]),t._v(" "),e("h2",{attrs:{id:"问题截图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题截图"}},[t._v("#")]),t._v(" 问题截图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/rJvzVCs.png",alt:"图片来源网络"}})]),t._v(" "),e("h2",{attrs:{id:"正文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("首先准备U盘，8G以上")])]),t._v(" "),e("li",[e("p",[t._v("下载当前出问题的电脑的系统，我的是"),e("code",[t._v("win10-1809")]),t._v("，"),e("a",{attrs:{href:"http://msdn.itellyou.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("li",[e("p",[t._v("准备制作启动盘工具，"),e("a",{attrs:{href:"https://rufus.ie/zh_CN.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1)])])]),t._v(" "),e("h3",{attrs:{id:"开始制作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始制作"}},[t._v("#")]),t._v(" 开始制作")]),t._v(" "),e("ul",[e("li",[t._v("选择U盘")]),t._v(" "),e("li",[t._v("选择引导类型=>"),e("code",[t._v("镜像文件")]),t._v("=>"),e("code",[t._v("选择")]),t._v("，选择下载的系统")]),t._v(" "),e("li",[t._v("选择分区类型（分区类型，可以在文章底部查看）")]),t._v(" "),e("li",[t._v("其他的默认，最后点击"),e("strong",[t._v("开始")]),t._v("，开始制作启动盘")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/M5u63LV.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"开始修复"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始修复"}},[t._v("#")]),t._v(" 开始修复")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Boot模式选用"),e("code",[t._v("Legacy")]),t._v("（传统），首选项使用U盘启动")])]),t._v(" "),e("li",[e("p",[t._v("进入后，选择语言，下一步")])]),t._v(" "),e("li",[e("p",[t._v("选择修复系统，疑难解答，启动修复")])]),t._v(" "),e("li",[e("p",[t._v("然后关机重启，首选项使用系统盘启动")])]),t._v(" "),e("li",[e("p",[t._v("若还是有问题（一般都是有问题，不过执行上面这几步，是为了解决部分隐藏的其他问题）")])]),t._v(" "),e("li",[e("p",[t._v("关机重启，选择U盘启动")])]),t._v(" "),e("li",[e("p",[t._v("进入系统，选择语言，下一步")])]),t._v(" "),e("li",[e("p",[t._v("选择修复系统，疑难解答，命令提示符，输入"),e("code",[t._v("bootrec /rebuildbcd")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("X:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Source"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" bootrec /rebuildbcd\n")])])]),e("p",[t._v("我的问题解决了🙂。")])])]),t._v(" "),e("h2",{attrs:{id:"其他参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他参考"}},[t._v("#")]),t._v(" 其他参考")]),t._v(" "),e("p",[t._v("上面的解决方案，其实在下面有详细说明：")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_42252980/article/details/80862638",target:"_blank",rel:"noopener noreferrer"}},[t._v("win10误删引导文件，0xc0000098的解决方案，bcd引导文件受损情况分析"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.reneelab.net/error-0xc0000098-html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何修復Windows啟動錯誤0xc0000098？"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("Ubuntu18.04，被我搞没了，盘没有删，先留着这个链接，有时间折腾一下")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.reneelab.net/error-0xc0000098-html.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("双系统Ubuntu 引导修复（Boot Repair）"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("详解UEFI启动，以及其他知识，推荐看一下，增加了解，少走弯路，少给自己挖坑")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.woodelf.org/2014/05/28/uefi-boot-how-it-works.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("（译）UEFI 启动：实际工作原理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://cnxysw.com/?p=722",target:"_blank",rel:"noopener noreferrer"}},[t._v("简单讲解UEFI及MBR，及UEFI系统安装引导修复"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"收集到的有效信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#收集到的有效信息"}},[t._v("#")]),t._v(" 收集到的有效信息：")]),t._v(" "),e("h3",{attrs:{id:"查看系统配置msconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看系统配置msconfig"}},[t._v("#")]),t._v(" 查看系统配置"),e("code",[t._v("msconfig")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("[win]")]),t._v("+"),e("code",[t._v("[R]")]),t._v("+"),e("code",[t._v("msconfig")])])]),t._v(" "),e("li",[e("p",[t._v("可以查看启动项，但是使用原有引导不行，因为windows担心还原问题")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/sD6ywex.png",alt:""}})])])]),t._v(" "),e("h3",{attrs:{id:"查看当前系统使用的启动模式msinfo32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前系统使用的启动模式msinfo32"}},[t._v("#")]),t._v(" 查看当前系统使用的启动模式"),e("code",[t._v("msinfo32")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("[win]")]),t._v("+"),e("code",[t._v("[R]")]),t._v("+"),e("code",[t._v("msinfo32")])])]),t._v(" "),e("li",[e("p",[t._v("可以查看BIOS模式")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/I9qSatN.png",alt:""}})])])]),t._v(" "),e("h3",{attrs:{id:"查看当前系统盘使用mbr格式还是gpt格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看当前系统盘使用mbr格式还是gpt格式"}},[t._v("#")]),t._v(" 查看当前系统盘使用MBR格式还是GPT格式")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("我的电脑")]),t._v("=>"),e("code",[t._v("鼠标右键")]),t._v("=>"),e("code",[t._v("管理")]),t._v("=>"),e("code",[t._v("磁盘管理")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://i.imgur.com/Hr1Kjtc.png",alt:""}})])])]),t._v(" "),e("h2",{attrs:{id:"遇到问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到问题"}},[t._v("#")]),t._v(" 遇到问题")]),t._v(" "),e("h3",{attrs:{id:"问题一-内存高占用率【未找到答案】"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题一-内存高占用率【未找到答案】"}},[t._v("#")]),t._v(" 问题一：内存高占用率【未找到答案】")]),t._v(" "),e("p",[t._v("不知什么原因，我的系统使用"),e("code",[t._v("UEFI")]),t._v("模式启动，内存开机就会占用"),e("code",[t._v("70%-90%")]),t._v("。我的内存是16G的，不应该这样。而且开机启动项也不多，也按照网上的关闭服务"),e("code",[t._v("Superfetch")]),t._v("以及"),e("code",[t._v("TimeBroker")]),t._v("，但就是不管用。")]),t._v(" "),e("p",[t._v("然后我使用"),e("code",[t._v("Legacy")]),t._v("模式启动，内存开机就稳定在"),e("code",[t._v("30%~50%")]),t._v("之间，所以也是我为什么一直折腾，要把"),e("code",[t._v("Legacy")]),t._v("模式启动成功的原因。")]),t._v(" "),e("h2",{attrs:{id:"最后-建议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后-建议"}},[t._v("#")]),t._v(" 最后，建议")]),t._v(" "),e("p",[t._v("网上看到的一句话，送给自己：")]),t._v(" "),e("blockquote",[e("p",[t._v("没事别瞎折腾，系统，稳定最重要")])]),t._v(" "),e("p",[t._v("折腾两天，又耽误自己的学习时间😓")])])}),[],!1,null,null,null);r.default=v.exports}}]);