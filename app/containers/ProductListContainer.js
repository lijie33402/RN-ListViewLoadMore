import React, {
	Component,
} from 'react';
import { connect } from 'react-redux';
import ProductList from '../components/ProductList.js';
import {bindActionCreators} from 'redux';
import * as Actions from '../action/product.js';

class ProductListContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<ProductList { ...this.props } />
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);