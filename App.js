import {createAppContainer, createStackNavigator} from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
      Search: SearchScreen
},
{
    initialRouteName:'Search',
    defaultNavigationOptions:{
      title:'Restro Finder 🤑 ' ,
    }
});

export default createAppContainer(navigator);