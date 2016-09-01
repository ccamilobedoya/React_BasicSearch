import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var FilteredList = React.createClass({
  getInitialState: function() {
    return {
      initialItems: [
        "Algo",
        "Cosa",
        "For evah"
      ],
      items: []
    }
  },
  componentWillMount: function() {
    this.setState({
      items: this.state.initialItems
    });
  },

  filterList: function(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function (item) {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      items: updatedList
    });
  },

  render: function() {
    return (
      <div>
        <input type="text" onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function () {
    return (
      <ul>
        {
          this.props.items.map(function(item) {
            return <li key={item}>{item}</li>;
          })
        }
      </ul>
    )
  }
});

export default FilteredList;
