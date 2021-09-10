import React from 'react'
import TrackOrder from './api/component/TrackOrder'
import Search from './api/component/Search'
import WrapButton from './api/component/WrapButton'

export default function SearchOrder() {
    return (
        <TrackOrder heading="Order Id" minHeight>
            <Search />
        </TrackOrder>
    )
}
