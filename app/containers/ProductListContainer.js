import React, {
	Component,
} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../action/product.js';

import ProductList from '../components/ProductList.js';

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


export default ProductListContainer;