import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import './App.css'
import Test from './components/Test';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Test />} />
          <Route path="cakes" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
}



export default App;
