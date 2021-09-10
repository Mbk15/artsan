import React from 'react'
import TrackOrder from './api/component/TrackOrder'
import OrderDetails from './api/component/OrderDetails'
import WrapButton from './api/component/WrapButton'
import { useRouter } from 'next/router'

export default function OrderSummary() {
    const router = useRouter()
    function completeOrder(){
        router.push('/PaymentComp', undefined, { shallow: true })
        
    }
    return (
        <TrackOrder orderId>
           <OrderDetails />
           <WrapButton rightButtonAction={completeOrder} leftText="Dispute" rightText="Complete"/>
        </TrackOrder>
    )
}
