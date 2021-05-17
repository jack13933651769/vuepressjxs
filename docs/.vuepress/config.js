module.exports = {
	title: '蒋鲜生の前端学习笔记',
	description: '这是一个总结前端知识的网站鸭！',
	base:'/iview/notes/',
	  themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'External', link: 'https://google.com' },
		  ],
		  sidebar:[{"title":"前言",
	"collapsable":false,
	"children":["/"]},
	{"title":"css动效",
	"children":["./css动效/盒子向下弹出.md"]},
	{"title":"Js基础知识",
	"children":["./Js基础知识/string对象.md",
	"./Js基础知识/变量作用域与内存.md",
	"./Js基础知识/变量声明.md",
	"./Js基础知识/基本引用类型.md",
	"./Js基础知识/操作符及语句.md",
	"./Js基础知识/数据类型.md",
	"./Js基础知识/集合引用类型.md",
	"./Js基础知识/面向对象.md"]},
	{"title":"React基础知识",
	"children":["./React基础知识/r.md",
	"./React基础知识/react1.md",
	"./React基础知识/react2.md"]},
	{"title":"./docs",
	"children":["./readme.md"]},
	{"title":"sql",
	"children":["./sql/单表查询.md"]},
	{"title":"前端常见面试题",
	"children":["./前端常见面试题/css水平垂直居中的几种方式.md",
	"./前端常见面试题/JS面试题.md",
	"./前端常见面试题/vue面试题.md",
	"./前端常见面试题/跨域的几种方式.md",
	"./前端常见面试题/防抖和节流函数.md"]},
	{"title":"工作笔记",
	"children":["./工作笔记/20200909.md"]},
	{"title":"常用软件及网站和前端插件",
	"children":["./常用软件及网站和前端插件/web.md"]},
	{"title":"每天一个英语题型",
	"children":["./每天一个英语题型/20210513.md",
	"./每天一个英语题型/20210514.md",
	"./每天一个英语题型/20210517.md"]},
	{"title":"每日一个面试题",
	"children":["./每日一个面试题/js 数组对象扁平化.md"]},
	{"title":"移动端配置",
	"children":["./移动端配置/mobileapp.md"]}]
		  
	  }
  }
