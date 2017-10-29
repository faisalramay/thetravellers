import React, { Component } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
  } from 'semantic-ui-react'

export default class ItineraryHeader extends Component {
    render() {
        return(
            <Segment inverted vertical>
                <Container>
                    <Menu inverted stackable size='large'>
                        <Menu.Item>
                            <h3>The Travellers</h3>
                        </Menu.Item>
                        <Menu.Item as='a' active>Home</Menu.Item>
                        <Menu.Item position='right'>
                            //Search
                        </Menu.Item>
                    </Menu>
                </Container>
            </Segment>
        )
    }
}