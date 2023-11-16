
import { Route, Routes } from 'react-router-dom';
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout';
// import Test from './components/Test';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
         <Route index element={<div>Home</div>} />
          <Route path="cakes" element={<div>CAKES</div>} />
          <Route path="constructor" element={<div>CONSTRUCTOR</div>} />
          <Route path="about" element={<div>ABOUT</div>} />
          <Route path="delivery" element={<div>DELIVERY</div>} />
          <Route path="cooperation" element={<div>COOPERATION</div>} />
          <Route path="questions" element={<div>QUESTIONS</div>} />
          <Route path="contacts" element={<div>CONTACTS</div>} />
          </Route>
      </Routes>
      </div>
  );
}



export default App;

