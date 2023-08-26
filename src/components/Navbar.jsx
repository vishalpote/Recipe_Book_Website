
import { Menu } from 'semantic-ui-react';
import {logo} from "../constants/logo"
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item name='RecipeStore'>
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/" /> 
           <Menu.Item name="Recipes" as={Link} to="/recipes" /> 
        </Menu>
    )
}

export default NavBar;