import React from 'react';
import {
  Route,
  NavLink
} from 'react-router-dom';

// Import app components
import HTML from './courses/HTML';
import CSS from './courses/CSS';
import JavaScript from './courses/JavaScript';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}

      {/* exact tells router to only render when the path matches exactly */}
      <Route path="/courses/html" component={HTML} />
      <Route path="/courses/css" component={CSS} />
      <Route path="/courses/javascript" component={JavaScript} />
    </div>


);

export default Courses;