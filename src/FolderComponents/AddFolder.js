import React, { Component } from 'react'
import NotefulForm from "../NotefulForm";
import ApiContext from "../ApiContext";
import config from "../config";

export default class AddFolder extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    static contextType = ApiContext;

    handleSubmit = e => {
        e.preventDefault()
        const { folderName } = e.target
        const newFolder = {
            folder_name : folderName.value
        }
        fetch(`${config.API_ENDPOINT}/folders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFolder),
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(folder => {
                this.context.addFolder(newFolder)
                this.props.history.push(`/`)
            })
            .catch(error => {
                console.error({ error })
                console.log("I Broke!")
            })
    }

    render() {
        return (
            <section className='AddFolder content-col-large'>
                <h2 className='noteh2'>Create a folder</h2>
                <NotefulForm onSubmit={this.handleSubmit}>
                    <div className='field'>
                        <label htmlFor='folder-name-input'>
                            Name
                        </label>
                        <input type='text' id='folderName' name='folderName' required />
                    </div>
                    <div className='buttons'>
                        <button className='glow-on-hover' type='submit'>
                            Add folder
                        </button>
                    </div>
                </NotefulForm>
            </section>
        )
    }
}