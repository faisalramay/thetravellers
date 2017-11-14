import React, { Component } from 'react'
import ItineraryHeader from '../itinerary-header.js'
import ItineraryContent from '../itinerary-content.js'
import SiteFooter from '../site-footer.js'

export default class Itinerary extends Component {

    constructor() {
        super()
        this.state = {
            itinerary: {
                Country: 'dummy',
                TotalDays: 0,
                Rating: 3.5,
                Days: {
                    '1' : {
                        Activities: [
                            {"Type":"Stroll","Duration":45,"Location":"Ribeira Square stroll"}
                        ]
                    }
                }
            }
        }
    }

    componentDidMount() {

        fetch('https://bdktykgvlh.execute-api.ap-southeast-1.amazonaws.com/dev/itinerary/1', {mode: 'cors'})
        .then(results => {
            return results.json()
        }).then(api_data => {
            const i = JSON.parse(JSON.stringify(api_data))
            this.setState({
                itinerary: i
            })
        })
    }
    
    render() {
        return(
            <div>
                <ItineraryHeader
                    destination={this.state.itinerary.Destination}
                    days={this.state.itinerary.TotalDays}
                    rating={this.state.itinerary.Rating} />
                <ItineraryContent 
                    content={this.state.itinerary.Days} />
                <SiteFooter />
            </div>
        )
    }
}