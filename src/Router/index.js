import React from 'react';
import { HashRouter, Routes, Route} from 'react-router-dom';
import Details from '../Components/Details';
import Search from '../Components/Search';
import NewBook from '../Components/NewBook';
import SignIn from '../Components/SignIn';


const Router = React.memo(props => { 
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Search /> } />
                <Route exact path='/search' element={<Search />}/>
                <Route exact path='/detail/:id' element={<Details />} />
                <Route exact path='/newBook' element={<NewBook />} />
                <Route exact path='/sign-in' element={<SignIn />} />
                <Route exact path='/hot' element={<Search />} />
                <Route exact path='/best-seller' element={<Search />} />
                <Route exact path='/kids' element={<Search />} />
            </Routes>
        </HashRouter>
    )
});
export default Router;