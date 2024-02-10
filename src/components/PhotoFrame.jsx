import React, { useState } from "react";
import EasyCrop from "./EasyCrop";
import "react-image-crop/dist/ReactCrop.css";

const PhotoFrame = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [openCrop, setOpenCrop] = useState(null);
//   const [file, setFile] = useState(null);

  async function photoHandler(e) {
    const fileImage = e.target.files[0];
    
    if (fileImage) {
    //   setFile(fileImage);
      setImageUrl(URL.createObjectURL(fileImage));
      setOpenCrop(true);
    }
  }



  

  return !openCrop ? (
    <div className="container my-5">
      <div className="card frameHeader">
        <div className="card-header">
          <h1 className="text-light text-center fw-bold">
            শুভেচ্ছা–কথা <br />
            NDF-BD কে জানাতে পারেন <br />
            আপনার শুভেচ্ছা-কথা
          </h1>
        </div>
      </div>

      <div className="row my-5 justify-content-end align-items-start">
        <div className="col-lg-4 col-sm-10 col-md-12 pt-5">
          <div className="card shadow">
            <div className="card-body">
              <h4 className="fw-semibold text-center">
                আপনার ছবি আপলোড করে ছবিটি ডাউনলোড করে শেয়ার করুন।
              </h4>
              <form action="#">
                <div className="mb-3">
                  <label htmlFor="" className="form-label fs-5 fw-lighter">
                    আপনার ছবি দিন
                  </label>
                  <input
                    onChange={photoHandler}
                    type="file"
                    accept="image/*"
                    className="form-control"
                    name="myImage"
                    id="myImage"
                    placeholder=""
                    // style={{ display: "none" }}
                  />
                </div>

                <div className="mb-3 d-none">
                  <label htmlFor="" className="form-label">
                    আপনার নাম লিখুন (বাংলায়)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    aria-describedby="helpId"
                    placeholder="নাম (বাংলায়)"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-sm-12 col-md-12">
          <div className="card w-75 m-auto">
            <div className="card-body shadow h-100">
              <div className="photo-frame">
                <img className="myPic border-0" src={imageUrl} alt="" />
                {/* <img className="myPic border-0" src={file} alt="" /> */}

                <img
                  className="phtooFrame w-100"
                  src="./img/Facebook-Frame.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-10 m-auto py-3">
            <button className="btn w-100">Download</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container h-75 w-75">
      <EasyCrop {...{ imageUrl, setOpenCrop, setImageUrl }} />
    </div>
  );
};

export default PhotoFrame;
