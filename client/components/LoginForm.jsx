LoginForm = React.createClass({

    componentDidMount: function() {
        console.log('LoginForm mounted');

        $(this.refs.checky.getDOMNode()).checkbox();
    },

   render: function() {
       return (
           <div className="ui form">
               <div className="field">
                   <input type="text" placeholder="username"/>
               </div>

               <div className="field">
                   <input type="password" placeholder="password"/>
               </div>

               <div className="field">
                   <input type="submit" value="sign in" className="ui button large fluid green"/>
               </div>

               <div className="inline field">
                   <div ref="checky" className="ui checkbox">
                       <input type="checkbox"/>
                       <label>Remember me</label>
                   </div>
               </div>
           </div>

       );
   }
});