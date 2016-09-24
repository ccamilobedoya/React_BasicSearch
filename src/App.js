import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LiItem from './LiItem';

var FilteredList = React.createClass({
  getInitialState: function() { // equivale this.setState
    return {
      initialItems: [
        "Algo",
        "Cosa",
        "For evah",
        "Looking for",
        "Something",
        "Car",
        "Asd item"
      ],
      items: []
    }
  },
  componentWillMount: function() { // luego del primer render
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

  estadoBorrar:function(ElementoBorrar,e){
      var lista = this.state.items;
      var indice = lista.indexOf(ElementoBorrar.props.itemText);
      lista.splice(indice,1);
      this.setState({
        items:lista
      });

      var listaCompleta = this.state.initialItems;
      if(listaCompleta>lista){
        var indice = listaCompleta.indexOf(ElementoBorrar.props.itemText);
          listaCompleta.splice(indice,1);
        }
      this.setState({
        initialItems:listaCompleta
      });
  },

  render: function() {
    return (
      <div>
        <input type="text" className="form-control" onChange={this.filterList}/>
        <List items={this.state.items} metodoBorrar={this.estadoBorrar}/>
      </div>
    );
  }
});

var List = React.createClass({

  pintar:function(item){
    return (
      <li  className="ui-state-default" key={item}>
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
