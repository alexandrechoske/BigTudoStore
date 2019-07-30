import { createStackNavigator, createAppContainer } from 'react-navigation';

import productListv2 from './pages/productList/productListv2';
import login from './pages/Login/login';
import mainGallery from './pages/mainGallery/mainGallery';
import contentContainer from './pages/mainGallery/components/contentContainer';

import description from './pages/productList/description';


const NavStack = createStackNavigator({

  login: {screen: login},  

  mainGallery: {screen: mainGallery},   
  
  contentContainer: {screen: contentContainer},

  productListv2: {screen: productListv2},    

  description: {screen: description}
   
  });

const App = createAppContainer(NavStack);

export default App;