import styled from "styled-components";

export const Button = styled.button`

background:${props => props.is_back ? 'transparent' : 'rgba(0, 0, 0, 0.8)'} ;
border-radius: 14px;
width: 342px;
height: 74px;
margin-top: 130px;
color: #FFFFFF;
font-weight: 700;
font-size: 17px;
line-height: 28px;
border:${props => props.is_back ? 'solid 1px;' : 'none' } ;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 15px;
&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.4;
}
img{
    transform: ${props => props.is_back && 'rotateY(180deg)' };
}


`
