import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import "./assets/css/bootstrap.min.css";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";

export default class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((resp) => {
        // let tmpArray = []
        // tmpArray.push(resp.data)
        this.setState({ users: resp.data.data });
        console.log(this.state.users);
      })
      .catch((err) => {
        if (err.response) {
          console.log("err 1");

          // client received an error response (5xx, 4xx)
        } else if (err.request) {
          console.log("err 2");

          // client never received a response, or request never left
        } else {
          console.log("error 3");

          // anything else
        }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.users.map((user, i) => {
            return (
              <Card
                key={i}
                id={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
                avatar={user.avatar}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
