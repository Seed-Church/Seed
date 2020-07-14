import React from "react";
class Progressbar extends React.Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
      speed: 2,
      color: "#ff0050",
    };
    this.frame = this.frame.bind(this);
    this.green = this.green.bind(this);
    this.red = this.red.bind(this);
  }
  componentDidMount() {
    //console.clear();
    this.interval = setInterval(() => this.frame(), 50);
  }

  frame() {
    if (this.state.progress < 100) {
      this.setState((prevState, props) => ({
        progress: prevState.progress + this.state.speed,
        color: "#" + this.red() + this.green() + "50",
      }));
      //console.log(this.state.color);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  green() {
    let progress = this.state.progress;
    progress *= 2.55;
    progress = Math.round(progress);
    progress = progress.toString(16);
    return progress;
  }
  red() {
    let progress = this.state.progress;
    progress *= 2.55;
    progress = Math.round(progress);
    progress = 255 - progress;
    progress = progress.toString(16);
    return progress;
  }
  render() {
    return (
      <div className="shadow w-full bg-grey-light">
        <div
          className="text-xs leading-none py-1 text-center text-white"
          style={{ width: `${this.state.progress}%`, backgroundColor: this.state.color }}>
          กำลังโหลด {this.state.progress}%
        </div>
      </div>
    );
  }
}

export default Progressbar;
