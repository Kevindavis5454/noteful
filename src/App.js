import React from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import Store from './Store';
import { Route } from 'react-router-dom';
import NoteNav from "./NoteNav";
import FolderNavNoteDisplay from "./FolderNavNoteDisplay";

class App extends React.Component {

    state= {
            notes: [],
           folders: []

   };

   componentDidMount() {
       setTimeout(() => this.setState(Store), 0);
   }


    render() {
        return (
            <div className='main-div'>
                <Route path='/' component={Header}/>
                <div className='content-div'>
                    <Route path='/' component={Sidebar}/>
                    <hr />
                    <Route exact path='/' component={MainContent}/>
                    <Route path='/note/:name' component={NoteNav} />
                    <Route path='/name/:folderId'
                           render = {() =>
                        <FolderNavNoteDisplay

                    /> }
                    />
                    {/*<Route path='/name/:folderId' component={FolderNavNoteDisplay} />*/}
                </div>
            </div>
        )
    }
}

export default App;
