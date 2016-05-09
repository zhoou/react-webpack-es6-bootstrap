import React from 'react';
import ReactDOM from 'reactDOM';
import LeftSideComponents from 'LeftSide';
import MainContentComponents from 'MainContent';

require('../Content/Css/fonts.css');
require('../Content/Css/bootstrap.min.css');
require('../Content/Css/bootstrap-reset.css');
require('../Content/Css/jquery-ui-1.10.3.css');
require("../Content/Fonts/Css/font-awesome.min.css");
require('../Content/Css/style.css');
require('../Content/Css/style-responsive.css');

require('./Lib/jquery-2.1.4.min.js');
// require('./Lib/jquery-ui-1.9.2.custom.min.js');
// require('./Lib/jquery-migrate-1.2.1.min.js');
// require('./Lib/bootstrap.min.js');
// require('./Lib/modernizr.min.js');
//require('./Lib/jquery.nicescroll.min.js');
//require('./Common/scripts.js');

export default class MainBody extends React.Component {
	constructor() {
        super();
        this.state = {};
    };
    render(){
    	return (
			<section>
			    {/* left side start */}
			    <LeftSideComponents />
			    {/* left side end */}
			    
			    {/* main content start */}
			    <MainContentComponents />
			    {/* main content end */}
			</section>
			)
    }
}

ReactDOM.render(<MainBody />, document.getElementById('app'));