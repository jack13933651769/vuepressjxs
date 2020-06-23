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
			{
				title: 'Vue',
				children: ['./react/react1','./react/react2' ]
			},
			{
				title: 'Js',
				children: ['./js/string对象']
			  },
			{
				title: 'React',
				children: ['./react/react1','./react/react2' ]
			},
			{
				title: '面试题',
				children: ['./面试题/跨域的几种方式']
			}
		  ]
	  }
  }


 