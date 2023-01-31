import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Container,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import { useState } from 'react';

function App() {
  const[count,setCount] = useState(0);
  return (
    <>
    <Segment style={{ padding: '15em 8em' }} vertical>
    
      <Container textAlign='center'>
      <div className='card'>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Counter App
        </Header>
        <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <p style={{ fontSize: '1.33em' }}>
        
        <Container className="my-5">
          
            <div className='main'><Container textAlign='center'>{count}</Container></div>
            <Button className="mx-2" color='green' onClick={()=>setCount(count+1)} >Increment </Button> &emsp; &ensp; &emsp;&emsp;
            <Button className="mx-3" color='red' onClick={()=>setCount(count-1)} disabled={count===0}>Decrement </Button>
   
        </Container>
</p>
          </Grid.Column>
        </Grid.Row>
        </Grid>
        </div>
      </Container>
      <Header textAlign='center'>Assignment done by Ayush Singh Parihar 12010440</Header>
    </Segment>

    </>
  );
}

export default App;
