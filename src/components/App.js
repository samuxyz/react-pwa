import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import style from '../style.css';

const Layout = (props) => {
  return (
    <BrowserRouter>
      <div>
        <div className={style['header']}>
          <h1 className={style['title']}>My First React PWA</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>

        <footer><div>2017, Samuele Zaza</div></footer>
      </div>
    </BrowserRouter>
  );
};

const Home = () => <div><h2>Home</h2></div>;
const About = () => <div><h2>About</h2></div>;
const Blog = () => <div><h2>Blog</h2></div>;

export default Layout;
