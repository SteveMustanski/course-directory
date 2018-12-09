import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// Import app components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
    <Header />
      {/* exact tells router to only render when the path matches exactly */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>

  </BrowserRouter>
);

export default App;