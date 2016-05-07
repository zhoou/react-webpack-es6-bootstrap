import React from 'react';
import ReactDOM from 'react-dom';
import HelloComponents from 'Hello';

require('Bootstrap/dist/css/bootstrap.min.css');
require('../Content/css/main.css');

export default class MainBody extends React.Component {
	constructor() {
        super();
        this.state = {};
    };
    render(){
    	return (
			<div className="container">
				<div className="row">
					<div className="col-xs-6">
						<HelloComponents name="Zhoou" />
					</div>
					<div className="col-xs-6">
						<a href="www.baidu.com">成功</a>
					</div>
				</div>
			</div>
			)
    }
}

ReactDOM.render(<MainBody />, document.getElementById('app'));