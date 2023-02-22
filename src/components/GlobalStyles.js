import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`

  
    *{
        margin:0;
        padding: 0;
        box-sizing:border-box ;
        font-family:"Montserrat", sans-serif;
    }

    html{
        &::-webkit-scrollbar{
             width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
        }
    }

    h3{
        font-size:3rem;
        font-family:"Abril Fatface", cursive;
        font-weight: lighter;
    }
    h4{
        font-size:1.3rem;
        color:#333;
        padding: 1.5rem 0rem;
    }
    h5{
        font-size:1rem;
        line-height:200%;
        color:#696969;
    }
    a{
        text-decoration:#333;
    }
    p{
        font-size:1rem;
        line-height:200%;
        color:#696969;
    }
    img{
        display: block;
    }
    input{
        font-weight:bold;
        font-family: 'Montserrat', sans-serif ;
    }
`

export default GlobalStyles;