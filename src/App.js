import React from 'react';
import Header from "./Header";
import MainNotes from "./MainNotes";
import MainFolders from "./MainFolders";
import { Route } from 'react-router-dom';
import NoteSingle from "./NoteSingle";
import NotesInFolder from "./NotesInFolder";
import config from "./config";
import ApiContext from "./ApiContext";
import AddNote from "./AddNote";
import AddFolder from "./AddFolder";


class App extends React.Component {

    state= {
            notes: [],
           folders: []

   };

   componentDidMount() {
       /*setTimeout(() => this.setState(Store), 0);*/
       Promise.all([
           fetch(`${config.API_ENDPOINT}/notes`),
           fetch(`${config.API_ENDPOINT}/folders`)
       ])
           .then(([notesRes, foldersRes]) => {
               if (!notesRes.ok)
                   return notesRes.json().then(e => Promise.reject(e))
               if (!foldersRes.ok)
                   return foldersRes.json().then(e => Promise.reject(e))

               return Promise.all([
                   notesRes.json(),
                   foldersRes.json(),
               ])
           })
           .then(([notes, folders]) => {
               this.setState({ notes, folders })
           })
           .catch(error => {
               console.error({ error })
           })
   }

    handleAddFolder = folder => {
        this.setState({
            folders: [
                ...this.state.folders,
                folder
            ]
        })
    }

    handleAddNote = note => {
        this.setState({
            notes: [
                ...this.state.notes,
                note
            ]
        })
    }

    handleDeleteNote = noteId => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        })
    }

    render() {
       const {notes , folders} = this.state
        const value = {
            notes: this.state.notes,
            folders: this.state.folders,
            addFolder: this.handleAddFolder,
            addNote: this.handleAddNote,
            deleteNote: this.handleDeleteNote,
        }
        return (
            <ApiContext.Provider value={value}>
            <div className='main-div'>
                <div className='header-div'>
                <Route path='/' component={Header}/>
                    <hr />
                </div>
                <div className='content-div'>
                    <Route path='/'
                           render={routeProps => (
                               <MainFolders
                                   folders={folders}
                                   notes={notes}
                                   {...routeProps}
                          />)
                           }/>
                    <hr />
                    <Route exact path='/'
                           render={routeProps => (
                               <MainNotes
                                   folders={folders}
                                   notes={notes}
                                   {...routeProps}
                               />)}/>
                    <Route path='/note/:id'
                           render={routeProps => (
                               <NoteSingle
                               folders={folders}
                               notes={notes}
                               {...routeProps}
                               />
                           )} />
                    <Route path='/name/:folderId'
                           render={routeProps => (
                               <NotesInFolder
                               folders={folders}
                               notes={notes}
                               {...routeProps}
                               />
                           )}/>
                    <Route path='/AddNote'
                           render={routeProps => (
                               <AddNote
                                folders={folders}
                                notes={notes}
                                {...routeProps}
                               />
                        )}
                    />
                    <Route path='/AddFolder'
                           render={routeProps => (
                               <AddFolder
                                   folders={folders}
                                   notes={notes}
                                   {...routeProps}
                               />
                           )}
                    />
                </div>
            </div>
            </ApiContext.Provider>
        )
    }
}

export default App;
