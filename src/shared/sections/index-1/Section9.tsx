import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
    </svg>
);

const LOCATION_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 40V20H0L20 0L40 20V40H20Z" fill="currentColor" />
        <path d="M0 20L20 40H0V20Z" fill="currentColor" />
    </svg>
);

export default function Section9() {
    return (
        <div className="container-2200">
            <section className="at-sec9-area pt-130 pb-130 rounded-5 mx-lg-3 mx-2 border-100 mt-10">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-xxl-7 col-lg-7">
                            <div className="at-about-title-wrap mb-30">
                                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">Why choose us</span>
                                        <span className="text-2">Why choose us</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <h3 className="at-section-title reveal-text mb-lg-0 mb-4">
                                    <RevealText>
                                        Rely on our experienced professionals to find loan options and financial strategies tailored just for you.
                                    </RevealText>
                                </h3>
                                
                                <div className="at-about-content pt-50">
                                    <div className="d-flex gap-4">
                                        {LOCATION_SVG}
                                        <div>
                                            <h6 className="fw-600 mb-10">Our Main Office</h6>
                                            <span className="fz-font-md neutral-500">
                                                418, Nakshatra VII, Raiya Main Road,<br />
                                                Bapa Sitaram Chowk,<br />
                                                Rajkot, Gujarat - 360007
                                                <br /><br />
                                                <strong>Phone:</strong>{" "}
                                                <span className="neutral-900">
                                                    <a href="tel:+919714439005">+91 97144 39005</a>
                                                </span>
                                                <span className="neutral-500 d-block mt-1">
                                                    <strong>Customer Care:</strong>{" "}
                                                    <a href="tel:+917575801018" className="neutral-900">+91 75758 01018</a>
                                                </span>
                                                <br />
                                                <strong>Email:</strong>{" "}
                                                <span className="neutral-900">
                                                    <a href="mailto:vashundhara.loan@gmail.com">vashundhara.loan@gmail.com</a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-lg-5 text-center">
                            <div className="at-about-thumb fix anim-zoomin rounded-3 shadow-lg overflow-hidden" style={{ maxWidth: "450px", margin: "0 auto" }}>
                                <img 
                                    src="/assets/imgs/pages/img-22.png" 
                                    alt="Vasundhara Executive Advisor" 
                                    className="img-fluid" 
                                    width={450} 
                                    height={550} 
                                    loading="lazy" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
