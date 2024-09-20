import {Stack, styled, Switch, Typography} from "@mui/material";
import './GenerativeAi.scss';

export const GenerativeAi = () => {
    return (<>
            <div className="generative_ai">
                <Stack className="col">
                    <Typography sx={{
                        fontSize: 14,
                        color: "#918e91",
                        fontFamily: "Inter"
                    }}>
                        Generative AI is Experimental
                    </Typography>
                    <Stack direction={"row"} py={2}>
                        <MaterialUISwitch/>
                        <MaterialUISwitch/>
                    </Stack>
                    <Stack width={"60%"}>
                        <Typography sx={{
                            fontSize: 14,
                            fontFamily: "poppins",
                            pb: 2
                        }}>
                            Abhinandan Singla is a Computer Engineer from India. He is a passionate programmer and a
                            Machine Learning enthusiast. He is currently working as a Lead Software Engineer at
                            Eip-Solutions.
                        </Typography>
                        <Stack>
                            <div className="gnrtv_heading">
                                <Typography sx={{
                                    fontSize: 16,
                                    fontFamily: "inter",
                                    fontWeight: "bold",
                                    pb: 2
                                }}>Generative AI is Experimental</Typography>
                            </div>
                            <ul className="generative_list">
                                <li className="gnrtv_li">He is pursuing his bachelor in 4th year from Thapar institute
                                    of
                                    enginerring and technology.
                                </li>
                                <li className="gnrtv_li">

                                    He has done diploma in computer science and engineering in thapar polytechnic
                                    college, patiala.
                                </li>
                                <li className="gnrtv_li">
                                    He has done his schooling from Paradise school, patiala.
                                </li>
                            </ul>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack width={50}>

                </Stack>
            </div>
        </>
    );
}
const width = 100;
const MaterialUISwitch = styled(Switch)(({theme}) => ({
    width: width,
    height: 50,
    padding: 6,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        top: '50%',
        left: 10,
        transform: "translateY(-50%)",
        '&.Mui-checked': {
            left: width - 42,
            color: '#fff',
            '& .MuiSwitch-thumb:before': {
                content: "'En'",
                fontFamily: 'Poppins',
                fontWeight: '600',
                color: '#b7ddfd',
                fontSize: 12,
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: '34%',
                top: '28%',
            },
            '& + .MuiSwitch-track:before': {
                content: '"हिं"',
                position: 'absolute',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                left: '30%',
                fontSize: 12,
                fontFamily: 'Poppins',
                fontWeight: '600',
                color: '#035faf',

            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#0f69be' : '#aed4fa',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(3,95,175,0.29)' : '#063a9a',
        width: 32,
        height: 32,
        '&::before': {
            content: "'हिं'",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '36%',
            top: '34%',
        },
    },
    '& .MuiSwitch-track:after': {
        content: '"En"',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        left: '70%',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: '600',
        color: '#035faf',

    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#98c9f6' : '#a9cff6',
        borderRadius: 50,
    },
}));
