App = React.createClass({

    componentDidMount: function() {
        console.log('App mounted');

    },

    render: function () {
        return (
            <div className="ui stackable one column center aligned grid">
                <div className="column six wide form-holder">
                    <h2 className="center aligned header form-head">Sign in</h2>

                    <LoginForm />

                </div>
            </div>
        );
    }
});

