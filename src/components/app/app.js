import { v4 as uuid } from 'uuid';
import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [                
                {name: "Вячеслав А.", increase: false, like: false, id: uuid()},
                {name: "Ксения К.", increase: false, like: false, id: uuid()},
                {name: "Валерий Ш.", increase: false, like: false, id: uuid()},
                {name: "Павел Т.", increase: false, like: false, id: uuid()},
                {name: "Оксана П.", increase: false, like: false, id: uuid()}
            ],
            term: '',
            filter: 'all'
        }
    }

    componentDidMount(){
        if(localStorage.getItem('data')){
            this.setState({
                data: JSON.parse(localStorage.getItem('data'))
            })
        }
    }

    componentDidUpdate(){
        localStorage.setItem('data', JSON.stringify(this.state.data));
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (nameValue, like) => {
        if(nameValue.length > 3){
            const newItem = [{name: nameValue, increase: false, like: like, id: uuid()}]
            this.setState(({data}) => {
                return{
                    data: data.concat(newItem)
                }
            })
        }        
    }
    onToggleProp = (id, prop) => {
       this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
       }))
    }
    searchEmploy = (items, term) => {
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    }
    filterEmploy = (items, filter) => {
        switch (filter){
            case 'like':
                return items.filter(item => item.like)
            case 'increase':
                return items.filter(item => item.increase)
            default:
                return items
        }
        
    }
    onSortByFilter = (filter) => {
        this.setState({filter});
    }

    render(){        
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmploy(this.searchEmploy(data, term), filter);
        return(
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                    filter={filter}
                    onSortByFilter={this.onSortByFilter}/>
                </div>
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>    
        )
    }
        
}

export default App;