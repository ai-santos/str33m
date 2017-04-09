/** @jsx React.DOM */

var React = require('react');

module.exports class Loader ({
  render: function(){
    return (
      <div className={"loader " + (this.props.paging ? "active" : "")}>
        <img src="svg/loader.svg" />
      </div>
    )
  }
});