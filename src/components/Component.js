import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DiscreteSlider from "./Slider";
import styled, { css } from "styled-components";
import SwitchLabels from "./SwitchButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

    const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 10px;
    `

const customTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                outlined: {
                    color: "yellow",
                    borderColor: 'yellow',
                }
            }
        }
    }
});


const Component = () => {
    return <Wrapper>
        <Stack spacing={3} direction="row" sx={{ margin: '10px' }}>
            <ThemeProvider theme={customTheme}>
                <Button variant="text" sx={{ color: '#ffffff' }}>Text</Button>
                <Button variant="contained" >Contained</Button>
                <Button variant="outlined" >Outlined</Button>
            </ThemeProvider>
        </Stack>
        <DiscreteSlider />
        <SwitchLabels />
    </Wrapper>
}

export default Component