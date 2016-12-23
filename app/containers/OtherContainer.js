import React, {
	Component,
} from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../action/product.js';

class OtherContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<Text>其他</Text>
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