import React,{useState} from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';
import { Button,Modal } from 'antd';
function PunchIn (props) {
  const [timeStart,setTimeStart] = useState(null);
  const [image,setImage]=useState();
  function handleTakePhoto (dataUri) {
    setImage(dataUri)

    // Do stuff with the photo...
    console.log('takePhoto');
  }
 
  function handleTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }
 
  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }
 
  function handleCameraStart (stream) {
    console.log('handleCameraStart');
  }
 
  function handleCameraStop () {
    console.log('handleCameraStop');
  }
 
  const [visible,setVisible]=useState(false)
    const showModal = () => {
      setVisible(true)
    };

    const handleOk = e => {
      setVisible(false);
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      if(image)
        setTimeStart(date);
    };

    const handleCancel = e => {
      setVisible(false)
    };
  return (
      <div style={{display:'inline-block'}}>
          <Modal
            title="Basic Modal"
            visible={visible}
            onOk={()=>handleOk()}
            onCancel={()=>handleCancel()}>
            {visible && 
            <div>
            <Camera 
            onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
            onCameraError = { (error) => { handleCameraError(error); } }
            imageCompression = {0.97}
            isMaxResolution = {false}
            isImageMirror = {false}
            isSilentMode = {false}
            isDisplayStartCameraError = {true}
            isFullscreen = {false}
            sizeFactor = {0.3}
            onCameraStart = { (stream) => { handleCameraStart(stream); } }
            onCameraStop = { () => { handleCameraStop(); } }
          />
          <ImagePreview dataUri={image}/>
          </div>}
        </Modal>
        <Button onClick={()=>showModal()}>Punch In</Button>
        <h1>{timeStart}</h1>
    </div>
  );
}
 
export default PunchIn;
