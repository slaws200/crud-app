import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const {onSortByFilter} = this.props;
        const btnData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'like', label: 'Сотрудники на повышение'},
            {name: 'moreThen1000', label: 'З/П больше 1000$'}
        ];

        const btns = btnData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-light' : 'btn-outline-light';
            return (
                <button 
                    className={`btn ${clazz}`}
                    type="button"
                    key={name}
                    onClick={() => onSortByFilter(name)}>
                    {label}
                </button>
            )
        })
        return (
            <div className="btn-group">
                {btns}
            </div>
        )
    }
}
export default AppFilter;