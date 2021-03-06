import React from "react";
import "./Dog.css";

class Dog extends React.Component {
  constructor() {
    super();
    this.url = "https://dog.ceo/api/breeds/image/random";
    this.state = {
      img: "",
    };
  }

  componentDidMount() {
    this.fetchImg();
  }

  fetchImg = () => {
    fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "success") {
          this.setState({ img: data.message });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleClick = () => {
    this.props.win("dog");
  };

  render() {
    return (
      <div className="dog">
        <img alt="dog" src={this.state.img} />
        <button className="btn btn-bright" onClick={this.handleClick}>
          WOOF!
        </button>
      </div>
    );
  }
}

export default Dog;
