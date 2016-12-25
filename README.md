 RN-ListViewLoadMore  

* 开始学习react-native的一个入门小demo，fork了github中这个小项目，并将项目根据自己理解做了很多改动，掌握了redux的思想与react-redux的应用。
* react-redux将react与redux结合，简化了redux的流程
	react-redux
	如果只使用redux，那么流程是这样的：

	component --> dispatch(action) --> reducer --> subscribe --> getState --> component
	
	用了react-redux之后流程是这样的：

	component --> actionCreator(data) --> reducer --> component
	
* navbar那里样式做了较大改动，尽量使用flexbox布局，实在有需要再用绝对定位。
* 其他菜单中使用了react-native-scrollable-tab-view，这个组件非常不错，等待继续完善测试。