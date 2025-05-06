
import React, {Component} from 'react';

//Define a class-based component named App
class App extends Component {
  constructor(props){
    super(props);
       // Initialize the component's state
    this.state = {
      person: {
        fullName: 'Grace Wambui Mugece',
        bio: 'A passionate learner and aspiring web developer.',
        imgSrc: '/my image.png/',
        profession: 'Software Developer'
      },
      show: false,
      timeElapsed: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

    // Lifecycle method: Invoked immediately after the component is mounted
  componentDidMount(){
    //timer that updates timeElapsed every second
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  
  // Lifecycle method: Invoked just before the component is unmounted
  componentWillUnmount(){
    clearInterval(this.interval);
  }

  //Method to toggle the visibility of the profile
  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

   // Render method
  render() {
    const { person, show, timeElapsed } = this.state;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <button
          onClick={this.toggleShow}
          className="mb-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div className="bg-white shadow-md rounded p-6 w-full max-w-sm text-center">
            <img
              src="/my image.png"
              alt="my image"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold">{person.fullName}</h2>
            <p className="text-gray-600">{person.profession}</p>
            <p className="mt-2 text-gray-700">{person.bio}</p>
          </div>
        )}

        <p className="mt-6 text-gray-500">
          Component mounted for: <span className="font-bold">{timeElapsed}</span> seconds
        </p>
      </div>
    );
  }
}

export default App;
