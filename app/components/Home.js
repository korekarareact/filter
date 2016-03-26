var React = require('react');
var Filter = require('./Filter');
var List = require('./List');


var Home = React.createClass({
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
                <h1>BattleCats Filter</h1>
                <Filter filterVal = { this.state.filterText } filterUpdate = { this.stateUpdate } />
            </header>
            <List data = { this.props.data }  filter = { this.state.filterText } />
            </div>
        )
    }
});

module.exports = Home;

