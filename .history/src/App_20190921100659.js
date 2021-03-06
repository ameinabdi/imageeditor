import React from 'react';
import Editor from './editor';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>

        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64, background: '#fff', }}>
          <div style={{ padding: 24, minHeight: 380 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
    </div>
  );
}

export default App;
