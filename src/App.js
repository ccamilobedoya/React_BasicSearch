import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LiItem from './LiItem';

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

  EstadoBorrar:function(ElementoBorrar,e){
    //Console.log("click");
    //console.log(ElementoBorrar);
    var lista = this.state.initialItems;
    var indice = lista.indexOf(ElementoBorrar.props.itemText);
    lista.splice(indice,1);
    this.setState({initialItems:lista});

    var lista1 = this.state.items;
    var indice = lista1.indexOf(ElementoBorrar.props.itemText);
    lista1.splice(indice,1);
    this.setState({items:lista1});
  },

  render: function() {
    return (
      <div>
        <input type="text" className="form-control" onChange={this.filterList}/>
        <List items={this.state.items} metodoBorrar={this.EstadoBorrar}/>
      </div>
    );
  }
});

var List = React.createClass({

  metodo:function(){
    console.log("pruba");
  },
  pintar:function(item){
    return (<li  className="ui-state-default" key={item}>
      <div className="checkbox">
        <LiItem itemText={item} metodoBorrar={this.props.metodoBorrar}/>
        </div>
      </li>
    );
  },

  render: function () {
    return (
      <ul>
        {
          this.props.items.map(this.pintar)
        }
      </ul>
    )
  }
});

export default FilteredList;
