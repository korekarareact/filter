var React = require('react');


var List = React.createClass({
    render : function() {

        var cat = [];
        var input = this.props.filter.toLowerCase();
        this.props.data.map(function(neko) {
            if (neko.name.toLowerCase().indexOf(input)) {
                return;
            } else {
                cat.push(<div className="unitbox"><span><img src={neko.icon} width="60px" height="60px"/></span><p>{ neko.name }</p></div>);
            }
        });

                console.log(cat);
        return (
            <div > { cat } </div>
        )
    }
});

module.exports = List;