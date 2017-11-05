import React, { Component } from 'react'
import ItineraryHeader from '../itinerary-header.js'
import ItineraryContent from '../itinerary-content.js'
import SiteFooter from '../site-footer.js'

export default class Itinerary extends Component {
    render() {
        return(
            <div>
                <ItineraryHeader />
                <ItineraryContent />
                <SiteFooter />
            </div>
        )
    }
}