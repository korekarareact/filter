var React = require('react');


var List = React.createClass({
    render : function() {
        var data = this.props.data,
            input = this.props.filter.toLowerCase();
        var cat = this.props.data.map(function(neko,key) {
            if (neko.name.toLowerCase().indexOf(input)) {
                return;
            } else {
                return
            <li>
            { neko.name }
            </li>;
            }
            });
        return (
            <ul> { cat } </ul>
        )
    }
});

module.exports = List;