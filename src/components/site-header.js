import React, { Component } from 'react'
import {
    Menu,
    Search
  } from 'semantic-ui-react'

export default class SiteHeader extends Component {
    render() {
        return(
            <Menu inverted stackable size='large'>
                <Menu.Item>
                    <h3>The Travellers</h3>
                </Menu.Item>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item position='right'>
                    <Search />
                </Menu.Item>
            </Menu>
        )
    }
}