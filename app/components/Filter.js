var React = require('react');

var Filter = React.createClass({
    filterTrigger : function() {
        this.props.filterUpdate(this.refs.filterInput.getDOMNode().value);
    },
    render : function() {
        return (
            <form>
            <input type = 'text' ref = 'filterInput'placeholder = 'Type to filter...'
            value = { this.props.filterVal }
            onChange = { this.filterTrigger } />
            </form>
        )
    }
});

module.exports = Filter;
