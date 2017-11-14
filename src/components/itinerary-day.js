import React, { Component } from 'react'
import {
    Segment,
    Header,
    Item,
    Button,
    Icon,
    Label
  } from 'semantic-ui-react'

export default class ItineraryDay extends Component {

    constructor(props){
        super(props)
        console.log(props)
    }

    render() {

        const attractions = this.props.attractions.Activities;
        console.log(attractions)
        const dayAttractions = attractions.map(key => 
            <Item>
                <Item.Image size='small' src='/assets/images/items/image.png' />
                <Item.Content>
                    <Item.Header as='a'>{key.Location}</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>{key.Duration} Minutes</span>
                    </Item.Meta>
                    <Item.Description>Sultanahmet Square is a nice par</Item.Description>
                    <Item.Extra>
                        <Label>{key.Type}</Label>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )

        return(
            <Segment vertical raised style={{ minHeight: 200, padding: '1em', margin: '0.5em 0em' }}>
                <Header as='h3'>Day {this.props.title}</Header>
                <Item.Group>
                    {dayAttractions}
                </Item.Group>
            </Segment>
        )
    }
}