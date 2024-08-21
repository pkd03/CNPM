import './App.css'
import Book from './components/Book'
import { books } from '../data.json'
import { Link } from 'react-router-dom'
import Demo from './components/Demo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Pagination from './components/Pagination'



function App() {
  return (
    <>
      <Demo />
      <Navbar />

      <div className='d-flex container mt-4 mx-8'>
        <MainContent />
        <div className='d-flex flex-wrap row row-cols-2 row-cols-md-5  m-2 align-items-stretch'>
          {books.map(b => (
            <div className='col d-flex g-3' key={b.id}>
              <Book data={b} />
            </div>
          ))}
        </div>
      </div>

      <Pagination />


      <Footer />

    </>


  )
}


export default App
