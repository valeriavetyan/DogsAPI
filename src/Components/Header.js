import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    let requests = [];
    for (let i = 0; i < 5; i++) {
      requests.push(fetch("https://dog.ceo/api/breeds/image/random"));
    }
    const responsies = await Promise.all(requests);
    const datas = await Promise.all(
      responsies.map((response) => response.json())
    );
    const images = datas.map((data) => data.message);
    this.setState({
      images,
    });
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Carousel>
          {images.map((url, i) => (
            <CarouselItem key={i} url={url} />
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Header;
