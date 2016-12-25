
import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	NativeModules,
} from 'react-native'
import holderImage from '../../localSource/images/tree.png'
import NavigationBar from '../common/NavBarCommon.js'
import backIcon from '../../localSource/images/back.png'
import ProductDetailContainer from '../containers/ProductDetailContainer.js'
const {height, width} = Dimensions.get('window');

class ProductImageShow extends Component {

	constructor(props) {
		super(props);
		const { navigator,imageUrl } = this.props;
		this.state = {
			navOpacity: 0
		}
	}
	_backToFront = () => {
		const { navigator } = this.props;
		if(navigator) {
			navigator.pop();
		}
	}

	_toAnotherDetail = () => {
		const { navigator, rowData } = this.props;
		if(navigator) {
			navigator.push({
			    component: ProductDetailContainer,
			    rowData: rowData
			});
		}
	}

	render() {
		return (
			<View style={ styles.mainView }>
				<NavigationBar title={'图片详情'} leftImage={ backIcon } leftAction={ this._backToFront } rightTitle={'去看图文详情'} rightAction={ this._toAnotherDetail } />
				<TouchableOpacity onPress={ this._toAnotherDetail }>
					<Image style={ styles.image } source={{uri: `https:${this.props.rowData.imagePath}`}}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={ this._toAnotherDetail }>
					<View style={ styles.bottomTitleView }>
						<Text style={ styles.bottomTitle }>点击图片可以去图文详情页</Text>
					</View>
				</TouchableOpacity>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: '#FFEFDB',
	},
	image: {
		height: width,
		width: width
	},
	bottomTitleView: {
		margin: 40,
		height: 44,
		flexDirection:'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'blue',
	},
	bottomTitle: { 
		fontWeight:'bold',
		color:'red',
	}

})

export default ProductImageShow
