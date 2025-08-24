import { createTheme } from "@mui/material/styles";


export const Colors = {
    primary:"#5f2c3e",
    secondary:"#d1adcc",
    success: "#4CAF50",
    info:'#00a2ff',
    danger:"#FF5722",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"DDDFE!",
    inverse:"#2F3D4A",
    shaft:"#333",

    // Gray colors
    dim_gray:"#696969",
    dove_gray:"#f3f6f9",
    body_bg:"#f3f6f9",
    light_gray:"rgb(230,230,230)",

    //solid colors
    white:"#fff",
    black:"#000"
}

const theme = createTheme({
    palette:{
        primary:{
            main: Colors.primary
        },
        secondary:{
            main:Colors.secondary
        }
    },

    components:{
        MuiButton:{
            defaultProps:{
                disableRipple:true,
                disableElevation:true
            }
        }
    }
});

export default theme;