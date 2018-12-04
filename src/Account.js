import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this)
  }

  handleDepositClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value)) {
      console.log("Not a number");
    }
    else {
      let amount = +this.refs.amount.value;
      if (amount > 0) {
        let newBalance = this.state.balance + amount;
        this.setState({
          balance: newBalance
        })
        this.refs.amount.value = '';
      }else{
        console.log("Deposit should be positive")
      }
    }
  }

  handleWithdrawClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value)) {
      console.log("Not a number");
    }
    else {
      let amount = +this.refs.amount.value;
      if (amount <= this.state.balance && amount > 0) {
        let newBalance = this.state.balance - amount;
        this.setState({
          balance: newBalance
        })
        this.refs.amount.value = '';
      }else{
        console.log("cannot withdraw more than current balance and withdraw must be positive")
      }
    }
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick}/>
      </div>
    )
  }
}
