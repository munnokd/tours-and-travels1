import React, { Component } from "react";
import "./ViewTravels.css";
import swal from "sweetalert";

export class ViewTravels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: [],
        };
    }


    render() {
        function bookingFlight() {
            swal("Tour Booking is succesfully!", "", "success");
        }
        return (
            <div className={"container"}>
                <br></br>
                <div className={"justify-content-center"}>
                    <h1 className="travel_title">Travels Booking</h1>
                </div>

                <div class="card-columns">
                    <div class="card" style={{ "width": "18rem;", "height": "240px" }}>
                        <div class="card-body">
                            <h5 style={{ fontSize: "25px" }} class="card-title">Delhi ✈  Mumbai</h5>
                            <p>at 1 Apr</p>

                            <p style={{ fontWeight: "bold" }}>₹4700</p>
                            <a href="#" onClick={bookingFlight} class="btn btn-primary mt-3">
                                Book Flight
                            </a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem;", "height": "240px" }}>
                        <div class="card-body">
                            <h5 style={{ fontSize: "25px" }} class="card-title">Gova ✈ Ahmedabad</h5>
                            <p>at 1 Apr</p>

                            <p style={{ fontWeight: "bold" }}>₹4000</p>
                            <a href="#" onClick={bookingFlight} class="btn btn-primary mt-3">
                                Book Flight
                            </a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem;", "height": "240px" }}>
                        <div class="card-body">
                            <h5 style={{ fontSize: "25px" }} class="card-title">Srinagar ✈  Chennai</h5>
                            <p>at 1 Apr</p>

                            <p style={{ fontWeight: "bold" }}>₹5100</p>
                            <a href="#" onClick={bookingFlight} class="btn btn-primary mt-3">
                                Book Flight
                            </a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem;", "height": "240px" }}>
                        <div class="card-body">
                            <h5 style={{ fontSize: "25px" }} class="card-title">Delhi ✈ Gova</h5>
                            <p>at 1 Apr</p>

                            <p style={{ fontWeight: "bold" }}>₹4900</p>
                            <a href="#" onClick={bookingFlight} class="btn btn-primary mt-3">
                                Book Flight
                            </a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem;", "height": "240px" }}>
                        <div class="card-body">
                            <h5 style={{ fontSize: "25px" }} class="card-title">Mumbai ✈  Delhi</h5>
                            <p>at 1 Apr</p>

                            <p style={{ fontWeight: "bold" }}>₹4700</p>
                            <a href="#" onClick={bookingFlight} class="btn btn-primary mt-3">
                                Book Flight
                            </a>
                        </div>
                    </div>
                    <div class="card" style={{ "width": "18rem;", "height": "240px" }}>
                        <div class="card-body">
                            <h5 style={{ fontSize: "25px" }} class="card-title">Ahmedabad ✈  Lacknow</h5>
                            <p>at 1 Apr</p>

                            <p style={{ fontWeight: "bold" }}>₹3000</p>
                            <a href="#" onClick={bookingFlight} class="btn btn-primary mt-3">
                                Book Flight
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ViewTravels;
