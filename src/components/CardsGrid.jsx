import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const CardsGrid = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(products);
  return (
    <Container>
      <Typography variant="h3" mt={3} sx={{ color: "salmon" }} align="center">
        {" "}
        NEW PRODUCTS
      </Typography>
      <Grid container mt={4} spacing={2}>
        {products.map((a) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  maxWidth: 450,
                  height: 550,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  //position:"relative"// ikinci yolu
                }}
              >
                <CardMedia
                  sx={{ height: 200, maxWidth: 400 }}
                  image={a.images[0]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {a.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {a.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stock:{a.stock}
                  </Typography>
                </CardContent>
                <CardActions
                //sx={{position:"absolute",bottom:0}}//ikinci yol olursa
                >
                  <Button
                    size="small"
                    variant="contained"
                    color="grey"
                    sx={{
                      color: "salmon",
                      height: 43,
                  
                    }} 
                    
                    startIcon={<ShareIcon sx={{ color: "salmon" }} />}
                  >
                    Share
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="grey"
                    sx={{
                      color: "salmon",
                      height: 43,
                      
                    }}
                    startIcon={<DeleteOutlineIcon sx={{ color: "salmon" }} />}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default CardsGrid;
