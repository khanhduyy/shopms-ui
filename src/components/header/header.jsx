import { Menu, Row } from 'antd';
import { HomeOutlined, SearchOutlined, LoginOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo';
import SearchBar from './searchBar';

const Header = () => {
    const [key, setKey] = useState("home")

    const onSelectMenu = e => {
        setKey(e.key)    
    }

    return (
        <Row>
            <Logo />
            <Menu onClick={onSelectMenu}
                    selectedKeys={[key]}
                    mode="horizontal"
                    className="Menu">
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="login">
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
            <SearchBar />
        </Row>
    )
}

export default Header