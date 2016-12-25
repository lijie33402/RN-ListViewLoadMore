import React, {
	Component,
} from 'react'
import {
	Image,
} from 'react-native'
import { connect } from 'react-redux'
import ProduceImageShow from '../components/ProductImageShow.js'

class ProductImageContainer extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<ProduceImageShow {...this.props} />
		);
	}
}

export default ProductImageContainer;