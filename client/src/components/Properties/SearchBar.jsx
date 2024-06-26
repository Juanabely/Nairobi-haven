import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#000000',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
  <Space direction="vertical"> 
    <Search placeholder="input search text" onSearch={onSearch} enterButton />    
  </Space>
);
export default SearchBar;