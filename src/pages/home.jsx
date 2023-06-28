import React, {  useState } from 'react';
import Navbar from '../components/Navbar'
import Manga from '../components/Manga'
import Footer from '../components/Footerhome';
import FadeForm from '../components/FadeForm';
import NavSearch from '../components/NavSearch';

const Home = () => {
    const [searchText,setSearchText] = useState('')
    return (
      <div>
        <header>
            <Navbar />
            <NavSearch value={searchText} onValueChange={setSearchText}/>
            <FadeForm/>
          
        </header>
        <main>
          <Manga filters={searchText}/>
        </main>
        <footer>
          <Footer/>
        </footer>
          
      </div>
    )
  }
  
export default Home;