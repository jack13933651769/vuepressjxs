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
		  sidebar: [
			{
			  title: '前言',
			  collapsable: false,
			  children: [
				'/',
			  ]
			},
			// {
			// 	title: 'Vue基础知识',
			// 	children: ['./vue/VueBasis','./vue/VueAdvanced']
			// },
			{
				title: 'Js基础知识',
				children: ['./js/string对象.md']
			  },
			{
				title: 'React基础知识',
				children: ['./react/react1','./react/react2']
			},
			{
				title: '前端常见面试题',
				children: ['./面试题/跨域的几种方式','./面试题/css水平垂直居中的几种方式','./面试题/vue面试题','./面试题/JS面试题']
			}
		  ]
	  }
  }


 