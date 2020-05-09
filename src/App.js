import React from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main';
import { Sidebar } from './Components/Sidebar/Sidebar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Sidebar />
        </Main>
        <Footer />
      </div>
    )
  }
}
export default App;