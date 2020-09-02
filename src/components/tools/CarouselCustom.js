import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import "../../stylesheets/Tools.css";

class CarouselCustom extends Component {
  constructor(props) {
  super(props);
  this.state = { activeIndex: 0, captionTest:this.getCaption(0) };
  //this.state = { activeIndex: 0};

  this.next = this.next.bind(this);
  this.previous = this.previous.bind(this);
  this.goToIndex = this.goToIndex.bind(this);
  this.onExiting = this.onExiting.bind(this);
  this.onExited = this.onExited.bind(this);
}

onExiting() {
  this.animating = true;
}

onExited() {
  this.animating = false;
}

next() {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
  this.setState({ activeIndex: nextIndex, captionTest: this.getCaption(nextIndex) });

}

previous() {
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
  this.setState({ activeIndex: nextIndex, captionTest: this.getCaption(nextIndex) });

}

goToIndex(newIndex) {
  if (this.animating) return;
  this.setState({ activeIndex: newIndex, captionTest: this.getCaption(newIndex) });
}

getCaption(index){
  return this.props.items[index].customCaption;
}

evalImg(imgString){
  switch(imgString) {
    case '../../img/familymapHome.png':
      return require('../../img/familymapHome.png');
    case '../../img/familymapDetails.png':
      return require('../../img/familymapDetails.png');
    case '../../img/familymapFilter.png':
      return require('../../img/familymapFilter.png');
    case '../../img/familymapSettings.png':
      return require('../../img/familymapSettings.png');
    case '../../img/familymapSearch.png':
      return require('../../img/familymapSearch.png');
    case '../../img/Director-Choice-Winner3.JPG':
      return require('../../img/Director-Choice-Winner3.JPG');
    case '../../img/FedexPresentation.JPG':
      return require('../../img/FedexPresentation.JPG');
    case '../../img/FedexJet.JPG':
      return require('../../img/FedexJet.JPG');
    default:
      return;
  }
}

render() {

  const { activeIndex } = this.state;

  const slides = this.props.items.map((item) => {
  return (
      <CarouselItem
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.src} >
        <img src={this.evalImg(item.src)} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>

    );
  });

	return(

    <div class="carousel-custom">

      <br/>
      <hr className="my-2" />
      <br/>
      <h1 className="display-5" class="carousel-custom-caption">{this.state.captionTest}</h1>

      <br/>

      <Carousel class="carousel"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.props.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>

    </div>

	);
}

}
export default CarouselCustom;
