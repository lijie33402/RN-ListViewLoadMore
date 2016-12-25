import React, { 
	Component 
} from 'react'
import { Navigator } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/store.js'
import App from './containers/app.js'
const store = configureStore();

class Root extends Component {

	constructor(props) {
	  super(props);
	  console.log('app init .....');
	}

	render() {
		return (
			<Provider store={ store }>
				<Navigator
					initialRoute = {{ component: App}}
					configureScene={(route) => {
		            	return Navigator.SceneConfigs.FloatFromRight;
					}}
					renderScene={(route, navigator) => {
						let Component = route.component;
						return <Component {...route} navigator={navigator} />
					}} />
			</Provider>
		);
	}
}

export default Root;