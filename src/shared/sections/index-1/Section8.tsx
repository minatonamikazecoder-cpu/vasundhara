import OdometerCounter from "@/shared/elements/OdometerCounter";

const STATS = [
    { count: 2, suffix: "+", label: "Years of Experience" },
    { count: 140, suffix: "+", label: "Happy Clients" },
    { count: 50, suffix: " Cr+", label: "Disbursed Amount" },
    { count: 10, suffix: "+", label: "Partner Bank Tie-ups" },
    { count: 99, suffix: "%", label: "Client Satisfaction Rate" },
];

export default function Section8() {
    return (
        <div className="container-2200">
            <section className="at-sec8-area pt-90 pb-90 bg-neutral-50 rounded-5 mx-lg-3 mx-2 mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-lg-between justify-content-around align-items-center gap-4">
                                {STATS.map((stat) => (
                                    <div key={stat.label}>
                                        <h1>
                                            <OdometerCounter count={stat.count} suffix={stat.suffix} className="text-nowrap" />
                                        </h1>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
