
import './employees-list-item.css';


const EmployeesListItem = (props) => {
    const {name, onDelete, onToggleProp, increase, like} = props;
    let classNames = 'list-group-item d-flex justify-content-between';
    if(increase){
        classNames += ' increase';
    }
    if(like){
        classNames +=' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{name}</span>
            <div>{like ? 'Документы подписаны': 'Нужно подписать документы!'}</div>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle="increase">
                    <i className="fas fa-edit"></i>
                </button>

                <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-check"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;