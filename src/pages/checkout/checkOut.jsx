import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import Services from "../../components/common/service/Services";
import StripeCheckout from "react-stripe-checkout";
import { actions } from "../../redux/Store";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("");
  const checkoutItem = useSelector((state) => state) ?? [];
  var total = 0;
  console.log(checkoutItem);

  const onToken = (token, shippingAddress) => {
    dispatch(actions.userOrdered({ UserPayment: token, UserAdd: shippingAddress, UserPdct: checkoutItem,Total:total }));
    alert("Payment Successfull !");
    navigate("/user/order");

    // console.log(token);
    // console.log(shippingAddress);
  };



  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your Orders</span>
              <span className="badge badge-primary bg-primary badge-pill">
                {checkoutItem.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {checkoutItem?.map((items, index) => {
                total = total + items.item?.[0].price;
                return (<>
                  <li className="list-group-item d-flex justify-content-between lh-condensed" key={index}>
                    <div>
                      <h6 className="my-0">{items.item?.[0].title}</h6>
                    </div>
                    <span className="text-muted">
                      <span className="fw-bold m-1">₹</span>
                      {items.item?.[0].price}
                    </span>
                  </li>
                </>)
              })
              }
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0 text-primary">Total PNR(IND)</h6>
                </div>
                <span className="text-dark fw-bold ">

                  <span className="fw-bold m-1">₹</span>
                  {total}
                </span>
              </li>
            </ul>

            <h4 className="mb-3">Make Payment</h4>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => setPayment(true)} />
              <label className="form-check-label" for="flexRadioDefault1">
                Cash On Delivery
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={(e) => setPayment(false)} />
              <label className="form-check-label" for="flexRadioDefault2">
                Online
              </label>
            </div>


          </div>
          <div className="col-md-8 order-md-1">

            {payment === true ? (

              <form className="needs-validation" novalidate="">
                <h4 className="mb-3">Billing address</h4>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Phone No.</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="email">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required=""
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address2">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required=""
                    >
                      <option value="">Choose...</option>
                      <option>India</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select>
                      <option>Choose...</option>
                      <option>Andaman and Nicobar Islands</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chandigarh</option>
                      <option>Chhattisgarh</option>
                      <option>Dadra and Nagar Haveli</option>
                      <option>Daman and Diu</option>
                      <option>Delhi</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jammu and Kashmir</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Lakshadweep</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Orissa</option>
                      <option>Pondicherry</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Tripura</option>
                      <option>Uttaranchal</option>
                      <option>Uttar Pradesh</option>
                      <option>West Bengal</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger ml-5"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>



              </form>) :
              (payment === false ? (<StripeCheckout
                name="Er. Manish Gupta"
                description={`total pay ₹ ${total}`}
                token={onToken}
                currency="INR"
                shippingAddress=""
                amount={total * 100}
                stripeKey="pk_test_51LAV5iSIlRKMsbTmUR3xRvIPUhd2WTE9qIXGgix5OUqU3yzFzTQQekVdbOIClFzujPccSzUagbUKD8dOcQjSGF8S004R85RPv7"
              />) : (<span></span>))}


          </div>
        </div>
        <div></div>
      </div>
      <Services />
      <Footer />
    </>
  );
};

export default CheckOut;