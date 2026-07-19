import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// About 1 Section 2 - Who We Are / Our Journey

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
        <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
    </svg>
);

const JOURNEY_ITEMS = [
    {
        date: "2024 — Inception & Foundation",
        title: "Establishing Vasundhara Financial Services",
        company: null,
        desc: "Founded in Rajkot to address the credit gap for MSMEs, providing local businesses with direct access to tailored capital and machinery loans.",
    },
    {
        date: "2025 — Network Expansion",
        title: "10+ Premium Bank Partnerships",
        company: null,
        desc: "Successfully established direct tie-ups with premium national banks and NBFCs, allowing us to source the most competitive interest rates and terms.",
    },
    {
        date: "2026 — Scaling Milestones",
        title: "Over ₹50 Crores Disbursed",
        company: null,
        desc: "Proudly crossed the milestone of 50+ Crores in total disbursements, supporting more than 140 local business owners and families.",
    },
    {
        date: "2026+ — Future Horizons",
        title: "Digital Transformation & Beyond",
        company: null,
        desc: "Integrating seamless digital tools to make loan applications faster and more accessible across North Karnataka and surrounding regions.",
    },
];

export default function Section2() {
    return (
        <section className="sec-2-about block-journey pt-120 pb-120 bg-neutral-900 changeless">
            <div className="container">
                <div className="row align-items-end pb-60">
                    <div className="col-lg-7 col-md-7">
                        <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase text-white">
                                <span className="text-1">Who We Are</span>
                                <span className="text-2">Who We Are</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                        <h3 className="text-white reveal-text">
                            <RevealText>Our Journey</RevealText>
                        </h3>
                        <p className="text-white fz-font-lg">
                            A timeline of ideas, growth, and meaningful impact. From a <br /> simple idea to shaping
                            digital experiences that matter.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-5 ms-auto d-flex justify-content-md-end">
                        <div
                            className="at-btn-group at_fade_anim"
                            data-delay=".4"
                            data-fade-from="bottom"
                            data-ease="bounce"
                        >
                            <Link className="at-btn-circle bg-neutral-700" to="/contact">
                                {ARROW_CIRCLE_SVG}
                            </Link>
                            <Link className="at-btn z-index-1 bg-neutral-700" to="/contact">
                                Contact Us
                            </Link>
                            <Link className="at-btn-circle bg-neutral-700" to="/contact">
                                {ARROW_CIRCLE_SVG}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4">
                        <div className="alt-portfolio-item mb-30 at-hover-item">
                            <Link to="#" className="alt-portfolio-thumb mb-15 p-relative fix d-block">
                                <img
                                    className="w-100 scale-img-from-to"
                                    data-value-1="1.5"
                                    data-value-2="1"
                                    src="/assets/imgs/pages/img-3.png"
                                    alt="Vasundhara Office"
                                    width={550}
                                    height={660} loading="lazy" />
                                <div className="alt-portfolio-btn">
                                    <div className="content">
                                        <span className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-label">
                                            Since 2024
                                        </span>
                                        <h2 className="fw-400 fz-font-3xl text-white mb-0 mt-20">
                                            Financial Consultation & Loan Advisory
                                        </h2>
                                        <p className="text-white fz-font-md mb-0 mt-10 text-truncate-2 des">
                                            We provide businesses and individuals complete funding solutions with 10+ premium bank tie-ups.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="alt-portfolio-content d-flex justify-content-between align-items-center bg-neutral-700">
                                <h5 className="alt-portfolio-title mb-0">
                                    <Link to="#" className="common-underline text-white">
                                        Vasundhara Financial<sup>®</sup>
                                    </Link>
                                </h5>
                                <span className="alt-portfolio-plus text-white">{PLUS_ICON}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 ms-auto pt-80">
                        <ul className="journey-list" role="list">
                            {JOURNEY_ITEMS.map((item, i) => (
                                <li key={i} className="journey-list__item scroll-move-up">
                                    <span className="journey-list__date">{item.date}</span>
                                    <div className="journey-list__body">
                                        <h6 className="journey-list__title neutral-0">
                                            {item.title}
                                            {item.company != null && (
                                                <span className="journey-list__company"> {item.company}</span>
                                            )}
                                        </h6>
                                        <p className="journey-list__desc">{item.desc}</p>
                                    </div>
                                    <Link to="#" className="journey-list__link" aria-label="View details">
                                        {ARROW_SVG}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
