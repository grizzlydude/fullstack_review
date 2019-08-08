import React, { Component } from 'react'
import Transaction from '../Transaction/Transaction'

export default class Transfer extends Component {
    state = {
        account: '',
        amount: '',
        transactionType: ''
    }
    render() {
        return (
            <div className='Transfer'>
                <Transaction />
            </div>
        )
    }
}