import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --green: #4CD62B;
    --blue: #5965E0;
    --red: #E83F5B;
    --background: #F2F3F5;
    --title: #2E384D;
  }
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
    body{
        background-color: var(--background);
        .modal{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            max-width: 500px;
            padding: 2rem 1.5rem;
            background-color: var(--background);
            
            border: 1px solid #c3c3c3;
            border-radius: 1rem;

            .close-modal{
                height: 2rem;
                position: absolute;
                top: 0;
                right: 1rem;
                font-size: 2rem;
                color: #787878;
                background-color: transparent;
            }
        }
    }

    body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
`;
