import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Lists from './components/lists/Lists';
import Nomatch from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import Todos from './components/todos/Todos';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/lists' element={<Lists />} />
      <Route path='/lists/:listId/todos' element={<Todos />} />
      <Route path='*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;