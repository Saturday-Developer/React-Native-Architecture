import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ListOfBooks, DetailsOfBooks } from '../container';

const MainNavigator = createStackNavigator({
  ListOfBooks: { screen: ListOfBooks },
  DetailsOfBooks: { screen: DetailsOfBooks },
});

const Nav = createAppContainer(MainNavigator);

export default Nav;
