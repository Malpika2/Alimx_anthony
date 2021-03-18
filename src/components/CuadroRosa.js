import React from 'react'

const CuadroRosa = ({nombres:{nombre, segundo, paterno, materno}}) => {
    return (
        <div className="bg-pink col-8">
            <p>{`${nombre} ${segundo} ${paterno} ${materno}`}</p>
        </div>
    )
}

export default CuadroRosa
