import React from 'react'
import TrackOrder from './api/component/TrackOrder'
import SuccessPayment from './api/component/SuccessPayment'

export default function PaymentSuccess() {
    return (
        <TrackOrder checkout heading="Payment Unsuccess">
            <SuccessPayment />
        </TrackOrder>
    )
}
