import { Input } from "antd"
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
    return (
        <Input placeholder="Search your favorite product here" prefix={<SearchOutlined/>}/>
    )
}

export default SearchBar