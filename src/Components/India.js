import React,{Component} from 'react';
import Card from 'react-bootstrap/Card';
import Statedata from './Statedata';

class India extends Component{
    render(){
        return(
            <div className='row'>
                <div className='col-md-12'>
                    <img src='https://flagcdn.com/64x48/in.png'/>
                    <h3>INDIA</h3>
                </div>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-3'>
                           <Card className='badge bg-primary' style={{ width: '18rem' }}>
                           <Card.Body className='text-center'>
                           <Card.Title>TOTAL CASES</Card.Title>
                           <h3>18655</h3>
                           <Card.Text>
                           [Today : 25]
                           </Card.Text>
                           </Card.Body>
                           </Card> 
                        </div>
                        <div className='col-md-3'>
                           <Card className='badge bg-warning' style={{ width: '18rem' }}>
                           <Card.Body className='text-center'>
                           <Card.Title>ACTIVE CASES</Card.Title>
                           <h3>18655</h3>
                           <Card.Text>
                           [Today : 25]
                           </Card.Text>
                           </Card.Body>
                           </Card> 
                        </div>
                        <div className='col-md-3'>
                           <Card className='badge bg-success' style={{ width: '18rem' }}>
                           <Card.Body className='text-center'>
                           <Card.Title>RECOVERED</Card.Title>
                           <h3>18655</h3>
                           <Card.Text>
                           [Today : 25]
                           </Card.Text>
                           </Card.Body>
                           </Card> 
                        </div>
                        <div className='col-md-3'>
                           <Card className='badge bg-danger' style={{ width: '18rem' }}>
                           <Card.Body className='text-center'>
                           <Card.Title>TOTAL DEATH</Card.Title>
                           <h3>18655</h3>
                           <Card.Text>
                           [Today : 25]
                           </Card.Text>
                           </Card.Body>
                           </Card> 
                        </div>
                    </div>
                </div>
                <div>
                    <Statedata/>
                </div>
            </div>
        )
    }
}

export default India;