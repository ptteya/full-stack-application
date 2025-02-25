import './App.css';
import {Routes,Route} from 'react-router-dom';

import { DocumentProvider } from './contexts/DocumentContext';
import Create from './controllers/Create';
import Home from './controllers/Home';
import Edit from './controllers/Edit';
import Details from './controllers/Details';

function App() {
  return (
    <DocumentProvider>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:docId' element={<Edit/>}/>
        <Route path='/details/:docId' element={<Details/>}/>
      </Routes>
    </div>
    </DocumentProvider>
  );
}

export default App;
