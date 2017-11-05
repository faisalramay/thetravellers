import React, { Component } from 'react'
import {
    Container,
    Menu,
    Search
  } from 'semantic-ui-react'

export default class SiteHeader extends Component {
    render() {
        return(
            <Menu inverted fixed='top'>
                <Container>
                    <Menu.Item as='a' header>
                        <h3>toorister</h3>
                    </Menu.Item>
                    <Menu.Item as='a' active>Home</Menu.Item>
                    <Menu.Item position='right'>
                        <Search />
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}