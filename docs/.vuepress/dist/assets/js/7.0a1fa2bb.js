(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{356:function(t,e,a){"use strict";a.r(e);var r=a(43),v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-2"}},[t._v("#")]),t._v(" React-2")]),t._v(" "),a("h2",{attrs:{id:"上节课重点内容回顾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上节课重点内容回顾"}},[t._v("#")]),t._v(" 上节课重点内容回顾")]),t._v(" "),a("ul",[a("li",[t._v("JSX 注意事项\n"),a("ul",[a("li",[t._v("必须有,且只有一个顶层的包含元素 - React.Fragment")]),t._v(" "),a("li",[t._v("JSX 不是html，很多属性在编写时不一样\n"),a("ul",[a("li",[t._v("className")]),t._v(" "),a("li",[t._v("style -- 值接收对象")])])]),t._v(" "),a("li",[t._v("列表渲染时，必须有 key 值")]),t._v(" "),a("li",[t._v("在 jsx 所有标签必须闭合")]),t._v(" "),a("li",[t._v("组件的首字母一定大写，标签一定要小写")])])]),t._v(" "),a("li",[t._v("类组件\n"),a("ul",[a("li",[t._v("组件类必须继承 "),a("strong",[t._v("React.Component")])]),t._v(" "),a("li",[t._v("组件类必须有 "),a("strong",[t._v("render")]),t._v(" 方法")])])]),t._v(" "),a("li",[t._v("事件\n"),a("ul",[a("li",[t._v("大小写问题")]),t._v(" "),a("li",[t._v("this 问题")])])]),t._v(" "),a("li",[t._v("props 和 state\n"),a("ul",[a("li",[t._v("props 父组件传递过来的参数 -- 在组件内部不能修改 props")]),t._v(" "),a("li",[t._v("state 组件自身状态")])])])]),t._v(" "),a("h2",{attrs:{id:"课程目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程目标"}},[t._v("#")]),t._v(" 课程目标")]),t._v(" "),a("ul",[a("li",[t._v("掌握 setState 的各种使用情况")]),t._v(" "),a("li",[t._v("掌握 React 组件间通信")]),t._v(" "),a("li",[t._v("掌握 React 组件的生命周期")]),t._v(" "),a("li",[t._v("掌握受控组件的使用")])]),t._v(" "),a("h2",{attrs:{id:"课程内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程内容"}},[t._v("#")]),t._v(" 课程内容")]),t._v(" "),a("h3",{attrs:{id:"state-和-setstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state-和-setstate"}},[t._v("#")]),t._v(" state 和 setState")]),t._v(" "),a("ul",[a("li",[t._v("setState(updater, [callback])\n"),a("ul",[a("li",[t._v("updater: 更新数据 FUNCTION/OBJECT")]),t._v(" "),a("li",[t._v("callback: 更新成功后的回调 FUNCTION")]),t._v(" "),a("li",[t._v("异步:react通常会集齐一批需要更新的组件，然后一次性更新来保证渲染的性能")]),t._v(" "),a("li",[t._v("浅合并 Objecr.assign()")]),t._v(" "),a("li",[t._v("调用 setState 之后，会触发生命周期，重新渲染组件")])])])]),t._v(" "),a("h3",{attrs:{id:"组件间通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件间通信"}},[t._v("#")]),t._v(" 组件间通信")]),t._v(" "),a("p",[t._v("在 React.js 中，数据是从上自下流动（传递）的，也就是一个父组件可以把它的 state / props 通过 props 传递给它的子组件，但是子组件不能修改 props - React.js 是单向数据流，如果子组件需要修改父组件状态（数据），是通过回调函数方式来完成的。")]),t._v(" "),a("ul",[a("li",[t._v("父级向子级通信\n把数据添加子组件的属性中，然后子组件中从props属性中，获取父级传递过来的数据")]),t._v(" "),a("li",[t._v("子级向父级通信\n在父级中定义相关的数据操作方法(或其他回调), 把该方法传递给子级，在子级中调用该方法父级传递消息")]),t._v(" "),a("li",[t._v("案例：完善好友列表")])]),t._v(" "),a("h4",{attrs:{id:"跨组件通信-context-扩展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨组件通信-context-扩展"}},[t._v("#")]),t._v(" 跨组件通信 context - 扩展")]),t._v(" "),a("ul",[a("li",[t._v("React.createContext(defaultValue);\n{ Consumer, Provider } = createContext(defaultValue)")]),t._v(" "),a("li",[t._v("Context.Provider 在父组件调用 Provider 传递数据\n"),a("ul",[a("li",[t._v("value 要传递的数据")])])]),t._v(" "),a("li",[t._v("接收数据\n"),a("ul",[a("li",[t._v("class.contextType = Context;")]),t._v(" "),a("li",[t._v("static contextType = Context;\n"),a("ul",[a("li",[t._v("this.context;")])])]),t._v(" "),a("li",[t._v("Context.Consumer\n"),a("code",[t._v("<Consumer> {(props)=>{ console.log(props); return <div></div> }} </Consumer>")]),t._v(" "),a("strong",[t._v("注意在使用不熟练时，最好不要再项目中使用 context，context一般给第三方库使用")])])])])]),t._v(" "),a("h3",{attrs:{id:"组件的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的生命周期"}},[t._v("#")]),t._v(" 组件的生命周期")]),t._v(" "),a("p",[t._v("所谓的生命周期就是指某个事物从开始到结束的各个阶段，当然在 React.js 中指的是组件从创建到销毁的过程，React.js 在这个过程中的不同阶段调用的函数，通过这些函数，我们可以更加精确的对组件进行控制，前面我们一直在使用的 render 函数其实就是组件生命周期渲染阶段执行的函数")]),t._v(" "),a("h4",{attrs:{id:"生命周期演变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期演变"}},[t._v("#")]),t._v(" 生命周期演变")]),t._v(" "),a("h5",{attrs:{id:"之前（react-16-3-之前）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#之前（react-16-3-之前）"}},[t._v("#")]),t._v(" 之前（React 16.3 之前）")]),t._v(" "),a("ul",[a("li",[t._v("挂载阶段\n"),a("ul",[a("li",[t._v("constructor")]),t._v(" "),a("li",[t._v("componentWillMount")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidMount")])])]),t._v(" "),a("li",[t._v("更新阶段\n"),a("ul",[a("li",[t._v("父组件更新引起组件更新\n"),a("ul",[a("li",[t._v("componentWillReceiveProps(nextProps)")]),t._v(" "),a("li",[t._v("shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),a("li",[t._v("componentWillUpdate(nextProps, nextState)")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidUpdate(prevProps, prevState)")])])]),t._v(" "),a("li",[t._v("组件自身更新\n"),a("ul",[a("li",[t._v("shouldComponentUpdate")]),t._v(" "),a("li",[t._v("componentWillUpdate")]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidUpdate")])])])])]),t._v(" "),a("li",[t._v("卸载阶段\n"),a("ul",[a("li",[t._v("componentWillUnmount")])])])]),t._v(" "),a("h5",{attrs:{id:"现在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现在"}},[t._v("#")]),t._v(" 现在")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("挂载阶段")]),t._v(" "),a("ul",[a("li",[t._v("constructor")]),t._v(" "),a("li",[t._v("static getDerivedStateFromProps(props, state)\n"),a("ul",[a("li",[t._v("注意 this 问题")])])]),t._v(" "),a("li",[t._v("render")]),t._v(" "),a("li",[t._v("componentDidMount -- 处理副作用(请求)")])])]),t._v(" "),a("li",[a("p",[t._v("更新阶段\n- static getDerivedStateFromProps(props, state)\n- shouldComponentUpdate()  -- 判断是否跟新\n- render()\n- getSnapshotBeforeUpdate()\n- componentDidUpdate() -- 处理副作用(请求)")])]),t._v(" "),a("li",[a("p",[t._v("卸载阶段")]),t._v(" "),a("ul",[a("li",[t._v("componentWillUnmount  -- 删除添加在全局的一些信息或操作")])])]),t._v(" "),a("li",[a("p",[t._v("错误处理")]),t._v(" "),a("ul",[a("li",[t._v("static getDerivedStateFromError()")]),t._v(" "),a("li",[t._v("componentDidCatch(error, info)\n参考：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/")])])])]),t._v(" "),a("h3",{attrs:{id:"生命周期函数详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期函数详解"}},[t._v("#")]),t._v(" 生命周期函数详解")]),t._v(" "),a("h4",{attrs:{id:"constructor-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor-props"}},[t._v("#")]),t._v(" constructor(props)")]),t._v(" "),a("p",[t._v("类的构造函数，也是组件初始化函数，一般情况下，我们会在这个阶段做一些初始化的工作")]),t._v(" "),a("ul",[a("li",[t._v("初始化 state")]),t._v(" "),a("li",[t._v("处理事件绑定函数的 this")])]),t._v(" "),a("h4",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render()")]),t._v(" "),a("p",[t._v("render 方法是 Class 组件必须实现的方法")]),t._v(" "),a("h4",{attrs:{id:"static-getderivedstatefromprops-props-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-getderivedstatefromprops-props-state"}},[t._v("#")]),t._v(" static getDerivedStateFromProps(props, state)")]),t._v(" "),a("p",[t._v("该方法会在 render 方法之前调用，无论是挂载阶段还是更新阶段，它的存在只有一个目的：让组件在 props 变化时更新 state")]),t._v(" "),a("h4",{attrs:{id:"componentdidmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount()")]),t._v(" "),a("p",[t._v("在组件挂载后（render 的内容插入 DOM 树中）调用。通常在这个阶段，我们可以：")]),t._v(" "),a("ul",[a("li",[t._v("操作 DOM 节点")]),t._v(" "),a("li",[t._v("发送请求")])]),t._v(" "),a("h4",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),a("p",[t._v("发生在更新阶段，getDerivedStateFromProps 之后，render 之前，该函数会返回一个布尔值，决定了后续是否执行 render，首次渲染不会调用该函数")]),t._v(" "),a("h4",{attrs:{id:"getsnapshotbeforeupdate-prevprops-prevstate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate-prevprops-prevstate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate(prevProps, prevState)")]),t._v(" "),a("p",[t._v("该方法在 render() 之后，但是在输出到 DOM 之前执行，用来获取渲染之前的快照。当我们想在当前一次更新前获取上次的 DOM 状态，可以在这里进行处理，该函数的返回值将作为参数传递给下个生命周期函数 componentDidUpdate")]),t._v(" "),a("blockquote",[a("p",[t._v("该函数并不常用。")])]),t._v(" "),a("h4",{attrs:{id:"componentdidupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate()")]),t._v(" "),a("p",[t._v("该函数会在 DOM 更新后立即调用，首次渲染不会调用该方法。我们可以在这个函数中对渲染后的 DOM 进行操作")]),t._v(" "),a("h4",{attrs:{id:"componentwillunmount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount()")]),t._v(" "),a("p",[t._v("该方法会在组件卸载及销毁前调用，我们可以在这里做一些清理工作，如：组件内的定时器、未完成的请求等")]),t._v(" "),a("h3",{attrs:{id:"错误处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),a("p",[t._v("当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法")]),t._v(" "),a("ul",[a("li",[t._v("static getDerivedStateFromError()")]),t._v(" "),a("li",[t._v("componentDidCatch()")])]),t._v(" "),a("h3",{attrs:{id:"受控组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#受控组件"}},[t._v("#")]),t._v(" 受控组件")]),t._v(" "),a("p",[t._v("受控组件: 让 input 的value  和我们 state 保持一致\n非受控组件: 我们不需要同步 value 值(defaultValue，defaultChecked)")]),t._v(" "),a("h3",{attrs:{id:"todolist-初实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todolist-初实现"}},[t._v("#")]),t._v(" todoList 初实现")]),t._v(" "),a("h2",{attrs:{id:"下节课内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下节课内容"}},[t._v("#")]),t._v(" 下节课内容")]),t._v(" "),a("ul",[a("li",[t._v("掌握React其他 API 使用：PureComponent、ref、children、dangerouslySetInnerHTML、key")]),t._v(" "),a("li",[t._v("掌握函数式组件及常见 hooks 的使用")]),t._v(" "),a("li",[t._v("可以独立开发基于Hooks 或 Component 的 todoList 应用")])]),t._v(" "),a("h2",{attrs:{id:"练习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[t._v("#")]),t._v(" 练习")]),t._v(" "),a("p",[t._v("把好友列表和todo都自己做一遍")]),t._v(" "),a("p",[t._v("todo:\n- 添加todo\n- 修改完成状态\n- 统计未完成\n- 统计已完成\n- 清除已完成")])])}),[],!1,null,null,null);e.default=v.exports}}]);