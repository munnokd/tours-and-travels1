import React, { Component } from "react";
import "./ViewTours.css";
import swal from "sweetalert";

export class ViewTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }


  render() {
    function bookingTour() {
      swal("Tour Booking is succesfully!", "", "success");
    }
    return (
      <div className={"container"}>
        <br></br>
        <div className={"justify-content-center"}>
          <h1 className="tour_title">Tour Packages</h1>
        </div>
        
        <div class="card-columns mt-3">
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg/640px-Neeulm_Valley_AJK_%28Arang_Kel%29.jpg"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Jammu and Kashmir</h4>
              <p class="card-text">
                This is Jammu and kashmir tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹12,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/GujaratPhotoMontage.jpg"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Gujarat</h4>
              <p class="card-text">
                This is Gujarat tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹14,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://up.gov.in/images/Varanasighat.png"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Uttarpradesh</h4>
              <p class="card-text">
                This is UttarPradesh tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹11,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://www.india.com/wp-content/uploads/2016/06/Uttarakhand.jpg"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Uttarakhand</h4>
              <p class="card-text">
                This is Uttarakhand tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹15,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://www.thenewsminute.com/sites/default/files/styles/slideshow_image_size/public/Kerala_Tourism_rep_image_Facebook_08082021_1200-compressed.jpg?itok=svnzOLkk"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Kerala</h4>
              <p class="card-text">
                This is Kerala tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹16,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://www.tourmyindia.com/states/tamilnadu/image/tamilnadu-banner.webp"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Tamilnadu</h4>
              <p class="card-text">
                This is Tamilnadu tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹13,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://images.indianexpress.com/2021/07/Mumbai-rain-14.jpg"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Maharashtra</h4>
              <p class="card-text">
                This is Maharashtra tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹22,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://static.punjabkesari.in/multimedia/2018_5image_15_08_099981034goabeach-ll.jpg"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Gova</h4>
              <p class="card-text">
                This is Gova tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹25,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
          <div class="card" style={{ "width": "18rem;", "height": "500px" }}>
            <img
              class="card-img-top"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f9/rajasthan.jpg?w=700&h=500&s=1"
              alt="Card image cap"
              width="200"
              height="250"
            />
            <div class="card-body">
              <h4 class="card-title">Rajasthan</h4>
              <p class="card-text">
                This is Rajasthan tour package if you want to book tour click below BOOK button
              </p>
              <h5>₹10,000</h5>
              <a href="#" onClick={bookingTour} class="btn btn-primary mt-2">
                Book Package
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ViewTours;
