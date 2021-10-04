import React,{useState} from 'react'
import { Table, Tag, Space } from 'antd';

function TableDesign() {
    const { Column, ColumnGroup } = Table;
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: () => <a>Delete</a>,
        },
      ];

    const data = [
      {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['developer'],
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
    ];
   
    
    return (
        <div>
            <Table   
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }} dataSource={data}>
                
          <Column />
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      
      <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />

    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  
  </Table>,
        
      </div>
          
      
    )
        }

export default TableDesign;
