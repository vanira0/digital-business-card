import React from "react"
import photo from "../photo.png"

export default function Interest() {
    return (
        <div className="info">
            <div className="info__photo">
                <img src={photo} alt="" />
            </div>
            <h1 className="info__name">Vani Rao</h1>
            <h3 className="info__post">Frontend Devloper</h3>
            <a className="info__link" href="#">vanirao.website</a><br />
            <div className="info-btns">
                <a href="mailto:vanirao322@gmail.com" className="info__btn"><i class="fa-solid fa-envelope"></i> Email</a>
                <a href="https://www.linkedin.com/in/vani-rao-2a833b230/" className="info__btn info__btn-blue">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </div>

        </div>
    )
}
