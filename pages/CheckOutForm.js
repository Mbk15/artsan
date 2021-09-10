import React from 'react'
import TrackOrder from './api/component/TrackOrder'
import PaymentDetails from './api/component/PaymentDetails'
import { useRouter } from 'next/router'
export default function CheckOutForm() {
    const router = useRouter()
    function confirmPayment(){
        router.push('/PaymentSuccess', undefined, { shallow: true })
        // console.log("I'm tired")
        
    }
    return (
        <TrackOrder checkout heading="Payment Details">
            <PaymentDetails buttonAction={confirmPayment}/>
        </TrackOrder>
    )
}
