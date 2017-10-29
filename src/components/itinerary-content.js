import React, { Component } from 'react'
import {
    Grid,
    Segment
  } from 'semantic-ui-react'

import ItineraryDay from './itinerary-day.js'

export default class ItineraryHeader extends Component {
    render() {
        return(
            <Segment>
                <Grid columns={4} stackable>
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
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <ItineraryDay />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}