import img from "../pages/home content/Assets/mobile_images/Rectangle 50.png"
import './common.css';
import {useEffect, useState} from "react";
import Swiper from "swiper";
import {Python, Close} from "./language_icon_loader";

export const Information_container = (props) => {
    props = props.props;
    const [toggleBtn, setToggle] = useState(true);
    useEffect(
        () => {
            console.log(props)
            new Swiper(".ic_about_container", {
                slidesPerView: 1
            })
        }
    )
    const parser = new DOMParser();
    return (toggleBtn ? <>
        <div className="information_container">
            <div className="max_width">
                <div className="lf_container">
                    <div className="heading_container">
                        <div className="lf_heading">
                            Languages/Frameworks
                        </div>
                        <div className="close" onClick={() => setToggle(false)}>
                            <Close/>
                        </div>
                    </div>
                    <ul className="tags_container">
                        {
                            props.tags.map((value, index, array) => <li className="tag">
                                    <a href={value.link} className={"center"}>
                                        {value.icon}
                                        <span className="tag_heading">{value.name}</span>
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <ul className="division_line">
                    <li className="chunk chunk1"/>
                    <li className="chunk chunk2"/>
                    <li className="chunk chunk3"/>
                    <li className="chunk chunk4"/>
                </ul>
                <div className="ic_about_container">
                    <div className="about_heading_container">
                        <span>About this {props.type}</span>
                        <span className={"ic_img_np"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_192_176)"><path
                                    fillRule="evenodd" clipRule="evenodd"
                                    d="M8.29279 12.707C8.10532 12.5195 8 12.2652 8 12C8 11.7348 8.10532 11.4805 8.29279 11.293L13.9498 5.63601C14.042 5.5405 14.1524 5.46431 14.2744 5.41191C14.3964 5.3595 14.5276 5.33191 14.6604 5.33076C14.7932 5.3296 14.9248 5.3549 15.0477 5.40519C15.1706 5.45547 15.2823 5.52972 15.3762 5.62361C15.4701 5.71751 15.5443 5.82916 15.5946 5.95205C15.6449 6.07495 15.6702 6.20663 15.669 6.33941C15.6679 6.47219 15.6403 6.60341 15.5879 6.72541C15.5355 6.84742 15.4593 6.95776 15.3638 7.05001L10.4138 12L15.3638 16.95C15.5459 17.1386 15.6467 17.3912 15.6445 17.6534C15.6422 17.9156 15.537 18.1664 15.3516 18.3518C15.1662 18.5372 14.9154 18.6424 14.6532 18.6447C14.391 18.647 14.1384 18.5462 13.9498 18.364L8.29279 12.707Z"
                                    fill="#000"/>
</g>
<defs>
<clipPath id="clip0_192_176">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
                            <span className="spacer"/>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_192_172)">
<path fill-rule="evenodd" clipRule="evenodd"
      d="M15.7064 11.293C15.8938 11.4805 15.9992 11.7348 15.9992 12C15.9992 12.2652 15.8938 12.5195 15.7064 12.707L10.0494 18.364C9.95712 18.4595 9.84678 18.5357 9.72477 18.5881C9.60277 18.6405 9.47155 18.6681 9.33877 18.6692C9.20599 18.6704 9.07431 18.6451 8.95141 18.5948C8.82852 18.5445 8.71686 18.4703 8.62297 18.3764C8.52908 18.2825 8.45483 18.1708 8.40454 18.048C8.35426 17.9251 8.32896 17.7934 8.33012 17.6606C8.33127 17.5278 8.35886 17.3966 8.41126 17.2746C8.46367 17.1526 8.53986 17.0422 8.63537 16.95L13.5854 12L8.63537 7.05C8.45321 6.8614 8.35241 6.60879 8.35469 6.3466C8.35697 6.0844 8.46214 5.83359 8.64755 5.64818C8.83296 5.46277 9.08377 5.3576 9.34597 5.35532C9.60816 5.35305 9.86076 5.45384 10.0494 5.636L15.7064 11.293Z"
      fill="#000"/>
</g>
<defs>
<clipPath id="clip0_192_172">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                        </span>
                    </div>
                    <div className="ic_gallery swiper-wrapper">
                        {
                            props.gallery.map((value, index, array) => <figure className={"swiper-slide"}>
                                <img src={value} alt="" className="ic_img"/>
                            </figure>)
                        }
                    </div>
                </div>
                <div className="ic_heading">
                    <a href={props.projectHeading.link}>
                        {props.projectHeading.heading}
                    </a>
                </div>
                <div className="ic_content">
                    {props.projectContent.map((value, index, array) => {
                        let data = parser.parseFromString(value, 'text/html');
                        return <div className="ic_content_chunk"
                                    dangerouslySetInnerHTML={{__html: data.body.innerHTML}}>
                        </div>;
                    })}
                </div>
                <div className="ic_footer">
                    {props.footer}
                </div>
            </div>
        </div>
    </> : "");
}