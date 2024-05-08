import React from "react";

function HeroCard(props) {
    return (
        <div className="poppins-regular card text-center my-5 w-1/6">
    <div className="card-body">
        <h5 className="card-title poppins-bold my-4">{props.title}</h5>
        <span>
            {props.icon === "paw" ? (
                <span className="material-symbols-outlined size">pets</span>
            ) : props.icon === "play" ? (
                <span className="material-symbols-outlined size">relax</span>
            ) : props.icon === "medical" ? (
                <span className="material-symbols-outlined size">medical_services</span>
            ) : null}
        </span>
        <p className="card-text poppins-regular my-4">{props.text}</p>
    </div>
</div>

    );
}

export default HeroCard