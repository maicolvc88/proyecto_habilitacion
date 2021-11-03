import React from 'react'
import PrivateRoutes from '../Components/PrivateRoutes'


const PrivateLayout = ({children}) => {
    return (
        <PrivateRoutes>
            <div>
                <h1>No tiene permisos</h1>
                {children}
            </div>
        </PrivateRoutes>
    )
}

export default PrivateLayout