import {createAppContainer, createStackNavigator} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import RestroScreen from './src/screens/RestroScreen';


const navigator = createStackNavigator({
      Search: SearchScreen,
      Restro: RestroScreen
},
{
    initialRouteName:'Search',
    defaultNavigationOptions:{
      title:'Restro Finder 🤑 ' ,
    }
});

export default createAppContainer(navigator);