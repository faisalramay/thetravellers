import React, { Component } from 'react'
import {
    Segment,
    Header,
    Feed,
    Icon,
    Label
  } from 'semantic-ui-react'

export default class ItineraryDay extends Component {
    render() {
        return(
            <Segment vertical raised>
                <Header as='h3'>Day 1</Header>
                <Feed>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='/assets/images/items/image.png' />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Sultanahmet Square</Feed.User> is a nice park
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
                                    4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='/assets/images/items/image.png' />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Sultanahmet Square</Feed.User> is a nice park
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
                                    4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='/assets/images/items/image.png' />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Sultanahmet Square</Feed.User> is a nice park
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra>
                                <Label>Mosque</Label>
                            </Feed.Extra>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
                                    4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Label>
                            <img src='/assets/images/items/image.png' />
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>Sultanahmet Square</Feed.User> is a nice park
                                <Feed.Date>1 Hour Ago</Feed.Date>
                            </Feed.Summary>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon name='like' />
                                    4 Likes
                                </Feed.Like>
                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Segment>
        )
    }
}