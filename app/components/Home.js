var React = require('react');
var Filter = require('./Filter');
var List = require('./List');


var Home = React.createClass({
    componentWillReceiveProps : function(props){
        console.log(props);
    },
    getInitialState : function() {
        return {
            filterText: ''
        }
    },
    stateUpdate : function(value) {
        this.setState({
            filterText: value
        });
    },
    render : function() {
        return (
            <div>
            <header>
                <Filter filterVal = { this.state.filterText } filterUpdate = { this.stateUpdate } />
            </header>
            <List data = { this.props.data } filter = { this.state.filterText } />
            </div>
        )
    }
});

module.exports = Home;

