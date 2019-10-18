import React, { Component } from 'react'
import ValidationError from '../ValidationError'
// import PropTypes  from 'prop-types';

export class Starwars extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                searchName: {
                    value:"",
                    touched: false
                }
            }
        
    }

    updateName = (name) => {
        this.setState({searchName: {value:name, touched: true}})
    }

    validateName=() => {
        const searchName = this.state.searchName.value.trim();

        if(searchName.length === 0) {
            return 'name here '
        }
    }
  
    handleFormSubmit = (event) => {
        event.preventDefault();

        const {searchName} = this.state;
        this.props.handleSubmit(searchName.value);
        event.target.value= '';
        this.setState({
            touched: false
        })
    }


    render() {

        const searchNameError = this.validateName();

        return (
            <form onSubmit={e => this.handleFormSubmit(e)} style={{display: 'flex', flexDirection:'row'}}>
                <label htmlFor="name_search">Name Search</label>
                <input
                type="text"
                name="name"
                style={{flex:'5', padding:'30px'}}
                placeholder="Luke Skywalker"
                onChange={e => this.updateName(e.target.value)}/>
                {this.state.searchName.touched && (<ValidationError message={searchNameError} />)}
          

            <button
                type="submit"
                style= {btnStyle} 
                disabled={""}>
                    Submit
            </button>

            </form>
        )
    }


}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border:'none',
    padding: '40px',
    cursor:'pointer',
    float:'right',

}
export default Starwars
