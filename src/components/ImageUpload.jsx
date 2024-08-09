import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const ImageUpload = ({ onImageUpload }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleContainerClick = () => {
      fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
          onImageUpload(file);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
        <Form>
          <Form.Group className="mb-3" controlId="formImageUpload">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '12px'
              }}>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                backgroundColor: '#B0BEC5',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={handleContainerClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
            
                  <CameraAltOutlinedIcon style={{ fontSize: 24, 
                                                  color: 'white',
                                                }} />
              )}
            </div>
            {
              imageSrc ? (
                <div style={{
                  marginTop: '-16px'
                }}
                onClick={handleContainerClick}
                >
                  <Form.Label className="d-flex justify-content-center align-items-center"
                  style={{ 
                           backgroundColor: '#F8F9FB',
                           borderRadius: '85.29px',
                           color: '#1E3452',
                           boxShadow: '0px 1px 3px 0px #1018281A',
                           fontSize: '14px',
                           width: '122px',
                           height: '34.65px',
                           cursor: 'pointer'
                           }}>Change Profile</Form.Label>
                </div>
              ) : (
                <div>
                  <Form.Label className="text-center mt-3 mb-2">Upload Profile Photo</Form.Label>
                </div>
              )
            }
              
            </div>
          </Form.Group>
        </Form>
      );
    };
    
    export default ImageUpload;
