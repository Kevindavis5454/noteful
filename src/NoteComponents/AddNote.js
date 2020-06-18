import React, { Component } from 'react';
import NotefulForm from "../NotefulForm";
import ApiContext from "../ApiContext";
import config from "../config";

export default class AddNote extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    static contextType = ApiContext;

    handleSubmit = e => {
        e.preventDefault()
        const { title, content, folderId } = e.target
        const newNote = {
            title: title.value,
            content: content.value,
            folder_id: folderId.value,
            /*modified: new Date(),*/
        }
        console.log(folderId.value)
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newNote),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(data => {
                title.value = ''
                content.value = ''
                folderId.value= ''
                this.context.addNote(data)
                this.props.history.push(`/`)

            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        const { folders=[] } = this.context
        return (
            <section className='AddNote content-col-large'>
                <h2 className='noteh2'>Create a note</h2>
                <NotefulForm onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label htmlFor='note-name-input'>
                            Name
                        </label>
                        <input type='text' id='title' name='title' required/>
                    </div>
                    <div className='field'>
                        <label htmlFor='note-content-input'>
                            Content
                        </label>
                        <textarea id='content' name='content' />
                    </div>
                    <div className='field'>
                        <label htmlFor='note-folder-select'>
                            Folder
                        </label>
                        <select id='folderId' name='folderId' required>
                            {folders.map(folder =>
                                <option key={folder.id} value={folder.id}>
                                    {folder.folder_name}
                                </option>
                            )}
                        </select>
                    </div>
                    <div className='buttons'>
                        <button className='glow-on-hover' type='submit'>
                            Add note
                        </button>
                    </div>
                </NotefulForm>
            </section>
        )
    }
}
