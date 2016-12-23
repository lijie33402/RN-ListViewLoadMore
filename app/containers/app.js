import React from 'react';
import {
	View,
	Navigator
} from 'react-native';
import ProductListContainer from './ProductListContainer'

export default class App extends React.Component {

    render() {
        let defaultComponent = ProductListContainer;
        return (
        <Navigator 
        	initialRoute={{ component: defaultComponent }}
        	configureScene={(route) => {
            	return Navigator.SceneConfigs.FloatFromRight;
			}}
			renderScene={(route, navigator) => {
				let Component = route.component;
				return <Component {...route} navigator={navigator} />
				//  上面的route.params 是为了方便后续界面间传递参数用的
			}} />
        );
    }
} 
