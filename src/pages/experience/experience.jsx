import './Page.css';
import img from '../../assets/social media icons/skill-icons_twitter.svg';
import twitter from '../../assets/social media icons/skill-icons_twitter.svg';
import linkedin from '../../assets/social media icons/mdi_linkedin.svg';
import instagram from '../../assets/social media icons/skill-icons_instagram.svg';
import github from '../../assets/social media icons/jam_github.svg';
import gmail from '../../assets/social media icons/logos_google-gmail.svg';
import nama from './assets/experiences/image 9.png';
import habeto from './assets/experiences/image 8.png';
import jp from './assets/experiences/image 10.png';
import rozjar from './assets/projects/Group 66.png';
import spinger from './assets/research/image 3.png';
import sih1 from './assets/achievement/sih/Rectangle 20.png';
import sih2 from './assets/achievement/sih/Rectangle 21.png';
import uia1 from './assets/achievement/uia/Rectangle 20.png';
import uia2 from './assets/achievement/uia/Rectangle 21.png';

export const Page = () => {

    let experiences = [
        {
            profile_icon: habeto,
            profile_heading: "HabEato",
            profile_sub_heading: 'https://habeato.in',
            experience_name: "Software Developer Intern",
            experience_description: "Worked as a Software Developer Intern at HabEato and handled the app development of their app through flutter. It was a health-related app. with features to help people in their dieting practices and recommend the best calorie combinations. My job was to make the entire Front-end part and integrate an AWS API into the project.",
            place_and_time: "Remote | Oct 2021 to Dec 2021"
        }, {
            profile_icon: nama,
            profile_heading: "Namma Mechanics",
            profile_sub_heading: 'https://play.google.com/store/apps/details?id=cpm.namma.mechanics.namma_mechanics',
            experience_name: "Software Developer Intern",
            experience_description: "Worked with a team of interns to create an application that world rival Urban Clap and was planned to launch in July 2021 but due to differences in the terminology of founders, the app is put on indefinite hold but during this time we learned how to work for a team and gained team management skills.",
            place_and_time: "Remote | Jun 2021 - July 2021"
        }, {
            profile_icon: jp,
            profile_heading: "JPMORGAN",
            profile_sub_heading: 'https://www.jpmorganchase.com',
            experience_name: "Software Engineering Virtual Experience program",
            experience_description: "A Virtual Experience of the Software Engineering Field and how it is to work with JPMorgan Chase Co. Tasks Included: 1. Establishing Financial data feeds. 2. Front-End web development 3.Data Visualization with Perspective.",
            place_and_time: "Remote | Mar 2023 to Mar 2023"
        },
    ]
    let profile_icons = [{
        "icon": linkedin, link: 'https://www.linkedin.com/in/abhinandansingla/'
    }, {
        "icon": twitter, link: 'https://twitter.com/D_Singla'
    }, {
        "icon": instagram, link: 'https://www.instagram.com/stories/_abhi_singla_'
    }, {
        "icon": github, link: 'https://github.com/AbhinandanSingla'
    }, {
        "icon": gmail, link: 'mailto:abhinandansingla48@gmail.com'
    }]
    let projects = [
        {
            project_name: "Rozjar",
            project_description: "Rojgar provides job recommendations based on resumes and job profiles. It also gives data about the match percentage of a job with your skill level. This project won the Smart India Hackathon (Problem No: NS1223 ).",
            project_img: rozjar,
            active: true,
            project_link: "https://github.com/AbhinandanSingla/job_portal"
        }, {
            project_name: "FARMA-HELP",
            project_description: "Did a project named Farma-Help, used to determine soil moisture level and predict soil Moisture forthe next 5 days using pictures and weather condition information.Image processing and CNN models with 92% accuracy are used in this project. This project won the UNESCO India-Africa Hackathon (Agriculture Problem Statement no: AGRI14).",
            active: true,
            project_link: "https://github.com/AbhinandanSingla/unseco"
        }, {
            project_name: "WarrantyVerse ",
            project_description: "Its main functionality is to mint a warranty in NFT. We can sell the warranty NFT, and its primary advantage is to increase the authenticity of our product warranty. Made it to Flipkart Grid 4.0 pre-finals.",
            active: true,
            project_link: "https://github.com/AbhinandanSingla/WarrantyVerse-Ethereum"
        },
    ]
    let research = [
        {
            reseach_title: "Content Analysis of Twitter conversations on Turkey – ’Syria Earthquakes’",
            description: "This Research paperis selected among the top 20% papers in ICDAM 2023, London . It will be published in Springer afterthe ICDAM Conference, London",
            img: spinger,
            place: "Remote | Oct 2021 to Dec 2021",
            link: ""
        }
    ]
    let achievements = [{
        imgs: [uia1, uia2],
        title: "UNESCO India Africa Hackathon 2022",
        description: "It was an International Hackathon organized by the Government of India. Secured first position in UNESCO India-Africa Hackathon and won a cash prize of Rupees 3,00,000/- . The Vice president and Education minister of India gave the prize money in a prestigious ceremony.",
        place: "Noida | Nov 2022",
        link: ""
    }, {
        imgs: [sih1, sih2],
        description: "It was a National hackathon Organized by the Government of India. \n" +
            "Won first place and a cash prize of rupees 1,00,000 in Smart India Hackathon 2022",
        title: "Smart India Hackathon 2022",
        place: "Andhra pradesh | Aug 2022",
        link: ""
    }]
    let about = [{
        title: 'University',
        value: 'Thapar institute of engineering and technology',
    }, {
        title: 'Course',
        value: 'Bachelor of Engineering',
    }, {
        title: 'Majors',
        value: 'Fullstack, Flutter and Ml/DL',
    },]

    let skills = [{
        'title': 'Programming\n' +
            'Languages',
        'value': 'C,Java,Python,Dart,Javascript,Solidity',
    }, {
        'title': 'Frameworks/\nTechnologies   ',
        'value': 'Mongodb, ExpressJs, ReactJs, NodeJs, jQuery, SQL, Flutter,Firebase, Springboot, Graphql, Deep-Learning, Machine-learning, NLP, Blockchain.\n',
    }, {
        'title': 'Others',
        'value': 'Problem-solving, Management, Leadership skills, Writing skills, Interpersonal and Analytical skills, Teamwork, Adaptability, Time management',
    },]
    return <>
        <div className="page" id={"experience"}>
            <div className="col_1">
                <div className="experience_container">
                    {
                        experiences.map((d, index) => <div className="experience_card">
                                <div className="top_container">
                                    <img src={d.profile_icon} alt=""/>
                                    <div className="heading_container">
                                        <div className="main_heading">
                                                {d.profile_heading}
                                        </div>
                                        <div className="sub_heading">
                                            <a href={d.profile_sub_heading}>
                                                {d.profile_sub_heading}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card_heading">
                                    {d.experience_name}
                                </div>
                                <div className="card_content">{d.experience_description}
                                </div>
                                <div className="time_container">
                                    {d.place_and_time}
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="projects" id={"projects"}>
                    <div className="heading_container">
                        <div className="heading">
                            Projects
                        </div>
                        <div className="sub_heading">
                            showing Result for project
                        </div>
                    </div>
                    <div className="project_container">
                        <div className="project1">
                            <figure><img src={projects[0].project_img}
                                         alt=""/></figure>
                            <div className="project_heading">
                                <a href={projects[0].project_link}>{projects[0].project_name}</a>
                            </div>
                            <div className="project_description">
                                <a href={projects[0].project_link}>{projects[0].project_description}</a>
                            </div>
                        </div>
                        <div className="project2">
                            <div className="project_heading">
                                <a href={projects[1].project_link}>{projects[1].project_name}</a>

                            </div>
                            <div className="project_description">
                                <a href={projects[1].project_link}>{projects[1].project_description}</a>
                            </div>
                        </div>
                        <div className="project3">
                            <div className="project_heading">
                                <a href={projects[2].project_link}>{projects[2].project_name}</a>

                            </div>
                            <div className="project_description">
                                <a href={projects[2].project_link}>{projects[2].project_description}</a>
                            </div>
                        </div>
                    </div>
                    <div className="more">
                        <div className={'more_line'}/>
                        <div className="more_button">
                            View More
                        </div>
                    </div>
                </div>
                <div className="research_works" id={"research"}>
                    <div className="heading_container">
                        <div className="heading">
                            Research Works
                        </div>
                        <div className="sub_heading">
                            Showing Results for Research works
                        </div>
                    </div>
                    {research.map((v, index) => <div className="experience_card">
                        <div className="card_heading">
                            {v.reseach_title}
                        </div>
                        <div className="card_content">
                            <div className={"card_left"}>{v.description}
                            </div>
                            <div className={'card_right'}>
                                <figure>
                                    <img src={v.img} alt=""/>
                                </figure>
                            </div>
                        </div>
                        <div className="time_container">

                            {
                                v.place
                            }                        </div>
                    </div>)}
                </div>
                <div className="achievement">
                    <div className="heading_container">
                        <div className="heading">
                            Achievement
                        </div>
                        <div className="sub_heading">
                            Showing Results for Achievement
                        </div>
                    </div>
                    {achievements.map((v, index) => {
                        let style = index !== 0 ? {padding: "2rem 0"} : {};
                        return (
                            <div className="achievement_container" style={style}>
                                <div className="achievement_images">
                                    {v.imgs.map((d, index) => <figure>
                                        <img src={d} alt=""/>
                                    </figure>)}
                                </div>
                                <div className="achievement_heading">
                                    {v.title}                                </div>
                                <div className="achievement_description">{v.description}</div>
                                <div className="achievement_sub_heading">
                                    {
                                        v.place
                                    }                                </div>
                            </div>)
                    })}
                    <div className="more">
                        <div className={'more_line'}></div>
                        <div className="more_button">
                            View More
                        </div>
                    </div>

                </div>

            </div>

            <div className="col_2">
                <div className="aboutus">
                    <div className="heading">
                        About
                    </div>
                    <div className="about_container">
                        {
                            about.map((v, index) => <div className={'row'}>
                        <span className="cell">
                            {v.title} :
                        </span>
                                    <span className="cell cell_value">
                            {v.value}
                        </span>
                                </div>
                            )
                        }
                    </div>

                </div>
                <div className="aboutus">
                    <div className="heading">
                        Skills
                    </div>
                    <div className="about_container">
                        {
                            skills.map((v, index) => <div className={'row'}>
                        <span className="cell_label ">
                           {v.title} :
                        </span>
                                    <span
                                        className="cell cell_value">{v.value}                       </span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="aboutus">
                    <div className="heading">
                        Profiles
                    </div>
                    <div className="about_container">
                        <div className={'row'}>
                            <div className="profile_logos">
                                {
                                    profile_icons.map((d, index) => <a href={d.link}>
                                            <figure><img src={d.icon} alt=""/></figure>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}