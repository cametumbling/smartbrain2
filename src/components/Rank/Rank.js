import React from "react";

class Rank extends React.Component {
  constructor() {
    super();
    this.state = {
      emoji: "",
    };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null;
    } else {
      this.generateEmoji(this.props.entries);
    }
  }

  generateEmoji = (entries) => {
    fetch(
      `https://iam0xs1z09.execute-api.us-west-1.amazonaws.com/dev/rankish?rank=${this.props.entries}`
    )
      .then(response => response.json())
      .then(data => this.setState({ emoji: data.input }))
      .catch(console.log);
  };

  render() {
    const { name, entries } = this.props;
    return (
      <div>
        <div className="white f3">
          {`${name}, your current entry count is...`}
        </div>
        <div className="white f1">{entries}</div>
        <div className="white f3">{`Rank badge: ${this.state.emoji}`}</div>
      </div>
    );
  }
}

export default Rank;


