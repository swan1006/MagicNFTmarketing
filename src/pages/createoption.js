import { Box } from "@mui/system";
import React from "react";
const CreateOption = () => {
  return (
    <Box className="no-bottom no-top" id="content">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-12" style={{ paddingTop: "180px" }} >
            <h2 className="top-nfts col-md-12" style={{ color: '#ffc000', textAlign: 'center' }}>Change the World with your design</h2>
          </Box>
          <Box className="col-md-12">
            <Box className="container">
              <Box className="row" style={{ display: "flex", justifyContent: "center" }}>
                <Box className="col-md-12">
                  <h5 className="top-nfts" style={{ textAlign: "center", fontSize: "30px" }}>Select Option</h5>
                </Box>
                <Box className="col-md-4 col-xs-12" style={{display: 'flex', justifyContent: 'center'}}>
                  {/* <p>Select Option</p> */}
                  <a href="/createself" className="opt-create" style={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                      <img src="assets/images/misc/yourself.png" alt="" />
                      <h3>YOUR SELF</h3>
                    </div>
                  </a>
                </Box>
                <Box className="col-md-4 col-xs-12" style={{display: 'flex', justifyContent: 'center'}}>
                  <a href="/create" className="opt-create" style={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                      <img src="assets/images/design/you-desingn-logo.png" alt="" />
                      <h3>DESIGN NOW</h3>
                    </div>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default CreateOption