import { useState } from "react";
import { useDropzone } from "react-dropzone"

const ImageCustomization = () => {
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      },
    })
  
    const images = files.map((file) => (
      <div key={file.name}>
        <div>
          <img src={file.preview} style={{ width: "200px" }} alt="preview" />
        </div>
      </div>
    ))
    const handleImageDrag = () => {
        document.getElementById("imageview").style.zIndex = "5";
    }

    return(
        <div className="customize-image">
            <div className="close-container">
                <h4>You are customizing image</h4>
                <img src={require("../../assets/images/close-icon.png")} alt="close"/>
            </div>
            <button className="add-img-btn">Add image</button>
            <div {...getRootProps()}>
                <div  id="imageview" className="imageview">
                {images}
                </div>
                <label htmlFor="upload-photo" onDrag={handleImageDrag}>
                    <div className="image-input">
                        <p>Drag and drop your image here </p>
                        <span><img src={require("../../assets/images/add-img.png")} alt="add"/></span>
                        <h6>Select from your folder</h6>
                    </div>
                </label>
                <input {...getInputProps()}
                    id="upload-photo"
                    className="image-input-field"
                    type="file"
                    accept="image/*"
                    />
            </div>
            <button className="preview">Preview</button>
        </div>
    )
}
export default ImageCustomization;