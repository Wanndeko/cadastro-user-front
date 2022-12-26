import React from "react";
import { Container_itens as Container } from "./styles";


function Container_itens({children,is_blur}){

    return <Container is_blur={is_blur}>{children}</Container>

}

export default Container_itens