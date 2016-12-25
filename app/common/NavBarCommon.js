import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	const { title, leftTitle, leftImage, leftAction, rightTitle, rightImage, rightAction } = this.props;
        return (
            <View style={[styles.barView, this.props.style]}>
            	<View style={ styles.showView }>   			
                    <View  style={styles.leftNav}>
                        { 
                            (() => {
                                if (leftTitle) {
                                    return <TouchableOpacity onPress={ ()=>{leftAction()} }>
                                                <Text style={styles.barButton}>{leftTitle}</Text>
                                            </TouchableOpacity>
                                } else if (leftImage) {
                                    return <TouchableOpacity onPress={ ()=>{leftAction()} }>
                                                <Image source={ leftImage }/>
                                            </TouchableOpacity>
                                }
                            })()
                        }			        
                    </View>
                    <View style={styles.centerNav}>
                        {
                           (() => {
                                if (title) {
                                    return <Text style={styles.title}>{title}</Text>
                                }
                            })()      
                        }                               
                    </View>
                    <View  style={styles.rightNav}>
                        { 
                            (() => {
                                if (rightTitle) {
                                    return <TouchableOpacity onPress={ ()=>{rightAction()} }>
                                                <Text style={styles.barButton}>{rightTitle}</Text>
                                            </TouchableOpacity>
                                } else if (rightImage) {
                                    return <TouchableOpacity onPress={ ()=>{rightAction()} }>
                                                <Image source={ rightImage }/>
                                            </TouchableOpacity>
                                }
                            })()
                        }                   
                    </View>
		        </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    barView: {
        height: 64,
        backgroundColor: '#4E78E7',
    },
    showView: {
    	flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center',
    	flexDirection: 'row',
    	marginTop: 20,
    	height: 44,
    },
    leftNav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 5
    },
    centerNav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 18
    },
    rightNav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 5
    },
    barButton: {
        color: 'white'
    }
})



export default NavigationBar