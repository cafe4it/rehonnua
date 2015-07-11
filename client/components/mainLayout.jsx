MainLayout = React.createClass({
    render() {
        return <div className="row">
            <div className="large-12 columns">
                <Header/>
                {this.props.content}
                <Footer/>
            </div>
        </div>
    }
});

Header = React.createClass({
    render(){
        return <div className="row">
            <div className="large-12 columns">
                <nav data-topbar="" className="top-bar">
                    <ul className="title-area">

                        <li className="name">
                            <h1><a href="/">Price Tracker!</a></h1>
                        </li>
                        <li className="toggle-topbar menu-icon">
                            <a href="#"><span>menu</span></a>
                        </li>
                    </ul>

                    <section className="top-bar-section">

                        <ul className="right">
                            <li className="divider"></li>
                            <li className="has-dropdown not-click">
                                <a href="#">Main Item 1</a>
                                <ul className="dropdown">
                                    <li className="title back js-generated"><h5><a href="javascript:void(0)">Back</a>
                                    </h5></li>
                                    <li className="parent-link show-for-small-only"><a href="#"
                                                                                       className="parent-link js-generated">Main
                                        Item 1</a></li>
                                    <li><label>Section Name</label></li>
                                    <li className="has-dropdown not-click">
                                        <a href="#" className="">Has Dropdown, Level 1</a>
                                        <ul className="dropdown">
                                            <li className="title back js-generated"><h5><a href="javascript:void(0)">Back</a>
                                            </h5></li>
                                            <li className="parent-link show-for-small-only"><a href="#"
                                                                                               className="parent-link js-generated">Has
                                                Dropdown, Level 1</a></li>
                                            <li>
                                                <a href="#">Dropdown Options</a>
                                            </li>
                                            <li>
                                                <a href="#">Dropdown Options</a>
                                            </li>
                                            <li>
                                                <a href="#">Level 2</a>
                                            </li>
                                            <li>
                                                <a href="#">Subdropdown Option</a>
                                            </li>
                                            <li>
                                                <a href="#">Subdropdown Option</a>
                                            </li>
                                            <li>
                                                <a href="#">Subdropdown Option</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li><label>Section Name</label></li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">See all →</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#">Main Item 2</a>
                            </li>
                            <li className="divider"></li>
                            <li className="has-dropdown not-click">
                                <a href="#">Main Item 3</a>
                                <ul className="dropdown">
                                    <li className="title back js-generated"><h5><a href="javascript:void(0)">Back</a>
                                    </h5></li>
                                    <li className="parent-link show-for-small-only"><a href="#"
                                                                                       className="parent-link js-generated">Main
                                        Item 3</a></li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li>
                                        <a href="#">Dropdown Option</a>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                        <a href="#">See all →</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </nav>
            </div>
        </div>
    }
})

Footer = React.createClass({
    render(){
        return <footer className="row">
            <div className="large-12 columns">
                <hr/>
                    <div className="row">
                        <div className="large-6 columns">
                            <p>&copy; Copyright no one at all. Go to town.</p>
                        </div>
                        <div className="large-6 columns">
                            <ul className="inline-list right">
                                <li>
                                    <a href="#">Link 1</a>
                                </li>
                                <li>
                                    <a href="#">Link 2</a>
                                </li>
                                <li>
                                    <a href="#">Link 3</a>
                                </li>
                                <li>
                                    <a href="#">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
    }
})

