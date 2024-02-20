import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

const CarouselData = [
  {
    image: "https://ntvb.tmsimg.com/assets/p17843098_v_h8_ak.jpg?w=1280&h=720",
  },
  {
    image: "https://i.ytimg.com/vi/pBk4NYhWNMM/maxresdefault.jpg",
  },
  {
    image: "https://ntvb.tmsimg.com/assets/p23666845_v_h8_ac.jpg?w=1280&h=720",
  },
  {
    image: "https://ntvb.tmsimg.com/assets/p22972827_v_h8_af.jpg?w=1280&h=720",
  },
  {
    image: "https://ntvb.tmsimg.com/assets/p21813617_v_h8_ab.jpg?w=1280&h=720",
  },
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === CarouselData.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 5000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === CarouselData.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? CarouselData.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="">
        <div className="h-[38rem] px- max-sm:px-0 max-md:h-auto flex overflow-hidden relative">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute bg-orange-500/80 hover:bg-black/70 hover:text-orange-600 rounded-full p-1 text-4xl inset-y-1/2 max-sm:left-2 left-14 text-white cursor-pointer"
          />

          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {CarouselData.map((slide, index) => {
              return (
             
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-[1900px] object-cover bg-center items-center"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
             
              );
            })}
          </Swipe>

          <div className="absolute w-full flex justify-center bottom-0">
            {CarouselData.map((element, index) => {
              return (
                <div aria-label="next"
                  className={
                    index === this.state.currentSlide
                      ? "h-4 w-12 transition-all shadow-2xl backdrop-blur-2xl bg-orange-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-4 w-4 bg-white backdrop-blur-3xl rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>

          {/* Arrows */}
          
          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute bg-orange-500/80 hover:bg-black/70 hover:text-orange-600 rounded-full p-1 text-4xl inset-y-1/2 max-sm:right-2 right-14 text-white cursor-pointer"
          /> 
        </div>
      </div>
    );
  }
}

export default Carousel;