import React from 'react';
import axios from 'axios';
import { MDBDataTable, MDBContainer } from 'mdbreact';

const currentData = {
  columns: [
    {
      label: 'Account No',
      field: 'Account No',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Date',
      field: 'Date',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Transaction Details',
      field: 'Transaction Details',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Value Date',
      field: 'Value Date',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Withdrawal AMT',
      field: 'Withdrawal AMT',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Deposit AMT',
      field: 'Deposit AMT',
      sort: 'asc',
      width: 100
    },
    {
      label: 'Balance AMT',
      field: 'Balance AMT',
      sort: 'asc',
      width: 100
    }
  ],
  rows: [],
};

const Spinner = () => {
  return (
    <>
      <div style={{
        marginTop: '30%',
        marginLeft: '50%',
      }} className="spinner-border dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

class AccountDetails extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      data: {
        columns: [],
        rows: []
      },
    }
  }

  componentDidMount() {
    axios.get('http://starlord.hackerearth.com/bankAccount')
    .then(res => {
      currentData.rows = res.data;
      this.setState({ data: currentData, loading: false });
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Account Details</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://prafulnikam.herokuapp.com" target='_blank'>Portfolio</a>
              </li>
            </ul>
          </div>
        </nav>
        <MDBContainer style={{
          marginTop: '3%',
        }}>
          { 
            this.state.loading ?
              <Spinner/>
            :
            <MDBDataTable
              striped
              bordered
              small
              data={this.state.data}
            />
          }
          
        </MDBContainer>
        <footer class="page-footer bottom font-small bg-dark fixed-bottom">
          <div class="footer-copyright text-center py-3">© 2020 Copyright : 
            <a href="https://prafulnikam.herokuapp.com" target='_blank'> Praful Nikam</a>
          </div>
        </footer>
      </div>
    )
  }
}

export default AccountDetails;