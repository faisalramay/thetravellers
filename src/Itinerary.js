import React, { Component } from 'react'
import ItineraryHeader from './components/itinerary-header.js'
import ItineraryContent from './components/itinerary-content.js'
import SiteFooter from './components/site-footer.js'

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