import React from "react";
import * as S from "./styles";
import * as F from "../Text";

export default function Hero() {
    return (
        <>
            <S.HeroContainer>
                <S.HeroContent>
                    <F.H1 marginBottom={"3rem"}>Genshin Impact: O Leilão das Constelações</F.H1>
                    <F.Text>
                        Genshin Impact is an open-world action role-playing game developed and published by miHoYo. The game features a fantasy open world environment and action-based battle system using elemental magic and character-switching
                    </F.Text>

                </S.HeroContent>
            </S.HeroContainer>
            <F.H1 marginBottom={"0rem"} textAlign={"center"}>Characters</F.H1></>
    )
}