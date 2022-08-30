import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { TextField, Grid, Stack, Typography, Button } from "@mui/material";
import IframeDisplay from "./IframeDisplay";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Header from "./Header";

function Content() {
  const apiToken =
    "MjExODBfMTY1Njk0NTEyN19hYzFkZTcwNTlhZGNmMmNiNzJlYWM5N2ZiYzE1NzlhZjM4YjdkNmZl";
  const [data, setData] = useState([]);
  const [displayVideo, setDisplayVideo] = useState("");
  const [title, setTitle] = useState("");
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top:100,behavior:'smooth'})
  };
  const [currentpage, setCurrentPage] = useState(1);
  const videosPerPage = 9;
  const indexOfLasttVideo = currentpage * videosPerPage;
  const indexOfFirstVideo = indexOfLasttVideo - videosPerPage;
  const paginatedData = data.slice(indexOfFirstVideo, indexOfLasttVideo);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.scorebat.com/video-api/v3/feed/?token=${apiToken}`)
      .then((res) => {
        console.log(res.data);
        const dataReversed=res.data.response.reverse()
        setData(dataReversed)
        // setData(res.data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mainDiv">
     <Header/>
      {displayVideo && (
        <IframeDisplay data={data} title={title} displayLink={displayVideo} setVideo={setDisplayVideo}/>
      )}

      <Grid className="content" container justifyContent="center">
        {data.length !== 0 ? (
          paginatedData.map((item) => {
            return (
              <Grid
                className="items"
                direction="row"
                justifyContent="center"
                alignItems="center"
                xs={12}
                md={4}
                container
                key={item.title}
                padding="3rem 0px"
                //  onClick={()=>window.open(item.matchviewUrl)}
                onClick={() => {
                  setDisplayVideo(item.matchviewUrl);
                  navigate("/iframe  ");
                  setTitle(item.title);
                  window.scroll({ top: "470" });
                }}
              >
                <Grid item spacing={{ xs: 1, md: 3 }}>
                  <img src={item.thumbnail} />

                  <Typography
                    maxWidth={"300px"}
                    textAlign={"center"}
                    style={{ color: "white" }}
                    variant={"h5"}
                    fontWeight="700"
                    mt={3}
                  >
                    {item.title}
                  </Typography>
                  
                </Grid>
              </Grid>
            );
          })
        ) : (
          <div class="loader"></div>
        )}
      </Grid>
      <Stack sx={{backgroundColor:'white',padding:'10px'}}justifyContent='center' alignItems="center">
        {data.length > 12 && (
          <Pagination
          variant="outlined"
          sx={{color:'white'}}
            count={Math.ceil(data.length / videosPerPage)}
            defaultPage={1}
            page={currentpage}
            onChange={paginate}
            size={"large"}
          />
        )}
      </Stack>
    </div>
  );
}

export default Content;
