import React from 'react';
import {useRoutes} from 'hookrouter';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

const routes = {
    '/': () => <Projects />,
    '/project/:id?': ({id}) => <ProjectDetails id={id}/>
};

function Routes(props){
    return useRoutes(routes);
}

export default Routes;
