import style from './contactForm.module.scss';
import Image from 'next/image';
import Script from 'next/script';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';


const ContactForm = () => {
  return (
    <div className={style.contactForm}>
        <Script strategy="beforeInteractive" src="https://code.jquery.com/jquery-3.6.0.min.js" crossOrigin="anonymous" />
        <Script strategy="beforeInteractive" src="https://code.jquery.com/ui/1.13.3/jquery-ui.js" />
        <Script src="https://smtpjs.com/v3/smtp.js"/>
        <div className="search-location-form">
            {/* <h4 className="bold-800">Pre-book your Ride
            </h4> */}
            <form autoComplete="off" name="form-search" id="form-search" className="validate">
                <div className="form-group-container">
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <div className="input-with-icon">
                            <Image width={2000} height={1000} src="/images/svg/user.svg" alt="user icon" />
                            <input type="text" placeholder="" name="Name" id="Name" required />
                        </div>
                    </div>
                </div>
                <div className="form-group-container">
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <div className="input-with-icon">
                            <Image width={2000} height={1000} src="/images/svg/email.svg" alt="email icon" />
                            <input type="text" placeholder="" name="Email" id="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Mobile-No">Mobile NO.</label>
                        <div className="input-with-icon">
                            <Image width={2000} height={1000} src="/images/svg/phone.svg" alt="phone icon" />
                            <input type="tel" placeholder="" name="Mobile-No" id="Mobile-No" required />
                        </div>
                    </div>
                </div>
                <div className="form-group-container">
                    <div className="form-group">
                        <label htmlFor="">Location</label>
                        <div className="form-group-container embedded-form-group-container" style={{marginTop: 0, height: "auto"}}>
                            <div className="form-group form-airport-to-place">
                                <div className="input-with-icon airport-to-place">
                                    <Image style={{zIndex: 1}} width={2000} height={1000} src="/images/svg/pick.svg" alt="flight icon" />
                                    <AutoCompleteInput
                                        name="Pick-Up-address"
                                        id="airport-search"
                                        className="airport-search
                                        radius-up"
                                        type="text"
                                        placeholder="Pick-Up address"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group form-airport-to-place last-of-type">
                                <div className="input-with-icon airport-to-place">
                                    <Image style={{zIndex: 1}} width={2000} height={1000} src="/images/svg/drop.svg" alt="location icon" />
                                    <AutoCompleteInput
                                        name="Drop-Off-address"
                                        id="places-search"
                                        className="places-search radius-down"
                                        type="text"
                                        placeholder="Drop-Off address"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group-container">
                    <div className="form-group">
                        <label htmlFor="flightNo">Flight No.</label>
                        <div className="input-with-icon">
                            <Image width={2000} height={1000} src="/images/svg/flight.svg" alt="flight icon" />
                            <input type="text" placeholder="" name="Flight-No" id="flightNo" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cabType">Cab Type</label>
                        <div className="input-with-icon select-btn">
                            <Image width={2000} height={1000} src="/images/svg/cab.svg" alt="cab icon" />
                            <input type="text" placeholder="Select Cab" name="Cab-Type" id="cabType" readOnly autoComplete="off" />
                        </div>

                        <div className="dropdown-list dropdown-passengers" id="dropdown-cab-type">
                            <ul style={{display: "block", with: "100%", textAlign: "center"}}>
                                <li className="cab-type-item">Toyota Commuter</li>
                                <li className="cab-type-item">Toyota Tarago  </li>
                                <li className="cab-type-item">Toyota Camry   </li>
                                <li className="cab-type-item">Kia Carnival   </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="form-group-container">
                    <div className="form-group">
                        <label htmlFor="transfer_date">Date</label>
                        <div className="input-with-icon select-btn">
                            <Image width={2000} height={1000} src="/images/svg/calendar.svg" alt="calendar icon" />
                            <input type="text" placeholder="MM/DD/YYYY" name="PickUp-date" className="radius-up radius-down" id="transfer_date" readOnly required />
                        </div>
                    </div>
                    <div className="form-group">
                        <span className="information top"
                            data-tooltip="Enter flight arrival date&amp;time or hotel pick-up date&amp;time">
                            <Image width={2000} height={1000} src="/images/svg/information.svg" alt="information icon" /></span>
                        <label htmlFor="transfer_time">Arrival/Pick-up Time</label>
                        <div className="input-with-icon select-btn" id="transfer_clock">
                            <Image width={2000} height={1000} src="/images/svg/clock.svg" alt="clock icon" />
                            <input type="text" readOnly placeholder="__:__" name="PickUp-time" id="transfer_time"
                                className="radius-up radius-down time-pickable" autoComplete="off" required />
                        </div>
                    </div>
                </div>
                <div className="form-group-container" style={{backgroundColor:"#00000012", borderRadius: 10}}>
                    <div className="form-group">
                        <div className="switch-group"  style={{backgroundColor:"#00000012", borderRadius: 10}}>
                            <input id="switch" type="checkbox" />
                            <label htmlFor="switch" className="switch-button" style={{marginBottom: 0}}></label>
                            <span>Add a return</span>
                            <div className="form-group-container">
                                <div className="form-group">
                                    <label htmlFor="re_flightNo">Flight No.</label>
                                    <div className="input-with-icon">
                                        <Image width={2000} height={1000} src="/images/svg/flight.svg" alt="flight icon" />
                                        <input type="text" placeholder="" name="Return-Flight-No" id="re_flightNo" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="return_cabType">Cab Type</label>
                                    <div className="input-with-icon select-btn">
                                        <Image width={2000} height={1000} src="/images/svg/cab.svg" alt="cab icon" />
                                        <input type="text" placeholder="Select Cab" name="Return-Cab-Type" id="return_cabType" readOnly autoComplete="off" />
                                    </div>

                                    <div className="dropdown-list dropdown-passengers" id="dropdown-return-cab-type">
                                        <ul style={{display: "block", with: "100%", textAlign: "center"}}>
                                            <li className="return-cab-type-item">Toyota Commuter</li>
                                            <li className="return-cab-type-item">Toyota Tarago</li>
                                            <li className="return-cab-type-item">Toyota Camry</li>
                                            <li className="return-cab-type-item">Kia Carnival</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group-container round-trip">
                                <div className="form-group">
                                    <label htmlFor="return_date">Date</label>
                                    <div className="input-with-icon select-btn">
                                        <Image width={2000} height={1000} src="/images/svg/calendar.svg" alt="calendar icon" />
                                        <input type="text" placeholder="MM/DD/YYYY" name="Return-PickUp-date" id="return_date" autoComplete="off" readOnly />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="information top"
                                        data-tooltip="Enter flight arrival date&amp;time or hotel pick-up date&amp;time"><Image width={2000} height={1000}
                                            src="/images/svg/information.svg" alt="information icon" /></span>
                                    <label htmlFor="return_time">Arrival/Pick-up Time</label>
                                    <div className="input-with-icon select-btn" id="return_clock">
                                        <Image width={2000} height={1000} src="/images/svg/clock.svg" alt="clock icon" />
                                        <input type="text" placeholder="__:__" name="Return-PickUp-time" className='time-pickable' id="return_time" readOnly autoComplete="off" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group-container">
                    <div className="form-group">
                        <label htmlFor="passengers">Passengers</label>
                        <div className="input-with-icon select-btn">
                            <Image width={2000} height={1000} src="/images/svg/users.svg" alt="people icon"/>
                            <input name="Passengers" id="passengers" type="text" placeholder="1 Passenger" value="1 Passenger" readOnly />
                        </div>
                        <div className="dropdown-list dropdown-passengers" id="dropdown-passengers" style={{display: "none"}}>
                            <div className="list-top">
                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Adult</span>
                                    </div>
                                    <div className="passenger-right count-container" id="adults">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="passengers" data-id="adults">-</button>
                                        <span className="count">1</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="passengers" data-id="adults">+</button>
                                    </div>
                                </div>

                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Children</span>
                                    </div>
                                    <div className="passenger-right count-container" id="children">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="passengers" data-id="children">-</button>
                                        <span className="count">0</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="passengers" data-id="children">+</button>
                                    </div>
                                </div>

                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Infants</span>
                                    </div>
                                    <div className="passenger-right count-container" id="infants">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="passengers" data-id="infants">-</button>
                                        <span className="count">0</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="passengers" data-id="infants">+</button>
                                    </div>
                                </div>
                                
                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Weelchair</span>
                                    </div>
                                    <div className="passenger-right count-container" id="wheelchair">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="passengers" data-id="wheelchair">-</button>
                                        <span className="count">0</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="passengers" data-id="wheelchair">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="Adults" id="passengers-adults" value="1" placeholder="adult" />
                    <input type="hidden" name="Children" id="passengers-children" value="0" placeholder="children" />
                    <input type="hidden" name="Infants" id="passengers-infants" value="0" placeholder="infants" />
                    <input type="hidden" name="Wheelchair" id="passengers-wheelchair" value="0" placeholder="wheelchair" />
                    <div className="form-group">
                        <label htmlFor="baggage">Luggage</label>
                        <div className="input-with-icon select-btn">
                            <Image width={2000} height={1000} src="/images/svg/bag.svg" alt="bag icon"/>
                            <input name="Baggage" id="baggage" type="text" placeholder="1 Luggage" value="1 Luggage" readOnly />
                        </div>
                        <div className="dropdown-list dropdown-passengers" id="dropdown-baggage" style={{display: "none"}}>
                            <div className="list-top">
                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Luggage</span>
                                    </div>
                                    <div className="passenger-right count-container" id="large">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="baggage" data-id="luggage">-</button>
                                        <span className="count">1</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="baggage" data-id="luggage">+</button>
                                    </div>
                                </div>
                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Skis</span>
                                    </div>
                                    <div className="passenger-right count-container" id="skis">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="baggage" data-id="skis">-</button>
                                        <span className="count">0</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="baggage" data-id="skis">+</button>
                                    </div>
                                </div>
                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Bicycle</span>
                                    </div>
                                    <div className="passenger-right count-container" id="bicycle">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="baggage" data-id="bicycle">-</button>
                                        <span className="count">0</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="baggage" data-id="bicycle">+</button>
                                    </div>
                                </div>
                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Golf Bags</span>
                                    </div>
                                    <div className="passenger-right count-container" id="golf-bags">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="baggage" data-id="golf-bags">-</button>
                                        <span className="count">0</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="baggage" data-id="golf-bags">+</button>
                                    </div>
                                </div>
                                <div className="passenger">
                                    <div className="passenger-left">
                                        <span>Surfboard</span>
                                    </div>
                                    <div className="passenger-right count-container" id="surfboard">
                                        <button type="button" className="decrease" data-type="decrease" data-input-id="baggage" data-id="surfboard">-</button>
                                        <span className="count">0</span>
                                        <button type="button" className="increase" data-type="increase" data-input-id="baggage" data-id="surfboard">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="Luggage" id="baggage-luggage" value="1" placeholder="luggage" />
                    <input type="hidden" name="Surfboard" id="baggage-surfboard" value="0" placeholder="surfboard" />
                    <input type="hidden" name="Skis" id="baggage-skis" value="0" placeholder="skis" />
                    <input type="hidden" name="Bicycle" id="baggage-bicycle" value="0" placeholder="bicycle" />
                    <input type="hidden" name="Golf-Bags" id="baggage-golf-bags" value="0" placeholder="golf-bags" />
                </div>
                <div className="form-group-container" style={{justifyContent: "space-evenly"}}>
                    <div className="form-group">
                        <div className="switch-group">
                            <input name="Baby-Seat" id="baby-seat" type="checkbox" />
                            <label htmlFor="baby-seat" className="switch-button" style={{marginBottom: 0}}></label>
                            <span>Baby Seat</span>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="switch-group">
                            <input name="Baby-Capsule" id="baby-capsule" type="checkbox" />
                            <label htmlFor="baby-capsule" className="switch-button" style={{marginBottom: 0}}></label>
                            <span>Baby Capsule</span>
                        </div>
                    </div>
                </div>
                <div className="form-group-container">
                    <div className="form-group">
                        <label htmlFor="noteForDriver">Note</label>
                        <textarea type="text" placeholder="" name="Note-For-Driver" id="noteForDriver" />
                    </div>
                </div>
                <div className="form-group-container">
                    <button type="submit" className="btn btn-submit form-submit" id="search-button" data-form="form-search" data-subject="ApexMaxiCabs - Advance Booking Request">BOOK NOW</button>
                    <button type="submit" className="btn btn-submit-r form-submit" id="search-button" data-form="form-search" data-subject="ApexMaxiCabs - Request a Quote for Advance Booking">Get A Quote</button>
                </div>
            </form>
        </div>
        <Script src="/vendor/form.js" />
    </div>
  )
}

export default ContactForm;