import style from './homeform.module.scss';
import Image from 'next/image';
import Script from 'next/script';
import AutoCompleteInput from '../AutoCompleteInput/AutoCompleteInput';

const HomeForm = () => {
  return (
    <div className={style.homeForm}>
        <Script strategy="beforeInteractive" src="https://code.jquery.com/jquery-3.6.0.min.js" crossOrigin="anonymous" />
        <Script strategy="beforeInteractive" src="https://code.jquery.com/ui/1.13.3/jquery-ui.js" />
        <form autoComplete="off" name="form-search" id="form-search" >
            <input type="hidden" name="Adults" id="passengers-adults" value="1" placeholder="adult" />
            <input type="hidden" name="Children" id="passengers-children" value="0" placeholder="children" />
            <input type="hidden" name="Infants" id="passengers-infants" value="0" placeholder="infants" />
            <input type="hidden" name="Wheelchair" id="passengers-wheelchair" value="0" placeholder="wheelchair" />
            <input type="hidden" name="Luggage" id="baggage-luggage" value="1" placeholder="luggage" />
            <input type="hidden" name="Surfboard" id="baggage-surfboard" value="0" placeholder="surfboard" />
            <input type="hidden" name="Skis" id="baggage-skis" value="0" placeholder="skis" />
            <input type="hidden" name="Bicycle" id="baggage-bicycle" value="0" placeholder="bicycle" />
            <input type="hidden" name="Golf-Bags" id="baggage-golf-bags" value="0" placeholder="golf-bags" />
            
            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="">Location</label>
                    <div className="form-group-container embedded-form-group-container" style={{marginTop: 0, height: "auto"}}>
                        <div className="form-group form-airport-to-place">
                            <div className="input-with-icon airport-to-place">
                                <svg style={{zIndex: 1, width: 30, height: 30}} xmlns="http://www.w3.org/2000/svg" width="30" height="27.038" viewBox="0 0 30 27.038">
                                    <path d="M0 0h30v27.038H0z" fill="none"/>
                                    <path d="M17.962 3.057c.335.271.648.558.955.86l.224.22c1.907 1.992 2.311 4.52 2.289 7.164-.021.768-.17 1.442-.411 2.169l-.096.382h-6.306l.037 2.06.014 1.3q.008 1.029.028 2.059.017.83.02 1.661.003.315.011.631c.036 1.362-.09 2.218-1.037 3.232-.183.204-.33.429-.478.66l-.133.203-.085.138c-.335-.137-.481-.292-.679-.592l-.168-.251-.179-.273-.385-.575-.201-.301q-.489-.722-.99-1.435a273 273 0 0 1-1.268-1.828q-.641-.934-1.29-1.863c-1.292-1.856-1.292-1.856-1.708-2.469l-.3-.439a9.2 9.2 0 0 1-1.551-5.255l.002-.307c.038-2.564 1.04-4.858 2.867-6.646.981-.872 2.18-1.54 3.461-1.842l.235-.079c2.357-.74 5.172-.009 7.122 1.416" fill="#f58200"/>
                                    <path d="M15.955 15.191h10.701v10.701H15.955z" fill="none"/>
                                    <path d="M15.955 15.191h10.701v10.701H15.955zm.86.86v8.981h4.013v-5.637c-.507.428-.507.428-.985.88l-.15.151-.149.151-.157.158-.374.38c-.362-.145-.383-.192-.573-.573l2.771-2.771c.43.368.84.731 1.236 1.131l.151.152.47.473.322.324q.392.393.782.787l-.478.573c-.533-.434-1.014-.912-1.495-1.403a30 30 0 0 0-.416-.413h-.096v5.637h4.108v-8.981z" fill="#f58200"/>
                                    <path d="M14.46 7.119c.463.259.782.555 1.084.99l.168.238c.452.767.459 1.672.284 2.53-.272.783-.859 1.501-1.598 1.884-.817.318-1.749.389-2.595.132-.921-.43-1.483-1.071-1.867-2.001a3.2 3.2 0 0 1 .149-2.341c.939-1.631 2.645-2.201 4.374-1.432" fill="#fff"/>
                                </svg>
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
                                <svg style={{zIndex: 1, width: 30, height: 30}} xmlns="http://www.w3.org/2000/svg" width="30" height="25.593" viewBox="0 0 30 25.593">
                                    <path d="M0 0h30v25.593H0z" fill="none"/>
                                    <path d="m15.085 1.356.313.085c1.094.308 2.036.788 2.908 1.525l.171.133c1.446 1.173 2.283 3.17 2.518 4.985.115 1.47-.06 2.702-.485 4.119h-6.017l.033 1.954.013 1.233q.007.977.025 1.953.015.788.018 1.576.003.299.01.598c.029 1.179-.035 2.033-.797 2.973-.236.222-.236.222-.575.222-.134-.14-.134-.14-.264-.339l-.149-.225-.159-.247-.342-.515-.178-.27c-.286-.43-.582-.853-.879-1.276l-.343-.492-.163-.234q-.31-.446-.617-.895-.569-.829-1.144-1.653c-1.143-1.642-1.143-1.642-1.515-2.191l-.263-.382c-1.36-2.029-1.642-4.331-1.236-6.719.26-1.302.849-2.562 1.744-3.545l.208-.232c.575-.609 1.187-1.05 1.911-1.463l.22-.126c1.467-.749 3.442-1.023 5.034-.552" fill="#f58200"/>
                                    <path d="M15.678 13.39h9.492v9.492h-9.492z" fill="none"/>
                                    <path d="M15.678 13.39h9.492v9.492h-9.492zm.847.763v7.966h7.881v-7.966h-3.559v5a20 20 0 0 0 1.139-1.038l.139-.136q.17-.171.333-.352v-.169l.593.508c-.48.587-1.019 1.114-1.557 1.647l-.287.286q-.349.348-.699.694c-.587-.48-1.114-1.019-1.647-1.557l-.286-.287-.694-.698.424-.508c.473.385.899.809 1.326 1.244a27 27 0 0 0 .369.366h.085v-5z" fill="#f58200"/>
                                    <path d="M15.191 6.499c.503.402.83.932.995 1.552.09.959.047 1.7-.573 2.475-.551.604-1.118.925-1.937.965-.691.01-1.236-.061-1.812-.474l-.149-.099c-.604-.445-.894-1.135-1.038-1.851-.097-.791.157-1.465.61-2.107 1.044-1.244 2.582-1.358 3.902-.462" fill="#fff"/>
                                </svg>
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
                    <label htmlFor="">Passengers</label>
                    <div className="input-with-icon select-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28.333" viewBox="0 0 30 28.333">
                        <path d="M16.188 15.417c1.905 0 3.45 1.583 3.45 3.54l-.003 1.767c.237 4.337-3.017 6.5-9.048 6.5-6.013 0-9.337-2.135-9.337-6.437v-1.83c0-1.955 1.545-3.542 3.45-3.542zm9.2 0c1.903 0 3.448 1.583 3.448 3.54l-.002 1.243c.208 3.89-2.667 5.84-7.92 5.84q-1.07 0-2.01-.107c1.233-1.17 1.895-2.758 1.893-4.767l-.017-.508.005-1.7a4.76 4.76 0 0 0-1.558-3.543zM10.447 1.25c3.175 0 5.75 2.643 5.75 5.903s-2.575 5.903-5.75 5.903-5.75-2.643-5.75-5.903S7.273 1.25 10.45 1.25m11.498 2.362c2.54 0 4.6 2.113 4.6 4.722 0 2.607-2.06 4.722-4.6 4.722s-4.601-2.116-4.601-4.723 2.06-4.722 4.6-4.722"/>
                        </svg>
                        <input name="Passengers" id="passengers" type="text" placeholder="1 Passengers" value="1 Passengers" readOnly />
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
                <div className="form-group">
                    <label htmlFor="">Luggage</label>
                    <div className="input-with-icon select-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" xmlSpace="preserve" width="30" height="30">
                        <path d="M26.25 12.188h-.938V1.875c.563 0 .938-.375.938-.938s-.375-.938-.938-.938h-7.5c-.563 0-.938.375-.938.938s.375.938.938.938v10.313h-.938c-1.594 0-2.813 1.219-2.813 2.813v2.813h15v-2.813c0-1.594-1.219-2.813-2.813-2.813m-6.56-10.313h3.75v10.313h-3.75zm-5.625 25.313c0 1.594 1.219 2.813 2.813 2.813h9.375c1.594 0 2.813-1.219 2.813-2.813v-7.5H14.063zM0 18.75v8.438c0 1.594 1.219 2.813 2.813 2.813h1.875V15.938H2.813C1.219 15.938 0 17.157 0 18.751m6.563-2.813h5.625v14.063H6.563zm4.688-5.625H7.5c-.563 0-.938.375-.938.938v2.813h1.875v-1.875h1.875v1.875h1.875v-2.813c0-.563-.375-.938-.938-.938"/>
                        </svg>
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
            </div>
            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="transfer_date">Date</label>
                    <div className="input-with-icon select-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31.875" viewBox="0 0 30 31.875" >
                        <path d="M25.226 4.327h-1.463V2.869c0-.876-.583-1.461-1.459-1.461-.878 0-1.463.585-1.463 1.463V4.33H9.156V2.869c0-.876-.585-1.461-1.463-1.461-.876 0-1.459.585-1.459 1.463V4.33H4.771C2.291 4.327.392 6.227.392 8.711v1.461H29.61V8.709c0-2.482-1.899-4.382-4.382-4.382M.39 26.242c0 2.482 1.899 4.382 4.384 4.382h20.453c2.482 0 4.382-1.899 4.382-4.382V13.093H.39zm21.915-10.226c.876 0 1.461.583 1.461 1.461 0 .876-.585 1.461-1.463 1.461-.876 0-1.461-.585-1.461-1.463 0-.876.585-1.459 1.463-1.459m0 5.843c.876 0 1.461.585 1.461 1.463 0 .876-.585 1.461-1.463 1.461-.876 0-1.461-.585-1.461-1.463 0-.876.585-1.461 1.463-1.461M15 16.016c.876 0 1.461.583 1.461 1.461 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.459 1.461-1.459m0 5.843c.876 0 1.461.585 1.461 1.463 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.461 1.461-1.461m-7.305-5.843c.876 0 1.461.583 1.461 1.461 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.459 1.461-1.459m0 5.843c.876 0 1.461.585 1.461 1.463 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.461 1.461-1.461"/>
                        </svg>
                        <input type="text" placeholder="MM/DD/YYYY" name="PickUp-date" className="radius-up radius-down" id="transfer_date" readOnly required />
                    </div>
                </div>
                <div className="form-group">
                    <span className="information top" data-tooltip="Enter flight arrival date&amp;time or hotel pick-up date&amp;time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M15 .375A14.625 14.625 0 1 0 29.625 15 14.64 14.64 0 0 0 15 .375M15 24a1.688 1.688 0 1 1 0-3.375A1.688 1.688 0 0 1 15 24m1.125-6.852v.102a1.125 1.125 0 1 1-2.25 0v-1.125A1.125 1.125 0 0 1 15 15c1.86 0 3.375-1.266 3.375-2.813S16.86 9.375 15 9.375s-3.375 1.266-3.375 2.813v.562a1.125 1.125 0 1 1-2.25 0v-.563c0-2.79 2.523-5.063 5.625-5.063s5.625 2.271 5.625 5.063c0 2.445-1.935 4.489-4.5 4.96" />
                        </svg>
                    </span>
                    <label htmlFor="transfer_time">Arrival/Pick-up Time</label>
                    <div className="input-with-icon select-btn" id="transfer_clock">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                        <path d="M15 6.75a1.375 1.375 0 0 0-1.375 1.375v6.028l-3.342 1.68a1.375 1.375 0 0 0 1.233 2.455l4.1-2.062A1.37 1.37 0 0 0 16.377 15V8.125A1.375 1.375 0 0 0 15 6.75m0-5.5A13.75 13.75 0 1 0 28.75 15 13.767 13.767 0 0 0 15 1.25M15 26a11 11 0 1 1 11-11 11.017 11.017 0 0 1-11 11"/>
                        </svg>
                        <input type="text" readOnly placeholder="__:__" name="PickUp-time" id="transfer_time"
                            className="radius-up radius-down time-pickable" autoComplete="off" required />
                    </div>
                </div>
            </div>
            <div className="form-group-container" style={{backgroundColor:"#ffffff14", borderRadius: 10, paddingInline: 12, paddingBlock: "14px 8px"}}>
                <div className="form-group">
                    <div className="switch-group">
                        <input id="switch" type="checkbox" />
                        <label htmlFor="switch" className="switch-button" style={{marginBottom: 0}}></label>
                        <span>Add a return</span>
                        <div className="form-group-container round-trip">
                            <div className="form-group">
                                <label htmlFor="return_date">Date</label>
                                <div className="input-with-icon select-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31.875" viewBox="0 0 30 31.875" >
                                    <path d="M25.226 4.327h-1.463V2.869c0-.876-.583-1.461-1.459-1.461-.878 0-1.463.585-1.463 1.463V4.33H9.156V2.869c0-.876-.585-1.461-1.463-1.461-.876 0-1.459.585-1.459 1.463V4.33H4.771C2.291 4.327.392 6.227.392 8.711v1.461H29.61V8.709c0-2.482-1.899-4.382-4.382-4.382M.39 26.242c0 2.482 1.899 4.382 4.384 4.382h20.453c2.482 0 4.382-1.899 4.382-4.382V13.093H.39zm21.915-10.226c.876 0 1.461.583 1.461 1.461 0 .876-.585 1.461-1.463 1.461-.876 0-1.461-.585-1.461-1.463 0-.876.585-1.459 1.463-1.459m0 5.843c.876 0 1.461.585 1.461 1.463 0 .876-.585 1.461-1.463 1.461-.876 0-1.461-.585-1.461-1.463 0-.876.585-1.461 1.463-1.461M15 16.016c.876 0 1.461.583 1.461 1.461 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.459 1.461-1.459m0 5.843c.876 0 1.461.585 1.461 1.463 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.461 1.461-1.461m-7.305-5.843c.876 0 1.461.583 1.461 1.461 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.459 1.461-1.459m0 5.843c.876 0 1.461.585 1.461 1.463 0 .876-.585 1.461-1.463 1.461-.876 0-1.459-.585-1.459-1.463 0-.876.583-1.461 1.461-1.461"/>
                                    </svg>
                                    <input type="text" placeholder="MM/DD/YYYY" name="Return-PickUp-date" id="return_date" autoComplete="off" readOnly />
                                </div>
                            </div>

                            <div className="form-group">
                                <span className="information top" data-tooltip="Enter flight arrival date&amp;time or hotel pick-up date&amp;time">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M15 .375A14.625 14.625 0 1 0 29.625 15 14.64 14.64 0 0 0 15 .375M15 24a1.688 1.688 0 1 1 0-3.375A1.688 1.688 0 0 1 15 24m1.125-6.852v.102a1.125 1.125 0 1 1-2.25 0v-1.125A1.125 1.125 0 0 1 15 15c1.86 0 3.375-1.266 3.375-2.813S16.86 9.375 15 9.375s-3.375 1.266-3.375 2.813v.562a1.125 1.125 0 1 1-2.25 0v-.563c0-2.79 2.523-5.063 5.625-5.063s5.625 2.271 5.625 5.063c0 2.445-1.935 4.489-4.5 4.96" />
                                    </svg>
                                </span>
                                <label htmlFor="return_time">Arrival/Pick-up Time</label>
                                <div className="input-with-icon select-btn" id="return_clock">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                                    <path d="M15 6.75a1.375 1.375 0 0 0-1.375 1.375v6.028l-3.342 1.68a1.375 1.375 0 0 0 1.233 2.455l4.1-2.062A1.37 1.37 0 0 0 16.377 15V8.125A1.375 1.375 0 0 0 15 6.75m0-5.5A13.75 13.75 0 1 0 28.75 15 13.767 13.767 0 0 0 15 1.25M15 26a11 11 0 1 1 11-11 11.017 11.017 0 0 1-11 11"/>
                                    </svg>
                                    <input type="text" placeholder="__:__" name="Return-PickUp-time" className='time-pickable' id="return_time" readOnly autoComplete="off" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div className="input-with-icon">
                        <svg width="30" height="30" viewBox="0 0 0.9 0.9" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.787.75a.075.075 0 0 1-.075.075H.188A.075.075 0 0 1 .113.75.225.225 0 0 1 .338.525h.225A.225.225 0 0 1 .788.75M.451.45A.188.188 0 1 0 .263.262.19.19 0 0 0 .451.45"/>
                        </svg>
                        <input type="text" placeholder="Name" name="Name" id="name" required />
                    </div>
                </div>
            </div>
            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <div className="input-with-icon">
                        <svg width="30" height="30" viewBox="-0.075 -0.075 0.9 0.9" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                            <path d="M.722.207.4.492a.04.04 0 0 1-.05 0L.026.208.034.202.313.02a.11.11 0 0 1 .123 0l.279.183zM.75.288v.387A.075.075 0 0 1 .675.75h-.6A.075.075 0 0 1 0 .675V.289l.301.259a.11.11 0 0 0 .15 0z"/>
                        </svg>
                        <input type="text" placeholder="Email" name="Email" id="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="Mobile-No">Mobile NO.</label>
                    <div className="input-with-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 3.75 3.75" xmlSpace="preserve">
                            <path d="m2.914 2.396-.232-.188a.225.225 0 0 0-.274-.007l-.222.161a.076.076 0 0 1-.098-.007l-.363-.33-.334-.367a.075.075 0 0 1-.007-.098l.161-.221a.23.23 0 0 0-.007-.274L1.35.833a.225.225 0 0 0-.334-.019l-.203.203a.24.24 0 0 0-.068.169c.026.476.244.93.563 1.249s.769.536 1.249.563a.22.22 0 0 0 .169-.068l.203-.202a.215.215 0 0 0-.015-.33"/>
                        </svg>
                        <input type="tel" placeholder="Mobile No." name="Mobile-No" id="Mobile-No" required />
                    </div>
                </div>
            </div>
            <div className="form-group-container" style={{gap: 0}}>
                <button type="submit" className="btn btn-submit form-submit" id="search-button" data-form="form-search" data-subject="ApexMaxiCabs - Booking Request">BOOK NOW</button>
                <button type="submit" className="btn btn-submit-r form-submit" id="search-button" data-form="form-search" data-subject="ApexMaxiCabs - Request for a Quote">Get A Quote</button>
            </div>
        </form>
        <Script src="/vendor/form.js" />
    </div>
  )
}

export default HomeForm;