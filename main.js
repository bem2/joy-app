import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import nav from './nav.jsx'

ReactDOM.render(
    <div>
    <App user="Joy">How are you?.</App>
    <App user="Bem">Where do you live?</App>
    </div>, 
   
    document.getElementById('app')


);


React.renderComponent(<FilteredList/>, document.getElementById('mount-point'));