import React, { Component } from 'react'
import {
    Segment,
    Container,
    Header,
    Search
  } from 'semantic-ui-react'

import SiteHeader from '../site-header.js'
import SiteFooter from '../site-footer.js'

export default class Itinerary extends Component {
    render() {
        return(
            <div>
                <SiteHeader />
                <Segment textAlign='center' style={{ minHeight: 400, padding: '1em 0em', marginTop: '7em' }} vertical>
                    <Container text>
                         <Header
                            as='h1'
                            content='Where are you travelling?'
                            style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: '1em', marginTop: '2em' }}
                        />
                        <Search />
                    </Container>
                </Segment>
                <SiteFooter />
            </div>
        )
    }
}