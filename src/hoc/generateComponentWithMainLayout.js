import React from 'react';
import MainLayout from "../components/MainLayout";

const generateComponentWithMainLayout = (Component) => {
    const WrappedMainLayout = (props) => {
        const { history } = props;
        return (
            <MainLayout history={history}>
             <Component {...props} />
            </MainLayout>
         )  
    }
    
    return WrappedMainLayout;
}

export default generateComponentWithMainLayout;

