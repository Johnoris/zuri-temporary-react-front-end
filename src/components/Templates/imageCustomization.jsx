import { useState } from "react";
import defaultimage from '../../assets/images/portfolio-template-default.png';

const ImageCustomization = () => {
  const [{src ,alt }, setImage] = useState({
    src : defaultimage,
    alt : 'add-img'
  })
  const handleImg = (e) => {
    if(e.target.files[0]) {
        setImage({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name
        });    
    }  
    document.getElementById('image-preview').style.display = 'block'; 
    document.getElementById('image-input').style.display = 'none'; 
  }
  const handleAddImg = () => {
    document.getElementById("portfolio-img").setAttribute ("src", src)
  }
  const handleClose = () => {
    document.getElementById("customize-image-bar").style.display = "none"
}
    return(
        <div className="customize-image" id="customize-image-bar">
            <div className="close-container">
                <h4>You are customizing image</h4>
                <img onClick={handleClose} src={require("../../assets/images/close-icon.png")} alt="close"/>
            </div>
            <button className="add-img-btn" onClick={handleAddImg}>Add image</button>
            <div>
                <div className="image-preview" id="image-preview">
                  <img src={src} alt={alt} />
                </div>
                <label htmlFor="upload-photo" id="image-input">
                    <div className="image-input">
                        <p>Drag and drop your image here </p>
                        <span><img src={require("../../assets/images/add-img.png")} alt="add"/></span>
                        <h6>Select from your folder</h6>
                    </div>
                </label>
                <input
                    onChange={handleImg}
                    id="upload-photo"
                    className="image-input-field"
                    type="file"
                    accept="image/*"
                    />
            </div>
            <button onClick={handleClose} className="preview">Preview</button>
        </div>
    )
}
export default ImageCustomization;