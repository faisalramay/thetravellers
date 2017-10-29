import React, { Component } from 'react'
import {
    Segment,
    Header,
    Item,
    Label
  } from 'semantic-ui-react'

export default class ItineraryDay extends Component {
    render() {
        return(
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Header as='h3'>Day 1</Header>
                <Item.Group divided>
                    <Item>
                        <Item.Image src='/assets/images/items/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>Sultanahmet Square</Item.Header>
                            <Item.Meta>
                                <span>30 - 45 minutes</span>
                            </Item.Meta>
                            <Item.Description>Take a nice stroll in the nice square and be nice</Item.Description>
                            <Item.Extra>
                                <Label>Island</Label>
                                <Label icon='globe' content='Additional Languages' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image src='/assets/images/items/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>Blue Mosque</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>30 - 45 minutes</span>
                            </Item.Meta>
                            <Item.Description>This is a nice island in Singapore</Item.Description>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image src='/assets/images/items/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>Basilica Cistern</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>1 - 1.5 hours</span>
                            </Item.Meta>
                            <Item.Description>This is a nice island in Singapore</Item.Description>
                            <Item.Extra>
                                <Label>Island</Label>
                                <Label icon='globe' content='Additional Languages' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
        )
    }
}