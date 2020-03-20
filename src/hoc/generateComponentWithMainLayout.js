import React from 'react';
import MainLayout from "../components/MainLayout";

const generateComponentWithMainLayout = (Component) => {
    const WrappedMainLayout = (props) => {

        return (
            <MainLayout>
             <Component {...props} />
            </MainLayout>
         )  
    }
    
    return WrappedMainLayout;
}

export default generateComponentWithMainLayout;