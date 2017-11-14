import React, { Component } from 'react'
import {
    Container,
    Grid,
    Button,
    Sidebar,
    Header,
    Icon
  } from 'semantic-ui-react'

import ItineraryDay from './itinerary-day.js'

export default class ItineraryHeader extends Component {

    /* constructor(props) {
        super(props)
    } */

    // state = { visible: false }
    // Lift STATE UP to ITINERARY...
    // toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        // const { visible } = this.state
        //const iTest = { title: 'Day 1', attraction1: 'gtfo' }
        const days = this.props.content;
        const ItineraryDays = Object.keys(days).map(key => 
            <Grid.Column>
                {/* <ItineraryDay title={key} attractions={itinerary.key.Activities} /> */}
                <ItineraryDay title={key} attractions={days[key]} />
            </Grid.Column>
        )

        return(
            // <Container>
            <Sidebar.Pushable as={Container}>
                <Sidebar
                    as={Container}
                    animation='overlay'
                    width='very wide'
                    direction='right'
                    visible='false'
                    icon='labeled'
                    vertical
                    inverted
                >
                <Container inverted>
                    <Header as='h2'>Header</Header>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                </Container>
            </Sidebar>
                <Sidebar.Pusher>
                    <Grid columns={3}>
                        <Grid.Row>
                            {ItineraryDays}
                        </Grid.Row>
                    </Grid>
                </Sidebar.Pusher>
            {/* </Container> */}
            </Sidebar.Pushable>
        )
    }
}