import React, { Component } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

export default class App extends Component {


  render() {
    return (
      <div>
      <Navbar />
      <MainContent />
      <Footer />
      </div>
    )
  }
}
