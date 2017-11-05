import React, { Component } from 'react'
import {
    Container,
    Grid
  } from 'semantic-ui-react'

import ItineraryDay from './itinerary-day.js'

export default class ItineraryHeader extends Component {
    render() {
        return(
            <Container>
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <ItineraryDay />
                        </Grid.Column>
                        <Grid.Column>
                            <ItineraryDay />
                        </Grid.Column>
                        <Grid.Column>
                            <ItineraryDay />
                        </Grid.Column>
                        <Grid.Column>
                            <ItineraryDay />
                        </Grid.Column>
                        <Grid.Column>
                            <ItineraryDay />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}