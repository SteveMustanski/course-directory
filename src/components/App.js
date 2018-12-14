import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import app components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      {/* Switch will look for a path that matches
          and fall through to the default route if it doesn't find a match */}
      <Switch>
        {/* exact tells router to only render when the path matches exactly */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:fname-:lname" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>

  </BrowserRouter>
);

export default App;