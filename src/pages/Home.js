import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Colors } from "../components/theme";
import ButtonBase from '@mui/material/ButtonBase';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate("");

  const handleAvailable = () => {
    navigate('/catalog')
  }

  const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '60px 10px',
    background: Colors.white,
  }));

  const BannerImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '500px',
  }))

  const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding: '40px'
  }));

  const BannerTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    fontSize: '42px',
    marginBottom: '20px',
    color:"rgb(32, 105, 189)"
  }));

  const BannerDescription = styled(Typography)(() => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",

    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: '1.5em',
    }
  }));

  const images = [
    {
      url: 'images/products/product4.png',
    },
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  });

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
  }));

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.black,
    opacity: 0.4,
  }));

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
  }));

  return (
    <BannerContainer width={'90%'}>
      <BannerContent>
        <Typography variant="h6">Huge Collections</Typography>
        <BannerTitle >New Collections</BannerTitle>
        <BannerDescription variant="subTitle">
          “Honestly, shopping beats therapy any time. It costs the same and you get a dress out of it."
          “If you can’t stop thinking about it… buy it!”
        </BannerDescription>
        <BannerImage src="/images/mainProducts/banner1.png" style={{ width: '100%', height: '100%' }} />{images.map((image) => (

          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}

          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
            <Button onClick={handleAvailable} variant="contained">Shop Now</Button><br />
          </ImageButton>
        ))}
      </BannerContent>

    </BannerContainer>
  )
}
