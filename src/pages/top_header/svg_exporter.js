export const Setting_icon = (props) => {
    return (
        <svg className={props.className} onClick={props.onClick} width="39" height="39" viewBox="0 0 39 39" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M32.3372 21.385C32.0767 21.0885 31.933 20.7072 31.933 20.3125C31.933 19.9178 32.0767 19.5366 32.3372 19.24L34.4172 16.9C34.6464 16.6444 34.7887 16.3227 34.8238 15.9811C34.8588 15.6395 34.7847 15.2956 34.6122 14.9988L31.3622 9.37626C31.1914 9.07973 30.9314 8.84469 30.6192 8.70463C30.307 8.56457 29.9585 8.52664 29.6235 8.59626L26.5685 9.21376C26.1797 9.29408 25.775 9.22934 25.4308 9.03176C25.0865 8.83418 24.8265 8.51742 24.6997 8.14126L23.7085 5.16751C23.5994 4.84475 23.3917 4.56442 23.1147 4.36613C22.8377 4.16784 22.5054 4.06163 22.1647 4.06251H15.6647C15.3104 4.04402 14.9597 4.14202 14.6663 4.34155C14.3728 4.54108 14.1528 4.83117 14.0397 5.16751L13.1297 8.14126C13.003 8.51742 12.7429 8.83418 12.3986 9.03176C12.0544 9.22934 11.6497 9.29408 11.261 9.21376L8.12471 8.59626C7.80711 8.55138 7.48332 8.6015 7.19415 8.7403C6.90498 8.87911 6.66335 9.10038 6.49971 9.37626L3.24971 14.9988C3.07284 15.2923 2.99332 15.6343 3.02251 15.9758C3.05169 16.3172 3.18809 16.6407 3.41221 16.9L5.47596 19.24C5.73648 19.5366 5.88015 19.9178 5.88015 20.3125C5.88015 20.7072 5.73648 21.0885 5.47596 21.385L3.41221 23.725C3.18809 23.9843 3.05169 24.3078 3.02251 24.6493C2.99332 24.9907 3.07284 25.3327 3.24971 25.6263L6.49971 31.2488C6.67049 31.5453 6.93053 31.7803 7.24274 31.9204C7.55496 32.0605 7.90342 32.0984 8.23846 32.0288L11.2935 31.4113C11.6822 31.3309 12.0869 31.3957 12.4311 31.5933C12.7754 31.7908 13.0355 32.1076 13.1622 32.4838L14.1535 35.4575C14.2665 35.7939 14.4866 36.084 14.78 36.2835C15.0734 36.483 15.4241 36.581 15.7785 36.5625H22.2785C22.6191 36.5634 22.9515 36.4572 23.2285 36.2589C23.5055 36.0606 23.7132 35.7803 23.8222 35.4575L24.8135 32.4838C24.9402 32.1076 25.2003 31.7908 25.5445 31.5933C25.8888 31.3957 26.2935 31.3309 26.6822 31.4113L29.7372 32.0288C30.0722 32.0984 30.4207 32.0605 30.7329 31.9204C31.0451 31.7803 31.3052 31.5453 31.476 31.2488L34.726 25.6263C34.8985 25.3294 34.9726 24.9855 34.9375 24.6439C34.9025 24.3024 34.7602 23.9807 34.531 23.725L32.3372 21.385ZM29.916 23.5625L31.216 25.025L29.136 28.6325L27.2185 28.2425C26.0481 28.0033 24.8306 28.2021 23.7972 28.8012C22.7637 29.4003 21.9862 30.358 21.6122 31.4925L20.9947 33.3125H16.8347L16.2497 31.46C15.8757 30.3255 15.0982 29.3678 14.0647 28.7687C13.0313 28.1696 11.8138 27.9708 10.6435 28.21L8.72596 28.6L6.61346 25.0088L7.91346 23.5463C8.71288 22.6525 9.15485 21.4954 9.15485 20.2963C9.15485 19.0971 8.71288 17.94 7.91346 17.0463L6.61346 15.5838L8.69346 12.0088L10.611 12.3988C11.7813 12.638 12.9988 12.4392 14.0322 11.8401C15.0657 11.241 15.8432 10.2833 16.2172 9.14876L16.8347 7.31251H20.9947L21.6122 9.16501C21.9862 10.2995 22.7637 11.2572 23.7972 11.8563C24.8306 12.4554 26.0481 12.6542 27.2185 12.415L29.136 12.025L31.216 15.6325L29.916 17.095C29.1255 17.9867 28.689 19.1371 28.689 20.3288C28.689 21.5204 29.1255 22.6708 29.916 23.5625ZM18.9147 13.8125C17.6291 13.8125 16.3724 14.1937 15.3035 14.908C14.2346 15.6222 13.4015 16.6374 12.9095 17.8251C12.4175 19.0128 12.2888 20.3197 12.5396 21.5806C12.7904 22.8415 13.4095 23.9997 14.3185 24.9087C15.2276 25.8177 16.3857 26.4368 17.6466 26.6876C18.9075 26.9384 20.2144 26.8097 21.4021 26.3177C22.5899 25.8258 23.605 24.9926 24.3193 23.9237C25.0335 22.8548 25.4147 21.5981 25.4147 20.3125C25.4147 18.5886 24.7299 16.9353 23.5109 15.7163C22.2919 14.4973 20.6386 13.8125 18.9147 13.8125Z"
                fill={props.color}/>
        </svg>
    )
}
export const Menu_icon = (props) => {
    return (<svg className={props.className} width="39" height="39" viewBox="0 0 39 39" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 9.75C13 10.612 12.6576 11.4386 12.0481 12.0481C11.4386 12.6576 10.612 13 9.75 13C8.88805 13 8.0614 12.6576 7.4519 12.0481C6.84241 11.4386 6.5 10.612 6.5 9.75C6.5 8.88805 6.84241 8.0614 7.4519 7.4519C8.0614 6.84241 8.88805 6.5 9.75 6.5C10.612 6.5 11.4386 6.84241 12.0481 7.4519C12.6576 8.0614 13 8.88805 13 9.75ZM13 19.5C13 20.362 12.6576 21.1886 12.0481 21.7981C11.4386 22.4076 10.612 22.75 9.75 22.75C8.88805 22.75 8.0614 22.4076 7.4519 21.7981C6.84241 21.1886 6.5 20.362 6.5 19.5C6.5 18.638 6.84241 17.8114 7.4519 17.2019C8.0614 16.5924 8.88805 16.25 9.75 16.25C10.612 16.25 11.4386 16.5924 12.0481 17.2019C12.6576 17.8114 13 18.638 13 19.5ZM9.75 32.5C10.612 32.5 11.4386 32.1576 12.0481 31.5481C12.6576 30.9386 13 30.112 13 29.25C13 28.388 12.6576 27.5614 12.0481 26.9519C11.4386 26.3424 10.612 26 9.75 26C8.88805 26 8.0614 26.3424 7.4519 26.9519C6.84241 27.5614 6.5 28.388 6.5 29.25C6.5 30.112 6.84241 30.9386 7.4519 31.5481C8.0614 32.1576 8.88805 32.5 9.75 32.5ZM22.75 9.75C22.75 10.612 22.4076 11.4386 21.7981 12.0481C21.1886 12.6576 20.362 13 19.5 13C18.638 13 17.8114 12.6576 17.2019 12.0481C16.5924 11.4386 16.25 10.612 16.25 9.75C16.25 8.88805 16.5924 8.0614 17.2019 7.4519C17.8114 6.84241 18.638 6.5 19.5 6.5C20.362 6.5 21.1886 6.84241 21.7981 7.4519C22.4076 8.0614 22.75 8.88805 22.75 9.75ZM19.5 22.75C20.362 22.75 21.1886 22.4076 21.7981 21.7981C22.4076 21.1886 22.75 20.362 22.75 19.5C22.75 18.638 22.4076 17.8114 21.7981 17.2019C21.1886 16.5924 20.362 16.25 19.5 16.25C18.638 16.25 17.8114 16.5924 17.2019 17.2019C16.5924 17.8114 16.25 18.638 16.25 19.5C16.25 20.362 16.5924 21.1886 17.2019 21.7981C17.8114 22.4076 18.638 22.75 19.5 22.75ZM22.75 29.25C22.75 30.112 22.4076 30.9386 21.7981 31.5481C21.1886 32.1576 20.362 32.5 19.5 32.5C18.638 32.5 17.8114 32.1576 17.2019 31.5481C16.5924 30.9386 16.25 30.112 16.25 29.25C16.25 28.388 16.5924 27.5614 17.2019 26.9519C17.8114 26.3424 18.638 26 19.5 26C20.362 26 21.1886 26.3424 21.7981 26.9519C22.4076 27.5614 22.75 28.388 22.75 29.25ZM29.25 13C30.112 13 30.9386 12.6576 31.5481 12.0481C32.1576 11.4386 32.5 10.612 32.5 9.75C32.5 8.88805 32.1576 8.0614 31.5481 7.4519C30.9386 6.84241 30.112 6.5 29.25 6.5C28.388 6.5 27.5614 6.84241 26.9519 7.4519C26.3424 8.0614 26 8.88805 26 9.75C26 10.612 26.3424 11.4386 26.9519 12.0481C27.5614 12.6576 28.388 13 29.25 13ZM32.5 19.5C32.5 20.362 32.1576 21.1886 31.5481 21.7981C30.9386 22.4076 30.112 22.75 29.25 22.75C28.388 22.75 27.5614 22.4076 26.9519 21.7981C26.3424 21.1886 26 20.362 26 19.5C26 18.638 26.3424 17.8114 26.9519 17.2019C27.5614 16.5924 28.388 16.25 29.25 16.25C30.112 16.25 30.9386 16.5924 31.5481 17.2019C32.1576 17.8114 32.5 18.638 32.5 19.5ZM29.25 32.5C30.112 32.5 30.9386 32.1576 31.5481 31.5481C32.1576 30.9386 32.5 30.112 32.5 29.25C32.5 28.388 32.1576 27.5614 31.5481 26.9519C30.9386 26.3424 30.112 26 29.25 26C28.388 26 27.5614 26.3424 26.9519 26.9519C26.3424 27.5614 26 28.388 26 29.25C26 30.112 26.3424 30.9386 26.9519 31.5481C27.5614 32.1576 28.388 32.5 29.25 32.5Z"
                fill={props.color}/>
        </svg>
    )
}
export const Mobile_Menu_icon = (props) => {
    const {color = "black"} = props;

    return (
        <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
             viewBox="0 0 24 24" fill="none">
            <path
                d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                fill={color}/>
            <path
                d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
                fill={color}/>
            <path
                d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
                fill={color}/>
        </svg>
    )
}
export const User_icon = (props) => {
    return (<svg className={props.className} width="48" height="48" viewBox="0 0 48 48" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_17_991" style={{"mask-type": "luminance"}} maskUnits="userSpaceOnUse" x="2" y="2" width="44"
                  height="44">
                <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    fill="white" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 33L24 11L34 33M18 26H30" stroke="black" strokeWidth="4" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </mask>
            <g mask="url(#mask0_17_991)">
                <path d="M0 0H48V48H0V0Z" fill="#9747FF"/>
            </g>
        </svg>
    )
}


export const Search_icon = (props) => {
    return (<svg className={props.className} width="17" height="17" viewBox="0 0 17 17" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_947)">
                <path
                    d="M5.88768 11.1198C8.78056 11.1198 11.1257 8.7747 11.1257 5.88182C11.1257 2.98894 8.78056 0.643799 5.88768 0.643799C2.9948 0.643799 0.649658 2.98894 0.649658 5.88182C0.649658 8.7747 2.9948 11.1198 5.88768 11.1198Z"
                    stroke="black" stroke-width="0.820299" stroke-miterlimit="10"/>
                <path d="M5.87962 11.1164C2.98693 11.1164 0.641602 8.77138 0.641602 5.87842" stroke="#39B54A"
                      stroke-width="1.38602" stroke-miterlimit="10"/>
                <path d="M0.641602 5.87974C0.641602 2.98679 2.98693 0.641724 5.87962 0.641724" stroke="#FBB03B"
                      stroke-width="1.38602" stroke-miterlimit="10"/>
                <path d="M5.87866 0.641724C8.77162 0.641724 11.1167 2.98679 11.1167 5.87974" stroke="#ED1C24"
                      strokeWidth="1.38602" stroke-miterlimit="10"/>
                <path d="M11.1167 5.87842C11.1167 8.77138 8.77162 11.1164 5.87866 11.1164" stroke="#0071BC"
                      strokeWidth="1.38602" stroke-miterlimit="10"/>
                <path d="M9.55908 9.60553L16.4816 15.8733" stroke="#0071BC" strokeWidth="1.66888"
                      strokeMiterlimit="10"/>
            </g>
            <defs>
                <clipPath id="clip0_17_947">
                    <rect width="17" height="16.4461" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    );
}
export const LinkedIn_icon = (props) => {
    return (<svg className={props.className} width="25" height="25" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.6958 2.73438H4.3042C3.4375 2.73438 2.73438 3.4375 2.73438 4.3042V20.6958C2.73438 21.5625 3.4375 22.2656 4.3042 22.2656H20.6958C21.5625 22.2656 22.2656 21.5625 22.2656 20.6958V4.3042C22.2656 3.4375 21.5625 2.73438 20.6958 2.73438ZM20.6958 20.7031C9.76318 20.7007 4.29688 20.6982 4.29688 20.6958C4.29932 9.76318 4.30176 4.29688 4.3042 4.29688C15.2368 4.29932 20.7031 4.30176 20.7031 4.3042C20.7007 15.2368 20.6982 20.7031 20.6958 20.7031ZM5.62988 10.0562H8.52783V19.3774H5.62988V10.0562ZM7.08008 8.78174C8.00537 8.78174 8.75977 8.02979 8.75977 7.10205C8.75977 6.88147 8.71632 6.66305 8.63191 6.45926C8.5475 6.25547 8.42377 6.07031 8.2678 5.91433C8.11182 5.75836 7.92666 5.63463 7.72287 5.55022C7.51908 5.46581 7.30066 5.42236 7.08008 5.42236C6.8595 5.42236 6.64108 5.46581 6.43729 5.55022C6.2335 5.63463 6.04833 5.75836 5.89236 5.91433C5.73639 6.07031 5.61266 6.25547 5.52825 6.45926C5.44384 6.66305 5.40039 6.88147 5.40039 7.10205C5.39795 8.02979 6.1499 8.78174 7.08008 8.78174ZM13.2397 14.7656C13.2397 13.5498 13.4717 12.373 14.978 12.373C16.4624 12.373 16.4844 13.7622 16.4844 14.8438V19.3774H19.3799V14.2651C19.3799 11.7554 18.8379 9.82422 15.9058 9.82422C14.4971 9.82422 13.5522 10.5981 13.1641 11.3306H13.125V10.0562H10.3442V19.3774H13.2397V14.7656Z"
                fill="#5F6368"/>
        </svg>
    )
}
export const Twitter_icon = (props) => {
    return (<svg className={props.className} width="25" height="25" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.9897 5.78127C15.1982 5.78113 14.4382 6.09166 13.8733 6.64607C13.3083 7.20048 12.9836 7.95446 12.9688 8.74585L12.9397 10.3865C12.9381 10.4747 12.9179 10.5615 12.8804 10.6413C12.8429 10.7211 12.7889 10.7921 12.722 10.8495C12.6551 10.907 12.5768 10.9497 12.4922 10.9747C12.4077 10.9997 12.3187 11.0066 12.2313 10.9948L10.6043 10.7729C8.46572 10.4813 6.41572 9.49689 4.44801 7.85835C3.82614 11.3063 5.04176 13.6948 7.97197 15.5375L9.79176 16.6813C9.87808 16.7356 9.9498 16.8101 10.0007 16.8985C10.0515 16.9869 10.08 17.0864 10.0836 17.1883C10.0872 17.2902 10.0658 17.3914 10.0213 17.4832C9.97678 17.5749 9.9105 17.6544 9.82822 17.7146L8.16989 18.9271C9.15635 18.9896 10.0928 18.9459 10.8699 18.7917C15.7845 17.8104 19.0522 14.1125 19.0522 8.01252C19.0522 7.5146 17.997 5.78127 15.9897 5.78127ZM10.8855 8.70835C10.9037 7.70424 11.2177 6.7278 11.7882 5.90129C12.3587 5.07478 13.1603 4.43493 14.0927 4.06186C15.0251 3.68878 16.0469 3.59906 17.03 3.80392C18.0132 4.00878 18.9141 4.49913 19.6199 5.21356C20.3605 5.20835 20.9907 5.39585 22.3991 4.54064C22.0511 6.24898 21.8782 6.99168 21.1355 8.01148C21.1355 15.9708 16.2428 19.8427 11.2772 20.8333C7.87406 21.5125 2.92301 20.3969 1.50635 18.9146C2.22822 18.8594 5.16572 18.5438 6.86364 17.3C5.42614 16.3521 -0.290527 12.9875 3.46676 3.94377C5.23031 6.00314 7.01885 7.40418 8.83135 8.14898C10.0366 8.64377 10.3334 8.63335 10.8866 8.70939L10.8855 8.70835Z"
                fill="#5F6368"/>
        </svg>
    )
}

export const Contact_icon = (props) => {
    return (<svg className={props.className} width="28" height="28" viewBox="0 0 28 28" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.5 10.5665V19.25C3.5 20.1783 3.86875 21.0685 4.52513 21.7249C5.1815 22.3813 6.07174 22.75 7 22.75H21C21.9283 22.75 22.8185 22.3813 23.4749 21.7249C24.1313 21.0685 24.5 20.1783 24.5 19.25V8.75C24.5 7.82174 24.1313 6.9315 23.4749 6.27513C22.8185 5.61875 21.9283 5.25 21 5.25H7C6.07174 5.25 5.1815 5.61875 4.52513 6.27513C3.86875 6.9315 3.5 7.82174 3.5 8.75V10.5665ZM7 7H21C21.4641 7 21.9092 7.18437 22.2374 7.51256C22.5656 7.84075 22.75 8.28587 22.75 8.75V10.045L14 14.756L5.25 10.045V8.75C5.25 8.28587 5.43437 7.84075 5.76256 7.51256C6.09075 7.18437 6.53587 7 7 7ZM5.25 12.033L13.5852 16.52C13.7127 16.5886 13.8552 16.6245 14 16.6245C14.1448 16.6245 14.2873 16.5886 14.4148 16.52L22.75 12.033V19.25C22.75 19.7141 22.5656 20.1592 22.2374 20.4874C21.9092 20.8156 21.4641 21 21 21H7C6.53587 21 6.09075 20.8156 5.76256 20.4874C5.43437 20.1592 5.25 19.7141 5.25 19.25V12.033Z"
                fill="#5F6368"/>
        </svg>
    )
}
export const Dotted_icon = (props) => {
    return (<svg className={props.className} width="25" height="25" viewBox="0 0 25 25" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.5 5.07812C13.1472 5.07812 13.6719 4.55346 13.6719 3.90625C13.6719 3.25904 13.1472 2.73438 12.5 2.73438C11.8528 2.73438 11.3281 3.25904 11.3281 3.90625C11.3281 4.55346 11.8528 5.07812 12.5 5.07812Z"
                stroke="#4D5156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M12.5 13.6719C13.1472 13.6719 13.6719 13.1472 13.6719 12.5C13.6719 11.8528 13.1472 11.3281 12.5 11.3281C11.8528 11.3281 11.3281 11.8528 11.3281 12.5C11.3281 13.1472 11.8528 13.6719 12.5 13.6719Z"
                stroke="#4D5156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path
                d="M12.5 22.2656C13.1472 22.2656 13.6719 21.741 13.6719 21.0938C13.6719 20.4465 13.1472 19.9219 12.5 19.9219C11.8528 19.9219 11.3281 20.4465 11.3281 21.0938C11.3281 21.741 11.8528 22.2656 12.5 22.2656Z"
                stroke="#4D5156" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}
export const Sun_icon = (props) => {
    return (<svg onClick={props.onClick} width="14" height="14" viewBox="0 0 14 14" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_98_779)">
                <path
                    d="M4.09152 4.58828C3.02949 5.95328 3.04808 8.37813 4.40543 9.58016C5.94652 10.9441 8.11543 10.9298 9.47933 9.67531C11.1145 8.17031 11.0204 5.66563 9.57449 4.24703C8.1209 2.82078 5.52324 2.74641 4.09152 4.58828Z"
                    fill="#FCC11A"/>
                <path
                    d="M5.7964 4.12015C5.3764 3.93421 4.91702 4.44062 4.71687 4.78624C4.51671 5.13296 4.33077 5.81218 4.75733 5.98609C5.1839 6.1589 5.49015 5.86577 5.79749 5.35937C6.10265 4.85296 6.27655 4.33343 5.7964 4.12015Z"
                    fill="#FEE269"/>
                <path
                    d="M6.89071 2.21702C6.78899 2.40733 6.8229 2.55389 7.02524 2.60202C7.22758 2.65014 8.48649 2.85468 8.59258 2.86124C8.7468 2.87108 8.80368 2.75514 8.78508 2.62061C8.7654 2.48608 8.45805 0.601551 8.42962 0.428738C8.40118 0.255926 8.21852 0.0831131 8.04462 0.313894C7.87071 0.544676 6.96727 2.07374 6.89071 2.21702ZM10.1501 3.52514C9.95212 3.58639 9.95759 3.7078 10.0637 3.86202C10.1698 4.01624 10.9004 5.13077 10.9671 5.20843C11.0349 5.28499 11.1498 5.30468 11.246 5.18874C11.3423 5.07389 12.5432 3.38952 12.6307 3.28452C12.7751 3.11171 12.6887 2.92905 12.4677 2.98593C12.2993 3.03077 10.2748 3.48686 10.1501 3.52514ZM11.6595 6.76593C11.5173 6.68499 11.3324 6.70796 11.2843 6.89061C11.2362 7.07327 11.0251 8.39999 11.0054 8.51593C10.9857 8.63186 11.0732 8.74671 11.2165 8.71827C11.3598 8.68983 13.3438 8.39561 13.4762 8.3628C13.707 8.30483 13.7835 8.07405 13.544 7.90124C13.3887 7.78858 11.794 6.84249 11.6595 6.76593ZM10.0724 9.90936C10.2256 9.82733 10.3612 9.88968 10.3995 10.0636C10.4377 10.2364 10.861 12.0061 10.9288 12.3331C10.9627 12.4972 10.7746 12.6317 10.6215 12.5355C10.4673 12.4392 8.79602 11.2744 8.68884 11.1792C8.53462 11.0447 8.6418 10.9047 8.71727 10.8336C8.8704 10.6881 9.92805 9.98702 10.0724 9.90936ZM5.41852 10.8806C5.22493 10.862 5.16805 11.0348 5.19758 11.188C5.22602 11.3422 5.51477 13.2923 5.53446 13.4378C5.5629 13.6489 5.78493 13.7364 5.92821 13.5242C6.07149 13.312 7.06024 11.7305 7.14008 11.5817C7.28446 11.3126 7.17837 11.2547 7.03399 11.188C6.89071 11.1212 5.62087 10.9003 5.41852 10.8806ZM2.65024 8.64061C2.78477 8.41968 2.95758 8.47764 3.08337 8.68874C3.16868 8.83311 3.89055 9.80436 3.95837 9.90936C4.02618 10.0155 4.05462 10.2167 3.84352 10.2648C3.63024 10.3141 1.90977 10.7658 1.64071 10.8139C1.37165 10.862 1.21743 10.6509 1.39024 10.4201C1.49087 10.2845 2.57368 8.76639 2.65024 8.64061ZM2.28493 6.96718C2.53102 7.07655 2.64696 7.03718 2.69837 6.86108C2.76618 6.6303 2.96743 5.57264 2.97727 5.33202C2.98383 5.17561 2.9193 5.02468 2.67868 5.06296C2.43805 5.10124 0.707741 5.34296 0.486804 5.41952C0.229772 5.50921 0.248366 5.79139 0.418991 5.88108C0.621335 5.98718 2.11102 6.89061 2.28493 6.96718ZM5.27524 2.92905C5.41415 2.81858 5.37149 2.65999 5.2468 2.57358C5.12212 2.48718 3.57774 1.37046 3.38196 1.21733C3.20915 1.0828 2.99696 1.13093 3.05493 1.43827C3.09649 1.65921 3.58868 3.59296 3.62258 3.72639C3.66087 3.88061 3.7768 3.95718 3.91133 3.86093C4.04368 3.76577 5.13087 3.04499 5.27524 2.92905Z"
                    fill="#FFA722"/>
            </g>
            <defs>
                <clipPath id="clip0_98_779">
                    <rect width="14" height="14" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export const Moon_icon = (props) => {
    return (<svg onClick={props.onClick} width="12" height="12" viewBox="0 0 12 12" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.479 7.66253C10.581 7.41953 10.2895 7.21253 10.045 7.32053C9.55628 7.53505 9.02823 7.6454 8.4945 7.64453C6.402 7.64453 4.706 5.98253 4.706 3.93203C4.70523 3.2397 4.90193 2.56151 5.273 1.97703C5.415 1.75303 5.2445 1.44303 4.9845 1.50903C2.98 2.02053 1.5 3.80653 1.5 5.93103C1.5 8.45453 3.5875 10.5 6.163 10.5C8.113 10.5 9.783 9.32753 10.479 7.66253Z"
                fill="black"/>
            <path
                d="M7.80526 1.55152C7.54026 1.37452 7.22426 1.69052 7.40076 1.95552L7.71576 2.42802C7.84354 2.6196 7.91174 2.84473 7.91174 3.07502C7.91174 3.30531 7.84354 3.53044 7.71576 3.72202L7.40076 4.19452C7.22426 4.45952 7.54076 4.77552 7.80576 4.59852L8.27776 4.28352C8.46934 4.15574 8.69447 4.08754 8.92476 4.08754C9.15505 4.08754 9.38018 4.15574 9.57176 4.28352L10.0443 4.59852C10.3093 4.77552 10.6253 4.45952 10.4483 4.19452L10.1333 3.72202C10.0055 3.53044 9.93728 3.30531 9.93728 3.07502C9.93728 2.84473 10.0055 2.6196 10.1333 2.42802L10.4483 1.95552C10.6253 1.69052 10.3093 1.37452 10.0438 1.55152L9.57176 1.86652C9.38018 1.9943 9.15505 2.06249 8.92476 2.06249C8.69447 2.06249 8.46934 1.9943 8.27776 1.86652L7.80526 1.55152Z"
                fill="black"/>
        </svg>

    )
}
