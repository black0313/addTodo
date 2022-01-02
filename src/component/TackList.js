import {connect} from "react-redux";
import Todo from "./Todo";
import React from "react";

function TackList({todos}) {

    return (
        <div>
            {
                todos.map(item=><Todo item={item}/>)
            }
        </div>
    )
}

// const mapState = (state) => ({todos: state.todos});

export default connect(({todos}) => ({todos: todos}))(TackList)