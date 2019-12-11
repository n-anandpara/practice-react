import React from 'react'

function ListRenderer({dataList = []}) {
    return (
        dataList.map((element, index) => {
                    return <div key={index}> {element.label} </div>
                 })
    )
}

export default ListRenderer;