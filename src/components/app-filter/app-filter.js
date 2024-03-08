import { Component } from 'react';
import './app-filter.css';

class AppFilter extends Component {
   
    render(){
        const {onSortByFilter} = this.props;
        const btnData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'like', label: 'Документы подписаны'},
            {name: 'increase', label: 'Открыта ЭЦП'}
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