import React, { Component } from 'react'
import {
    Container,
    Grid,
    Rating,
    Icon,
    Menu
  } from 'semantic-ui-react'

import SiteHeader from './site-header.js'

export default class ItineraryHeader extends Component {

/*     constructor(props) {
        super(props)
    } */

    render() {
        return(
            <div>
                <SiteHeader />
                <Container style={{ marginTop: '7em' }}>
                    <Grid>
                        <Grid.Column width={12}>
                            <h3>{this.props.days} Days Itinerary for {this.props.destination}</h3>
                            <Rating icon='star' defaultRating={this.props.rating} maxRating={5} />
                            <p>Submitted by: I think this can go away for now</p>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Menu icon='labeled' text>
                            <Menu.Item>
                                <Icon name='print' />
                                Print
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name='bookmark' />
                                Bookmark
                            </Menu.Item>
                            </Menu>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}