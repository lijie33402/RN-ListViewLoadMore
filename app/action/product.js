
import * as ActionTypes from '../constants/actionTypes'

// 请求数据 
export function gotProductList (products, pageNo) {
	return {
		type: ActionTypes.GET_PRODUCT_LIST_SUCC,
		products: products,
		pageNo: pageNo
	}
}

// 刷新（状态）
export function changeProductListRefreshing(isRefreshing) {
	return {
		type: ActionTypes.CHANGE_PRODUCT_LIST_REFRESHING,
		isRefreshing: isRefreshing
	}
}
// 加载更多（状态）
export function changeProductListLoadingMore(isLoadingMore) {
	return {
		type: ActionTypes.CHANGE_PRODUCT_LIST_LOADINGMORE,
		isLoadingMore: isLoadingMore
	}
}


