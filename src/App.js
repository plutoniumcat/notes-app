import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>TODO</h1>} />
        <Route path="/notes" element={<h1>TODO</h1>} />
        <Route path="/notes/:noteid" element={<h1>TODO</h1>} />
        <Route path="/notes/:noteid/edit" element={<h1>TODO</h1>} />
        <Route path="/notes/searchByWord/:word" element={<h1>TODO</h1>} />
        <Route path="/notes/sort/duedate" element={<h1>TODO</h1>} />
        <Route path="/notes/sort/createddate" element={<h1>TODO</h1>} />
        <Route path="/notes/filter/overdue" element={<h1>TODO</h1>} />
        <Route path="/notes/filter/done" element={<h1>TODO</h1>} />
      </Routes>
    </div>
  );
}

export default App;
