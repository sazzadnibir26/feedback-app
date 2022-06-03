import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
    return (
        <FeedbackProvider>
            <Router>
                <Header />

                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App
