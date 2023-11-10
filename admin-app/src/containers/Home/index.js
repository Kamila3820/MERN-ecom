import React from 'react'
import Layout from '../../components/Layout'
import { Container } from 'react-bootstrap';


export default function Home(props) {
  return (
    <Layout>
        
      <Container style={{margin:'5rem'}} className='text-center'>
        <h1>Welcome to Admin Dashboard</h1>
      </Container>
    
    </Layout>
  )
}
