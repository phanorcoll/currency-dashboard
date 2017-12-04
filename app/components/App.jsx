import React, { Component } from 'react';
import { DolarToday } from './Dolartoday.jsx';
import { Bitcoin } from './Bitcoin.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <DolarToday />
                <Bitcoin />
            </div>
        );
    }
}