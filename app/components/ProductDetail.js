
import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	ScrollView,
	Platform,
	Alert,
} from 'react-native'
import holderImage from '../../localSource/images/tree.png'
import NavigationBar from '../common/NavBarCommon.js'
import backIcon from '../../localSource/images/back.png'

const {height, width} = Dimensions.get('window');

class ProductDetail extends Component {

	constructor(props) {
		super(props);
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

	_scrollViewScroll = (event) => {
		console.log("scrolling",event.nativeEvent.contentOffset.y);
		const offsetY = event.nativeEvent.contentOffset.y;
		if (offsetY > 5) {
			this.setState({
				navOpacity: (offsetY - 5)/150
			});
		}else{
			this.setState({
				navOpacity: 0
			});
		};
		
	}

	render() {
		const { imageOnLoad } = this.state;

		return (
			<View style={ styles.mainView }>
				<ScrollView onScroll={ this._scrollViewScroll } scrollEventThrottle={15} style={ styles.mainScrollView }>
					<Image style={ styles.image } source={{uri: `https:${this.props.rowData.imagePath}`}}/>
					<View style={ [styles.infoView] }>
						<Text style={ styles.textInfo }>{ `Product Name: \n ${this.props.rowData.productName}` }</Text>
					</View>
					<View style={ [styles.infoView] }>
						<Text style={ styles.textInfo }>{ `Company Name: \n ${this.props.rowData.companyName}` }</Text>
					</View>
					<View style={ styles.infoView }>
						<Text style={ styles.textInfo }>{ `mainProducts: \n ${this.props.rowData.mainProducts}` }</Text>
					</View>
					<View style={ styles.infoView }>
						<Text style={ styles.textInfo }>{ `productDetailUrl: \n ${this.props.rowData.productDetailUrl}` }</Text>
					</View>
					<View style={ [styles.infoView,{marginBottom: 10}] }>
						<Text style={ styles.textInfo }>{ `paymentTerms: \n ${this.props.rowData.paymentTerms}` }</Text>
					</View>
				</ScrollView>
				<Image style={ styles.backIcon } source={ backIcon }/>
				<NavigationBar style={{opacity: this.state.navOpacity}} title={'图文详情'} leftImage={ backIcon } leftAction={ this._backToFront }/>			
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: 'yellow'
	},
	mainScrollView: {
		flex: 1,
		position: 'absolute',
		height: height,
		backgroundColor: '#FFEFDB',
	},
	image: {
		height: width,
		width: width
	},
	infoView: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
		marginTop: 8,
		height: 100,
		borderTopWidth: 1,
		borderTopColor: 'lightgray',
		borderBottomWidth:1,
		borderBottomColor: 'lightgray',
	},
	backIcon: {
		position: 'absolute',
		left: 5,
		top: 26,
		width: 32,
		height: 32,
		backgroundColor: 'gray',
		borderRadius: 16
	}
})

export default ProductDetail
