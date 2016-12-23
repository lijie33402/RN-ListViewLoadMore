import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	ListView,
	InteractionManager,
	RefreshControl,
} from 'react-native'
import { request } from '../util/Http.js'
import LoadMoreFooter from '../components/LoadMoreFooter.js'
import ProductCell from '../components/ProductCell.js'
import NavigationBar from '../common/NavBarCommon.js'
import ProductImageContainer from '../containers/ProductImageContainer.js'
import backIcon from '../../localSource/images/back.png'

import HttpRequest from '../util/Http.js'
const HOST = 'https://m.alibaba.com/products/'
const keyWords = 't-shirt'

const { width, height } = Dimensions.get('window')

let _pageNo = 1;
const _pageSize = 30;

class ProductList extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {actions} = this.props;
		actions.changeProductListRefreshing(true);
		this.requestProductList(_pageNo);
	}

	requestProductList(pageNo) {
		const {actions} = this.props;
		return HttpRequest(`${HOST}${keyWords}/${pageNo}.html?XPJAX=1`)
			.then((responseData) => {
				actions.gotProductList(responseData,pageNo);
				console.log(`---------> ,成功加载${responseData.productNormalList.length}条数据`);
				if (pageNo === 1) {
					actions.changeProductListRefreshing(false);
				}else{
					actions.changeProductListLoadingMore(false);
				}
			})
			.catch((error) => {
				actions.changeProductListRefreshing(false);
				actions.changeProductListLoadingMore(false);
				console.log("error",error);
			});
	}

	_goToDetail(rowData) {
		const { navigator } = this.props;
		const imageUrl = `https:${rowData.imagePath}`;
		console.log("去商品详情页",rowData);
		if(navigator) {
			navigator.push({
			    component: ProductImageContainer,
			    rowData: rowData
			})
		}
	}

	_renderRow(rowData,SectionId,rowID) {
		return <ProductCell rowData={rowData} rowID={ rowID } goToDetail={ this._goToDetail.bind(this) }/>
	}

	_onRefresh() {
		const {actions} = this.props;
		actions.changeProductListRefreshing(true);
		this.requestProductList(_pageNo);
	}

	_loadMoreData() {
		const { reducer, actions } = this.props;
		actions.changeProductListLoadingMore(true);
		_pageNo = Number.parseInt(reducer.products.length / _pageSize) + 1;
		this.requestProductList(_pageNo);
	}

	_toEnd() {
		const { reducer } = this.props;
		console.log("加载更多？ ",reducer.isLoadingMore, reducer.products.length, reducer.totalProductCount,reducer.isRefreshing);
		//ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
		if (reducer.isLoadingMore || reducer.products.length >= reducer.totalProductCount || reducer.isRefreshing) {
			return;
		};
		InteractionManager.runAfterInteractions(() => {
			console.log("触发加载更多 toEnd() --> ");
			this._loadMoreData();
		});
	}

	_leftAction() {
		console.log("点击leftnav ");
	}

	_renderFooter() {
		const { reducer } = this.props;
		//通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
		if (reducer.products.length < 1 || reducer.isRefreshing) {
			return null
		};
		if (reducer.products.length < reducer.totalProductCount) {
			//还有更多，默认显示‘正在加载更多...’
			return <LoadMoreFooter />
		}else{
			// 加载全部
			return <LoadMoreFooter isLoadAll={true}/>
		}
	}

	render() {
		const { reducer, actions } = this.props;
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return (
			<View>
				<NavigationBar title={'首页'}/>
				<ListView style={ styles.listViewContent } 
					dataSource={ ds.cloneWithRows(reducer.products) } 
					renderRow={ this._renderRow.bind(this) }
					onEndReached={ this._toEnd.bind(this) }
					onEndReachedThreshold={10}
					renderFooter={ this._renderFooter.bind(this) }
					enableEmptySections={true} 
					refreshControl={
						<RefreshControl
							refreshing={ reducer.isRefreshing }
							onRefresh={ this._onRefresh.bind(this) }
							tintColor="gray"
							colors={['#ff0000', '#00ff00', '#0000ff']}
							progressBackgroundColor="gray"/>
						}/>
			</View>
		)
	}

	

}

const styles = StyleSheet.create({
	listViewContent: {
		flex: 1,
		paddingBottom: 20,
		marginBottom: 0,
		backgroundColor: '#FFEFDB',
		height: height-64,
	}
})

export default ProductList
