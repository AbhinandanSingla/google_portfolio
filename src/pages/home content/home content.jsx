import '../home content/homecontent.css'
import img1 from '../home content/Assets/images/Rectangle 4.png';
import img2 from '../home content/Assets/images/Rectangle 5.png';
import img3 from '../home content/Assets/images/Rectangle 6.png';
import img4 from '../home content/Assets/images/Rectangle 11.png';
import {Linkedin_icon} from "../../assets/social media icons/svg_exporter";
import {Dotted_icon} from "../top_header/svg_exporter";
import {Page} from "../experience/experience";
import instagram from '../home content/Assets/images/Rectangle 9.png';
import {useEffect} from "react";
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Overview = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            loop: true,
            slidesPerView: 3,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },
            spaceBetween: 20,

        });

    })
    return (<>
        <div className="home_content ">
            <div className="max_width">
                <div className="search_result_heading">
                    Showing result for Abhinandan Singla
                </div>
                <div className="overview_container">
                    <div className="home_bar">
                        <div className="user_heading">
                            <div className="main_heading">
                                Abhinandan Singla
                            </div>
                            <div className="sub_heading">
                                Indian Computer Engineer
                            </div>
                        </div>
                        <ul className="tab_section">
                            <li className="tab tab_active">Overview</li>
                            <li className="tab"><a href="#experience">Experience</a></li>
                            <li className="tab"><a href="#projects">Projects</a></li>
                            <li className="tab"><a href="#research">Research</a></li>
                        </ul>
                    </div>

                    <div className="home_content_container">
                        <div className="mobile_left_container">
                            <swiper-container>
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"><img className={'inherit'} src={img1} alt=""/>
                                        </div>
                                        <div className="swiper-slide"><img className={'inherit'} src={img1} alt=""/>
                                        </div>
                                        <div className="swiper-slide"><img className={'inherit'} src={img1} alt=""/>
                                        </div>
                                        <div className="swiper-slide"><img className={'inherit'} src={img1} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </swiper-container>
                        </div>
                        <div className="left_container">
                            <div className="tl1">
                                <figure>
                                    <img className={'inherit'} src={img1} alt=""/>
                                </figure>
                            </div>
                            <div className="tl2">
                                <figure>
                                    <img className={'inherit'} src={img2} alt=""/>
                                </figure>
                            </div>
                            <div className="tl3">
                                <figure>
                                    <img className={'inherit'} src={img3} alt=""/>
                                </figure>
                            </div>
                        </div>
                        <div className="middle_container">
                            <figure>
                                <img className={"inherit"} src={img4} alt=""/>
                            </figure>
                            <div className="middle_content">
                                <div className={'middle_linkedin_icon'}>
                                    <span className={'center'}><Linkedin_icon/> LinkedIn</span>
                                    <span><Dotted_icon className={"middle_dotted_icon"}/> </span>
                                </div>
                                <div className={"m_linkedin_heading"}>
                                    Abhinandan Singla(@abhinandansingla)
                                </div>
                                <span className={"m_content"}>   UNESCO India-Africa International hackathon 22’ Winner || SIH22’ Winner || Finalist of
                                Luxembourg India International Hackathon || Final year student in Thapar institute of
                                engineering and technology
                           </span></div>
                        </div>
                        <div className="right_container">
                            <div className="tr1">
                                <div className="main_heading ">
                                    Age
                                </div>
                                <div className="sub_heading">24 years</div>
                            </div>
                            <div className="tr2">
                                <div className="main_heading ">
                                    Star Project
                                </div>
                                <div className="sub_heading">Farma-Help</div>
                            </div>
                            <div className="tr3">
                                <figure><img src={instagram} alt=""/></figure>
                            </div>
                        </div>
                    </div>


                </div>
                <Page/>

            </div>
        </div>
    </>)
}