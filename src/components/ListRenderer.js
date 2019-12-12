import React from 'react'
import '../styles/ListRendererStyle.css';

const ListRenderer = ({dataList = [], onComplete = () => {}, onDelete = () => {}}) => {
    return (
        dataList.map((element, index) => {
                    return <div key={index} className="d-flex p-2 line-divider">
                                <input className='px-2 mt-1' type="checkbox" name={element.label} onChange={(e) => onComplete(e, index)} />
                                <span className={element.complete ? 'completed px-2' : 'px-2'} > {element.label} </span>
                                <span className="ml-auto" onClick={(e) => onDelete(e, index)} ><i className="fa fa-times-circle"></i></span>
                            </div>
                 })
    )
}

export default ListRenderer;