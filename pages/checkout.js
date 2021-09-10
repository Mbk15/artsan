import React from 'react'
import TrackOrder from './api/component/TrackOrder'
import OrderDetails from './api/component/OrderDetails'
import WrapButton from './api/component/WrapButton'
import { useRouter } from 'next/router'
export default function CheckOut() {
    const router = useRouter()
    function ProceedToCheckForm(){
        router.push('/CheckOutForm', undefined, { shallow: true })
        // console.log("I'm tired")
        
    }
    return (
        <TrackOrder checkout heading="Check Order">
           <OrderDetails />
           <WrapButton rightText="Proceed" leftText="Cancel" rightButtonAction={ProceedToCheckForm}/>
        </TrackOrder>
    )
}