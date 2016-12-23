import React, {
	Component,
} from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../action/product.js';

class OtherContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
				<Text>其他</Text>
			</View>			
		);
	}
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherContainer);