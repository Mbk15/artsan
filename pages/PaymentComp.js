import React from 'react';
import TrackOrder from './api/component/TrackOrder';
import ServicComp from './api/component/ServicComp';
import { useRouter } from 'next/router'
export default function PaymentComp() {
    const router = useRouter()
    function ProceedToCheckout(){
        router.push('/checkout', undefined, { shallow: true })
        // console.log("I'm tired")
    
        
    }
    return (
        <TrackOrder heading={`Order Id`}>
            <ServicComp buttonAction={ProceedToCheckout}/>
        </TrackOrder>
    )
}
