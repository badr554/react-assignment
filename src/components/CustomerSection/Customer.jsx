import React from 'react'
import CustomerCards from '../Customer-Card/CustomerCards'
import "../../style/components/Customer/Customer.css"
export default function  Customer() {
  return (
    <div class="CustomerSection">
      <div class="Cards">
      <CustomerCards/>
      <CustomerCards/>
      <CustomerCards/>
      <CustomerCards/>
      <CustomerCards/>
      <CustomerCards/>
      </div>
      </div>
  )
}
