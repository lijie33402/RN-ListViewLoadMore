import React, {
    Component
} from 'react';
import {
	View,
	Navigator
} from 'react-native';
import ProductListContainer from './ProductListContainer'
import OtherContainer from './OtherContainer.js'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as Actions from '../action/product.js';

class App extends Component {
    constructor(props) {
        super(props);
    }
    _changeTabbar = (tab) => {
        const {actions} = this.props;
        actions.changeTabbar(tab);
    }
    render() {
        const { selectedTab } = this.props.reducer;
        return (
            <TabNavigator tabBarStyle={{ backgroundColor:'white' }} style={{backgroundColor: 'white'}}>
                <TabNavigator.Item
                    title="主页"
                    selected={selectedTab === 'home'}
                    renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
                    onPress={() => this._changeTabbar('home')}>
                    <ProductListContainer {...this.props} />
                 </TabNavigator.Item>
                 <TabNavigator.Item
                    title="其他"
                    selected={selectedTab === 'other'}
                    renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
                    onPress={() => this._changeTabbar('other')}>
                    <OtherContainer {...this.props}/>
                 </TabNavigator.Item>
            </TabNavigator>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
