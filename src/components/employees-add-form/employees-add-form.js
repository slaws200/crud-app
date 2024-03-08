import { Component } from 'react';
import './employees-add-form.css';


class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            like: false
        }
    }
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    onCheck = (e) => {
        this.setState({
            like: e.target.checked
        })
    }

    render(){
        const {onAdd} = this.props;
        const {name, like} = this.state;
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name" 
                        value={name}
                        onChange={this.onValueChange}/>
                    <div className="form-check form-switch">                    
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">&#8592;  Документы подписаны?</label>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" 
                        onChange={this.onCheck} checked={like}/>
                    </div>
    
                    <button type="submit"
                            className="btn btn-outline-light" 
                            onClick={(e) => {
                                e.preventDefault();
                                onAdd(name, like)
                                this.setState({
                                    name: '',
                                    like: false
                                })
                            }}>
                            Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;