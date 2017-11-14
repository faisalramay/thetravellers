import React, { Component } from 'react'
import {
    Segment,
    Container,
    Grid,
    Header,
    Divider,
    Rating,
    Checkbox,
    Form,
    Item,
    Button,
    Icon,
    Image as ImageComponent,
    Label
  } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import SiteHeader from '../site-header.js'
import SiteFooter from '../site-footer.js'

const paragraph = <ImageComponent src='/assets/images/wireframe/short-paragraph.png' />

export default class Itinerary extends Component {
    render() {
        return(
            <div>
                <SiteHeader />
                <Container style={{ marginTop: '7em' }}>
                    <Grid>
                        <Grid.Column width={4}>
                            <Segment>
                                <Header as='h1' content='Filters' />
                                <Divider />
                                <Rating icon='star' defaultRating={3} maxRating={5} />
                                <Divider />
                                <Checkbox slider />
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={12}>
                        <Item.Group divided>
    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as={Link} to='/Itinerary'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>Union Square 14</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>My Neighbor Totoro</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC Cinema</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
            <Link to='/Itinerary' />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Watchmen</Item.Header>
        <Item.Meta>
          <span className='cinema'>IFC</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
                        </Grid.Column>
                    </Grid>
                </Container>
                <SiteFooter />
            </div>
        )
    }
}