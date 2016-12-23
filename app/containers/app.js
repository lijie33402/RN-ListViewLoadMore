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
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator tabBarStyle={{ backgroundColor:'white' }} style={{backgroundColor: 'white'}}>
                <TabNavigator.Item
                    title="主页"
                    selected={this.state.selectedTab === 'home'}
                    renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <ProductListContainer {...this.props} />
                 </TabNavigator.Item>
                 <TabNavigator.Item
                    title="其他"
                    selected={this.state.selectedTab === 'other'}
                    renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
                    onPress={() => this.setState({ selectedTab: 'other' })}>
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
