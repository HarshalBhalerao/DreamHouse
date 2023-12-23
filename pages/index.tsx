import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid, IconButton, Tooltip } from '@mui/material';
import NavBar from "./appbar";
import ListHouse from "./listHouse";

// Community interface
interface Community {
  id: string,
  name: string,
  imgUrl: string,
  group: string
}

// Home interface
interface Home {
  id: string,
  communityId: string,
  price: number,
  area: number,
  type: string
}

/**
 * Index (Main Page)
 * @description The main landing page of the website.
 * @returns 
 */
export default function Index() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Hooks to store info from APIs
  const [communities, setCommunities] = useState<Community[]>();
  const [homes, setHomes] = useState<Home[]>();

  // Default image used when image does not exist or query results in 404 status code
  const defaultImageUrl = "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  // On 
  useEffect(() => {
    const getItems = async () => {
      // Error handling try-catch statement
      try{
        // Fetch Info
        const communityRes = await fetch('api/communities');
        const homeRes = await fetch('api/homes');

        // Store
        setCommunities(await communityRes.json());
        setHomes(await homeRes.json());

      } catch(error){
        console.log(error)
      }
    }
    getItems();
    
  }, []);
  
  /**
   * calculateAvgPrice method
   * @description Get the average price of the different house types from that community
   * @param community 
   * @param homes 
   * @returns Average Price
   */
  function calculateAvgPrice(community: Community, homes: Home[]){
    const id: string = community.id;
    let count = 0
    let totalPrice = 0
    
    // Iterate through each home
    for (let i = 0; i < homes?.length; i++) {
      const home = homes[i]
      const communityId: string = home.communityId;
      // When communityIds are similar, add it to total price and increment count
      if(id === communityId){
        count++;
        totalPrice += home.price
      }
    }
    // Returns Average price
    return (totalPrice/count);
  }

  /**
   * displayPrice function
   * @description Helps in rendering proper avg price on screen. If avgPrice does not exist then returns "-"
   * @param avgPrice 
   * @returns string
   */
  const displayPrice = (avgPrice: number) => {
    if(avgPrice){
      return "$" + avgPrice
    } else{
      return "-"
    }
  }

  /**
   * displayImage function
   * @description Returns imgUrl string, if it does not exist then returns defaultImage
   * @param imgUrl 
   * @returns string
   */
  const displayImage = (imgUrl: string) => {
    if(imgUrl){
      return imgUrl
    } else{
      return defaultImageUrl
    }
  }

  /**
   * disableRipple function
   * @description Returns true when price is "-" (i.e. NULL). Used to disable rippleeffect on CardActionArea component
   * @param price 
   * @returns string
   */
  const disableRipple = (price: string) => {
    if(price == "-"){
      return true
    }
  }

  return (
    <div>
      <NavBar children={undefined} />
      <Box sx={{width: '100%'}} >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 24 }}>
            {communities?.sort((a, b) => (a.name).localeCompare(b.name))?.map((item) => ( // Sort alphabetically
              <Grid key={item.id} item xs={6}>
                <Card sx={{ maxWidth: 345, borderRadius: 6 }} onClick={handleOpen}>
                  <CardActionArea //Disable touch ripple when price is NULL
                    disableTouchRipple={disableRipple(displayPrice(Math.trunc(calculateAvgPrice(item, homes))))}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={displayImage(item.imgUrl)}
                      alt={item.name}
                      // On 404 status code, render defaultImageUrl
                      onError={error => { error.currentTarget.src = defaultImageUrl; } } />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={8}>
                          <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.group}
                          </Typography>
                        </Grid>
                        <Grid item xs={5} md={3}>
                          <Typography variant="h5" align="right">
                            {displayPrice(Math.trunc(calculateAvgPrice(item, homes)))}
                          </Typography>
                          <Typography align="right">
                            <ListHouse community={item} home={homes} hide={disableRipple(displayPrice(Math.trunc(calculateAvgPrice(item, homes))))} />
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  )
}
