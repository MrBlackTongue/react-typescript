import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Home from './components/home/home';
import Contacts from './components/contacts/contacts';
import Posts from './components/posts/posts';
import Post from './components/post/post';

import './style.css';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/contacts' element={<Contacts/>} />
                <Route path='/posts' element={<Posts/>} />
                <Route path='/posts/:id' element={<Post/>} />
            </Routes>
        </App>
    </BrowserRouter>
), document.getElementById('root'));