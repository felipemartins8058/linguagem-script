import { createGlobalStyle } from 'styled-components';

import Genshin from './Genshin.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Genshin';
        src: local('Genshin'), local('Genshin'),
        url(${Genshin}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    };

    body{
        background-color: #050a27;
    }

    input{
        border: 1px solid #71f4fe;
        border-radius: 5px;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: #050a27;
        color: #ccc;
    }

             
    button {
            background-image: linear-gradient(to right,#6dfbfc 0%,#004e92 51%,#004e92 100%);
            
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            border-radius: 10px;
            border: none;
            display: block;

            &:hover {
                background-position: right center;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            }
          }

          
         
`;