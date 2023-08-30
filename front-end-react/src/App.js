import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CodeInput from './components/CodeInput';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom'
import LexicalAnalysisTable from './components/LexicalAnalysisTable';
import LexicalDocumentation from './components/LexicalDocumentation';

function App() {

  { document.body.style.backgroundColor = 'black' }

  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element = {<CodeInput />} />
          <Route path="/lexical-analysis-table" element = {<LexicalAnalysisTable />} />
          <Route path="/lexical-documentation" element = {<LexicalDocumentation />} />
        </Routes>

      </Router>

      <Footer />
    </>
  );
}

export default App;