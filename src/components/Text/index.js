import styled from "styled-components";

export const H1 = styled.h1`
    font-family: 'Genshin';
    font-size: 3rem;
    color: #fff;
    line-height: 4.5rem;
    text-align: ${props => props.textAlign || "left"};
    text-shadow:1px 1px 20px #ffffff38, 1px 1px 10px #ccc;
    margin-bottom: ${props => props.marginBottom || '0'};
`

export const H2 = styled.h2`
    font-family: 'Genshin';
    font-size: 2rem;
    color: #fff;
    line-height: 2.5rem;
    //text-shadow:1px 1px 20px #ffffff38, 1px 1px 10px #ccc;
    margin-bottom: ${props => props.marginBottom || '0'};
`
export const H3 = styled.h3`
    font-family: 'Genshin';
    font-weight: 500;
    font-size: 1.2rem;
    color: #fff;
    line-height: 2.5rem;
    //text-shadow:1px 1px 20px #ffffff38, 1px 1px 10px #ccc;
    display: flex;
    align-items: center;
    margin-bottom: ${props => props.marginBottom || '0'};
`

export const Text = styled.p`
    font-family: 'Tahoma';
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fff;
    margin-bottom: ${props => props.marginBottom || '0'};
`