import React, {
	Component,
} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../action/product.js';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

class OtherContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (	
			<ScrollableTabView
			    style={{marginTop: 20, }}
		        renderTabBar={() => <DefaultTabBar />}
		        tabBarUnderlineStyle={{ backgroundColor: '#4E78E7'}}
				tabBarTextStyle={{fontSize: 18}}
			>
			    <Text tabLabel='讨论'>讨论区</Text>
			    <Text tabLabel='服务'>服务区</Text>
			</ScrollableTabView>
		);
	}
}

function mapStateToProps(state) {
    return { reducer: state.reducer };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherContainer);