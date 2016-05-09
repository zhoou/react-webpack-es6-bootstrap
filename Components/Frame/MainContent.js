import React from 'react';

export default class MainContentComponents extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	textSearch: 'Hello!',
	    	textToDo:'world'
	    };
	};
	componentDidMount(){
        //this.getDOMNode().querySelector('[type="radio"]').defaultChecked= "checked";
    };
    handleChange_ToDo(event){
    	this.setState({textToDo:event.target.value});
    };
    handleChange_Search(event){
    	this.setState({textSearch:event.target.value});
    };
    render(){
        return(
            <div className="main-content" >

			        {/*  header section start */}
			        <div className="header-section">

			            {/* toggle button start */}
			            <a className="toggle-btn"><i className="fa fa-bars"></i></a>
			            {/* toggle button end */}

			            {/* search start */}
			            <form className="searchform" action="index.html" method="post">
			                <input type="text" onChange={this.handleChange_Search} className="form-control" name="keyword" placeholder="Search here..." />
			            </form>
			            {/* search end */}

			            {/* notification menu start  */}
			            <div className="menu-right">
			                <ul className="notification-menu">
			                    <li>
			                        <a href="#" className="btn btn-default dropdown-toggle info-number" data-toggle="dropdown">
			                            <i className="fa fa-tasks"></i>
			                            <span className="badge">8</span>
			                        </a>
			                        <div className="dropdown-menu dropdown-menu-head pull-right">
			                            <h5 className="title">You have 8 pending task</h5>
			                            <ul className="dropdown-list user-list">
			                                <li className="new">
			                                    <a href="#">
			                                        <div className="task-info">
			                                            <div>Database update</div>
			                                        </div>
			                                        <div className="progress progress-striped">
			                                            <div style={{width: '40%'}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" className="progress-bar progress-bar-warning">
			                                                <span className="">40%</span>
			                                            </div>
			                                        </div>
			                                    </a>
			                                </li>
			                                <li className="new">
			                                    <a href="#">
			                                        <div className="task-info">
			                                            <div>Dashboard done</div>
			                                        </div>
			                                        <div className="progress progress-striped">
			                                            <div style={{width: '90%'}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" role="progressbar" className="progress-bar progress-bar-success">
			                                                <span className="">90%</span>
			                                            </div>
			                                        </div>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="#">
			                                        <div className="task-info">
			                                            <div>Web Development</div>
			                                        </div>
			                                        <div className="progress progress-striped">
			                                            <div style={{width: '66%'}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" role="progressbar" className="progress-bar progress-bar-info">
			                                                <span className="">66% </span>
			                                            </div>
			                                        </div>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="#">
			                                        <div className="task-info">
			                                            <div>Mobile App</div>
			                                        </div>
			                                        <div className="progress progress-striped">
			                                            <div style={{width:'33%'}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="33" role="progressbar" className="progress-bar progress-bar-danger">
			                                                <span className="">33% </span>
			                                            </div>
			                                        </div>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="#">
			                                        <div className="task-info">
			                                            <div>Issues fixed</div>
			                                        </div>
			                                        <div className="progress progress-striped">
			                                            <div style={{width:'80%'}} aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar" className="progress-bar">
			                                                <span className="">80% </span>
			                                            </div>
			                                        </div>
			                                    </a>
			                                </li>
			                                <li className="new"><a href="">See All Pending Task</a></li>
			                            </ul>
			                        </div>
			                    </li>
			                    <li>
			                        <a href="#" className="btn btn-default dropdown-toggle info-number" data-toggle="dropdown">
			                            <i className="fa fa-envelope-o"></i>
			                            <span className="badge">5</span>
			                        </a>
			                        <div className="dropdown-menu dropdown-menu-head pull-right">
			                            <h5 className="title">You have 5 Mails </h5>
			                            <ul className="dropdown-list normal-list">
			                                <li className="new">
			                                    <a href="">
			                                        <span className="thumb"><img src="../../Content/images/photos/user1.png" alt="" /></span>
			                                        <span className="desc">
			                                          <span className="name">John Doe <span className="badge badge-success">new</span></span>
			                                          <span className="msg">Lorem ipsum dolor sit amet...</span>
			                                        </span>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="">
			                                        <span className="thumb"><img src="../../Content/images/photos/user2.png" alt="" /></span>
			                                        <span className="desc">
			                                          <span className="name">Jonathan Smith</span>
			                                          <span className="msg">Lorem ipsum dolor sit amet...</span>
			                                        </span>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="">
			                                        <span className="thumb"><img src="../../Content/images/photos/user3.png" alt="" /></span>
			                                        <span className="desc">
			                                          <span className="name">Jane Doe</span>
			                                          <span className="msg">Lorem ipsum dolor sit amet...</span>
			                                        </span>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="">
			                                        <span className="thumb"><img src="../../Content/images/photos/user4.png" alt="" /></span>
			                                        <span className="desc">
			                                          <span className="name">Mark Henry</span>
			                                          <span className="msg">Lorem ipsum dolor sit amet...</span>
			                                        </span>
			                                    </a>
			                                </li>
			                                <li>
			                                    <a href="">
			                                        <span className="thumb"><img src="../../Content/images/photos/user5.png" alt="" /></span>
			                                        <span className="desc">
			                                          <span className="name">Jim Doe</span>
			                                          <span className="msg">Lorem ipsum dolor sit amet...</span>
			                                        </span>
			                                    </a>
			                                </li>
			                                <li className="new"><a href="">Read All Mails</a></li>
			                            </ul>
			                        </div>
			                    </li>
			                    <li>
			                        <a href="#" className="btn btn-default dropdown-toggle info-number" data-toggle="dropdown">
			                            <i className="fa fa-bell-o"></i>
			                            <span className="badge">4</span>
			                        </a>
			                        <div className="dropdown-menu dropdown-menu-head pull-right">
			                            <h5 className="title">Notifications</h5>
			                            <ul className="dropdown-list normal-list">
			                                <li className="new">
			                                    <a href="">
			                                        <span className="label label-danger"><i className="fa fa-bolt"></i></span>
			                                        <span className="name">Server #1 overloaded.  </span>
			                                        <em className="small">34 mins</em>
			                                    </a>
			                                </li>
			                                <li className="new">
			                                    <a href="">
			                                        <span className="label label-danger"><i className="fa fa-bolt"></i></span>
			                                        <span className="name">Server #3 overloaded.  </span>
			                                        <em className="small">1 hrs</em>
			                                    </a>
			                                </li>
			                                <li className="new">
			                                    <a href="">
			                                        <span className="label label-danger"><i className="fa fa-bolt"></i></span>
			                                        <span className="name">Server #5 overloaded.  </span>
			                                        <em className="small">4 hrs</em>
			                                    </a>
			                                </li>
			                                <li className="new">
			                                    <a href="">
			                                        <span className="label label-danger"><i className="fa fa-bolt"></i></span>
			                                        <span className="name">Server #31 overloaded.  </span>
			                                        <em className="small">4 hrs</em>
			                                    </a>
			                                </li>
			                                <li className="new"><a href="">See All Notifications</a></li>
			                            </ul>
			                        </div>
			                    </li>
			                    <li>
			                        <a href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
			                            <img src="../../Content/images/photos/user-avatar.png" alt="" />
			                            John Doe
			                            <span className="caret"></span>
			                        </a>
			                        <ul className="dropdown-menu dropdown-menu-usermenu pull-right">
			                            <li><a href="#"><i className="fa fa-user"></i>  Profile</a></li>
			                            <li><a href="#"><i className="fa fa-cog"></i>  Settings</a></li>
			                            <li><a href="#"><i className="fa fa-sign-out"></i> Log Out</a></li>
			                        </ul>
			                    </li>

			                </ul>
			            </div>
			            {/* notification menu end  */}

			        </div>
			        {/*  header section end */}

			        {/*  page heading start */}
			        <div className="page-heading">
			            <h3>
			                Dashboard
			            </h3>
			            <ul className="breadcrumb">
			                <li>
			                    <a href="#">Dashboard</a>
			                </li>
			                <li className="active"> My Dashboard </li>
			            </ul>
			            <div className="state-info">
			                <section className="panel">
			                    <div className="panel-body">
			                        <div className="summary">
			                            <span>yearly expense</span>
			                            <h3 className="red-txt">$ 45,600</h3>
			                        </div>
			                        <div id="income" className="chart-bar"></div>
			                    </div>
			                </section>
			                <section className="panel">
			                    <div className="panel-body">
			                        <div className="summary">
			                            <span>yearly  income</span>
			                            <h3 className="green-txt">$ 45,600</h3>
			                        </div>
			                        <div id="expense" className="chart-bar"></div>
			                    </div>
			                </section>
			            </div>
			        </div>
			        {/*  page heading end */}

			        {/* body wrapper start */}
			        <div className="wrapper">
			            <div className="row">
			                <div className="col-md-6">
			                    {/* statistics start */}
			                    <div className="row state-overview">
			                        <div className="col-md-6 col-xs-12 col-sm-6">
			                            <div className="panel purple">
			                                <div className="symbol">
			                                    <i className="fa fa-gavel"></i>
			                                </div>
			                                <div className="state-value">
			                                    <div className="value">230</div>
			                                    <div className="title">New Order</div>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-md-6 col-xs-12 col-sm-6">
			                            <div className="panel red">
			                                <div className="symbol">
			                                    <i className="fa fa-tags"></i>
			                                </div>
			                                <div className="state-value">
			                                    <div className="value">3490</div>
			                                    <div className="title">Copy Sold</div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="row state-overview">
			                        <div className="col-md-6 col-xs-12 col-sm-6">
			                            <div className="panel blue">
			                                <div className="symbol">
			                                    <i className="fa fa-money"></i>
			                                </div>
			                                <div className="state-value">
			                                    <div className="value">22014</div>
			                                    <div className="title"> Total Revenue</div>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="col-md-6 col-xs-12 col-sm-6">
			                            <div className="panel green">
			                                <div className="symbol">
			                                    <i className="fa fa-eye"></i>
			                                </div>
			                                <div className="state-value">
			                                    <div className="value">390</div>
			                                    <div className="title"> Unique Visitors</div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    {/* statistics end */}
			                </div>
			                <div className="col-md-6">
			                    {/* more statistics box start */}
			                    <div className="panel deep-purple-box">
			                        <div className="panel-body">
			                            <div className="row">
			                                <div className="col-md-7 col-sm-7 col-xs-7">
			                                    <div id="graph-donut" className="revenue-graph"></div>

			                                </div>
			                                <div className="col-md-5 col-sm-5 col-xs-5">
			                                    <ul className="bar-legend">
			                                        <li><span className="blue"></span> Open rate</li>
			                                        <li><span className="green"></span> Click rate</li>
			                                        <li><span className="purple"></span> Share rate</li>
			                                        <li><span className="red"></span> Unsubscribed rate</li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    {/* more statistics box end */}
			                </div>
			            </div>
			            <div className="row">
			                <div className="col-md-8">
			                    <div className="panel">
			                        <div className="panel-body">
			                            <div className="row revenue-states">
			                                <div className="col-md-6 col-sm-6 col-xs-12">
			                                    <h4>Monthly revenue report</h4>
			                                    <div className="icheck">
			                                        <div className="square-red single-row">
			                                            <div className="checkbox ">
			                                                <input type="checkbox" defaultChecked="checked" />
			                                                <label>Online</label>
			                                            </div>
			                                        </div>
			                                        <div className="square-blue single-row">
			                                            <div className="checkbox ">
			                                                <input type="checkbox" />
			                                                <label>Offline </label>
			                                            </div>
			                                        </div>
			                                    </div>

			                                </div>
			                                <div className="col-md-6 col-sm-6 col-xs-12">
			                                    <ul className="revenue-nav">
			                                        <li><a href="#">weekly</a></li>
			                                        <li><a href="#">monthly</a></li>
			                                        <li className="active"><a href="#">yearly</a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                            <div className="row">
			                                <div className="col-md-12">
			                                    <div className="clearfix">
			                                        <div id="main-chart-legend" className="pull-right">
			                                        </div>
			                                    </div>

			                                    <div id="main-chart">
			                                        <div id="main-chart-container" className="main-chart">
			                                        </div>
			                                    </div>
			                                    <ul className="revenue-short-info">
			                                        <li>
			                                            <h1 className="red">15%</h1>
			                                            <p>Server Load</p>
			                                        </li>
			                                        <li>
			                                            <h1 className="purple">30%</h1>
			                                            <p>Disk Space</p>
			                                        </li>
			                                        <li>
			                                            <h1 className="green">84%</h1>
			                                            <p>Transferred</p>
			                                        </li>
			                                        <li>
			                                            <h1 className="blue">28%</h1>
			                                            <p>Temperature</p>
			                                        </li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-md-4">
			                    <div className="panel">
			                        <header className="panel-heading">
			                            goal progress
			                            <span className="tools pull-right">
			                                <a href="javascript:;" className="fa fa-chevron-down"></a>
			                                <a href="javascript:;" className="fa fa-times"></a>
			                             </span>
			                        </header>
			                        <div className="panel-body">
			                            <ul className="goal-progress">
			                                <li>
			                                    <div className="prog-avatar">
			                                        <img src="../../Content/images/photos/user1.png" alt=""/>
			                                    </div>
			                                    <div className="details">
			                                        <div className="title">
			                                            <a href="#">John Doe</a> - Project Lead
			                                        </div>
			                                        <div className="progress progress-xs">
			                                            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}>
			                                                <span className="">70%</span>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </li>
			                                <li>
			                                    <div className="prog-avatar">
			                                        <img src="../../Content/images/photos/user2.png" alt=""/>
			                                    </div>
			                                    <div className="details">
			                                        <div className="title">
			                                            <a href="#">Cameron Doe</a> - Sales
			                                        </div>
			                                        <div className="progress progress-xs">
			                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:'91%'}}>
			                                                <span className="">91%</span>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </li>
			                                <li>
			                                    <div className="prog-avatar">
			                                        <img src="../../Content/images/photos/user3.png" alt=""/>
			                                    </div>
			                                    <div className="details">
			                                        <div className="title">
			                                            <a href="#">Hoffman Doe</a> - Support
			                                        </div>
			                                        <div className="progress progress-xs">
			                                            <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:'40%'}}>
			                                                <span className="">40%</span>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </li>
			                                <li>
			                                    <div className="prog-avatar">
			                                        <img src="../../Content/images/photos/user4.png" alt=""/>
			                                    </div>
			                                    <div className="details">
			                                        <div className="title">
			                                            <a href="#">Jane Doe</a> - Marketing
			                                        </div>
			                                        <div className="progress progress-xs">
			                                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
			                                                <span className="">20%</span>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </li>
			                                <li>
			                                    <div className="prog-avatar">
			                                        <img src="../../Content/images/photos/user5.png" alt=""/>
			                                    </div>
			                                    <div className="details">
			                                        <div className="title">
			                                            <a href="#">Hoffman Doe</a> - Support
			                                        </div>
			                                        <div className="progress progress-xs">
			                                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}>
			                                                <span className="">45%</span>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </li>
			                            </ul>
			                            <div className="text-center"><a href="#">View all Goals</a></div>
			                        </div>
			                    </div>
			                </div>
			            </div>

			            <div className="row">
			                <div className="col-md-4">
			                    <div className="panel">
			                        <div className="panel-body extra-pad">
			                            <h4 className="pros-title">prospective <span>leads</span></h4>
			                            <div className="row">
			                                <div className="col-sm-4 col-xs-4">
			                                    <div id="p-lead-1"></div>
			                                    <p className="p-chart-title">Laptop</p>
			                                </div>
			                                <div className="col-sm-4 col-xs-4">
			                                    <div id="p-lead-2"></div>
			                                    <p className="p-chart-title">iPhone</p>
			                                </div>
			                                <div className="col-sm-4 col-xs-4">
			                                    <div id="p-lead-3"></div>
			                                    <p className="p-chart-title">iPad</p>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-md-4">
			                    <div className="panel">
			                        <div className="panel-body extra-pad">
			                            <div className="col-sm-6 col-xs-6">
			                                <div className="v-title">Visits</div>
			                                <div className="v-value">10,090</div>
			                                <div id="visit-1"></div>
			                                <div className="v-info">Pages/Visit</div>
			                            </div>
			                            <div className="col-sm-6 col-xs-6">
			                                <div className="v-title">Unique Visitors</div>
			                                <div className="v-value">8,173</div>
			                                <div id="visit-2"></div>
			                                <div className="v-info">Avg. Visit Duration</div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-md-4">

			                    <div className="panel green-box">
			                        <div className="panel-body extra-pad">
			                            <div className="row">
			                                <div className="col-sm-6 col-xs-6">
			                                    <div className="knob">
			                                        <span className="chart" data-percent="79">
			                                            <span className="percent">79% <span className="sm">New Visit</span></span>
			                                        </span>
			                                    </div>
			                                </div>
			                                <div className="col-sm-6 col-xs-6">
			                                    <div className="knob">
			                                        <span className="chart" data-percent="56">
			                                            <span className="percent">56% <span className="sm">Bounce rate</span></span>
			                                        </span>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>

			            <div className="row">
			                <div className="col-md-4">
			                    <div className="panel">
			                        <div className="panel-body">
			                            <div className="calendar-block ">
			                                <div className="cal1">

			                                </div>
			                            </div>

			                        </div>
			                    </div>
			                </div>
			                <div className="col-md-4">
			                    <div className="panel">
			                        <header className="panel-heading">
			                            Todo List
			                            <span className="tools pull-right">
			                                <a className="fa fa-chevron-down" href="javascript:;"></a>
			                                <a className="fa fa-times" href="javascript:;"></a>
			                             </span>
			                        </header>
			                        <div className="panel-body">
			                            <ul className="to-do-list" id="sortable-todo">
			                                <li className="clearfix">
			                                    <span className="drag-marker">
			                                    <i></i>
			                                    </span>
			                                    <div className="todo-check pull-left">
			                                        <input type="checkbox" value="None" id="todo-check"/>
			                                        <label for="todo-check"></label>
			                                    </div>
			                                    <p className="todo-title">
			                                        Dashboard Design & Wiget placement
			                                    </p>
			                                    <div className="todo-actionlist pull-right clearfix">

			                                        <a href="#" className="todo-remove"><i className="fa fa-times"></i></a>
			                                    </div>
			                                </li>
			                                <li className="clearfix">
			                                    <span className="drag-marker">
			                                    <i></i>
			                                    </span>
			                                    <div className="todo-check pull-left">
			                                        <input type="checkbox" value="None" id="todo-check1"/>
			                                        <label for="todo-check1"></label>
			                                    </div>
			                                    <p className="todo-title">
			                                        Wireframe prepare for new design
			                                    </p>
			                                    <div className="todo-actionlist pull-right clearfix">

			                                        <a href="#" className="todo-remove"><i className="fa fa-times"></i></a>
			                                    </div>
			                                </li>
			                                <li className="clearfix">
			                                    <span className="drag-marker">
			                                    <i></i>
			                                    </span>
			                                    <div className="todo-check pull-left">
			                                        <input type="checkbox" value="None" id="todo-check2"/>
			                                        <label for="todo-check2"></label>
			                                    </div>
			                                    <p className="todo-title">
			                                        UI perfection testing for Mega Section
			                                    </p>
			                                    <div className="todo-actionlist pull-right clearfix">

			                                        <a href="#" className="todo-remove"><i className="fa fa-times"></i></a>
			                                    </div>
			                                </li>
			                                <li className="clearfix">
			                                    <span className="drag-marker">
			                                    <i></i>
			                                    </span>
			                                    <div className="todo-check pull-left">
			                                        <input type="checkbox" value="None" id="todo-check3"/>
			                                        <label for="todo-check3"></label>
			                                    </div>
			                                    <p className="todo-title">
			                                        Wiget & Design placement
			                                    </p>
			                                    <div className="todo-actionlist pull-right clearfix">

			                                        <a href="#" className="todo-remove"><i className="fa fa-times"></i></a>
			                                    </div>
			                                </li>
			                                <li className="clearfix">
			                                    <span className="drag-marker">
			                                    <i></i>
			                                    </span>
			                                    <div className="todo-check pull-left">
			                                        <input type="checkbox" value="None" id="todo-check4"/>
			                                        <label for="todo-check4"></label>
			                                    </div>
			                                    <p className="todo-title">
			                                        Development & Wiget placement
			                                    </p>
			                                    <div className="todo-actionlist pull-right clearfix">

			                                        <a href="#" className="todo-remove"><i className="fa fa-times"></i></a>
			                                    </div>
			                                </li>

			                            </ul>
			                            <div className="row">
			                                <div className="col-md-12">
			                                    <form role="form" className="form-inline">
			                                        <div className="form-group todo-entry">
			                                            <input type="text" onChange={this.handleChange_ToDo} placeholder="Enter your ToDo List" className="form-control" style={{width: '100%'}} />
			                                        </div>
			                                        <button className="btn btn-primary pull-right" type="submit">+</button>
			                                    </form>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			                <div className="col-md-4">
			                    <div className="panel blue-box twt-info">
			                        <div className="panel-body">
			                            <h3>19 Februay 2014</h3>

			                            <p>AdminEx is new model of admin
			                            dashboard <a href="#">http://t.co/3laCVziTw4</a>
			                            4 days ago by John Doe</p>
			                        </div>
			                    </div>
			                    <div className="panel">
			                        <div className="panel-body">
			                            <div className="media usr-info">
			                                <a href="#" className="pull-left">
			                                    <img className="thumb" src="../../Content/images/photos/user2.png" alt=""/>
			                                </a>
			                                <div className="media-body">
			                                    <h4 className="media-heading">Mila Watson</h4>
			                                    <span>Senior UI Designer</span>
			                                    <p>I use to design websites and applications for the web.</p>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="panel-footer custom-trq-footer">
			                            <ul className="user-states">
			                                <li>
			                                    <i className="fa fa-heart"></i> 127
			                                </li>
			                                <li>
			                                    <i className="fa fa-eye"></i> 853
			                                </li>
			                                <li>
			                                    <i className="fa fa-user"></i> 311
			                                </li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			        {/* body wrapper end */}

			        {/* footer section start */}
			        <footer>
			            2014 &copy; AdminEx by ThemeBucket
			        </footer>
			        {/* footer section end */}
			</div>
            )
    }
};