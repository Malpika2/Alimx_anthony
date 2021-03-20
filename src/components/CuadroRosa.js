import React from 'react'

const CuadroRosa = ({data}) => {
    return (
        <div className="bg-pink col-12 cuadroRosa">
                {
                    data.map(element => {
                      return  <p key={element}>{element} </p>;
                    })
                }
        </div>
    )
}

export default CuadroRosa
