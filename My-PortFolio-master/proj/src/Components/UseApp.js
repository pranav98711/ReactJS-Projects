import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Main';
import './../App.css'
import { Link } from 'react-router-dom';

function UseApp() {
    return (
        <div style={{ height: '1000px', position: 'relative' }}>

            <Layout fixedHeader>
                <Header title="Menu" className="header-color">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Menu">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content"></div>
                    <Main />
                </Content>
            </Layout>

        </div>
    )
}

export default UseApp
