import { Box, Button, Paper, Typography } from '@mui/material';

import { TextareaAutosize } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Img1 from '../img/test1.png';
import Img2 from '../img/test2.png';
import Img3 from '../img/test3.png';
import Img4 from '../img/test4.png';
import Img5 from '../img/test5.png';
import './CostumerPropertyOffer.css';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import ShareIcon from '@mui/icons-material/Share';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChairIcon from '@mui/icons-material/Chair';
import { TextField } from '@mui/material';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { useParams } from 'react-router-dom';
import { getPost } from '../api/posts';
import FinancingModal from './financing-modal';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { borderColor, width } from '@mui/system';

const CostumerPropertyOffer = () => {
  const [selectedPost, setSelectedPost] = React.useState(null);
  const { id } = useParams();
  const [showImageIndex, setShowImageIndex] = useState(-1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPlanos, setSelectePlanos] = useState(null);

  useEffect(() => {
    getPost(id).then((post) => {
      setSelectedPost(post);
    });
  }, []);


  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => setShowModal(true);

  if (!selectedPost) return '... cargando';

  return (
    <>
      <div className="container">
        <div className="box-img">
          <div className="col-first">
            <div
              className="box-image_first"
              style={{
                backgroundImage: `url(${Img1})`,
                width: '99%',
                borderRadius: '20px 0 0 20px',
                minHeight: '100%',
              }}
              onClick={() => setShowImageIndex(0)}
            ></div>
            <div
              style={{
                position: 'absolute',
                width: '360px',
                height: '50px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                marginLeft: '20px',
                top: '57%',
                boxShadow: 'rgb(124 152 167 / 20%) 3px 3px 6px',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'row',
                  padding: '10px',
                  fontSize: '20',

                  marginLeft: '22px',
                  boxShadow: '20px',
                }}
              >
                <div style={{ display: 'flex', cursor: 'pointer' }}>
                  <Button
                    style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  >
                    <VideoCameraBackOutlinedIcon
                      sx={{ marginRight: '4px' }}
                    ></VideoCameraBackOutlinedIcon>
                    <b>Videos</b>
                  </Button>
                </div>
                <div style={{ display: 'flex', cursor: 'pointer' }}>
                  <Button
                    style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  >
                    <CameraAltOutlinedIcon
                      sx={{ marginRight: '4px' }}
                    ></CameraAltOutlinedIcon>
                    <b>Fotos</b>
                  </Button>
                </div>
                <div style={{ display: 'flex', cursor: 'pointer' }}>
                  <b></b>
                  <Button
                    style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
                  >
                    <WallpaperIcon sx={{ marginRight: '4px' }}></WallpaperIcon>
                    <b>Planos</b>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-second">
            <div className="row-first">
              <div className="box-image_second">
                <img
                  className="img-second"
                  src={Img2}
                  alt="pics"
                  onClick={() => setShowImageIndex(1)}
                ></img>
              </div>
              <div className="box-image_third">
                <img
                  className="img-third"
                  src={Img3}
                  alt="pics"
                  onClick={() => setShowImageIndex(2)}
                ></img>
              </div>
            </div>
            <div className="row-first">
              <div className="box-image_four">
                <img
                  className="img-four"
                  src={Img4}
                  alt="pics"
                  onClick={() => setShowImageIndex(3)}
                ></img>
              </div>
              <div className="box-image_five">
                <img
                  className="img-five"
                  src={Img5}
                  alt="pics"
                  onClick={() => setShowImageIndex(4)}
                ></img>
              </div>
            </div>
          </div>
        </div>
        <Lightbox
          open={showImageIndex > -1}
          close={() => setShowImageIndex(-1)}
          index={showImageIndex}
          slides={[
            { src: Img1 },
            { src: Img2 },
            { src: Img3 },
            { src: Img4 },
            { src: Img5 },
          ]}
        />
        <div
          className="box-data_prop"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="offer-data"
            style={{ marginTop: '60px', marginBottom: '40px', width: '65%' }}
          >
            <div className="row-1">
              <Paper
                className="dep-data_box"
                elevation={4}
                style={{
                  padding: '20px',
                  borderRadius: '10px',
                }}
              >
                <div
                  className="sell"
                  style={{
                    fontWeight: '500',
                    fontSize: '16px',
                    color: '#000',
                    paddingBottom: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex' }}>
                    <TripOriginIcon
                      color="error"
                      sx={{ marginRight: '15px' }}
                    ></TripOriginIcon>
                    <span>Venta</span>
                  </div>
                  <Button>
                    <ShareIcon
                      color="error"
                      sx={{ cursor: 'pointer' }}
                    ></ShareIcon>
                  </Button>
                </div>
                <div
                  className="price"
                  style={{
                    fontWeight: '600',
                    fontSize: '24px',
                    color: '#000',
                    paddingBottom: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span>{selectedPost.price}</span>
                </div>
                <div
                  className="expensas"
                  style={{
                    fontSize: '14px',
                    color: '#000',
                    paddingBottom: '5px',
                  }}
                >
                  + <span>{selectedPost.expenses}</span> Expensas
                </div>
                <div
                  className="data-text"
                  style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#000',
                    margin: '10px 0',
                  }}
                >
                  <span>{selectedPost.type}</span> ap* 107M2 * 5 Ambientes *
                  Cochera *{' '}
                </div>
              </Paper>
            </div>
            <div className="row-2" style={{ marginTop: '50px' }}>
              <div className="title-section">
                <span
                  style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#000',
                    lineHeight: '26px',
                    margin: '8px 0',
                  }}
                >
                  {selectedPost.title}
                </span>
              </div>
              <div className="title-location" style={{ marginTop: '12px' }}>
                <span
                  style={{
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '22px',
                    color: '#000',
                    margin: 0,
                  }}
                >
                  {selectedPost.address}
                </span>
              </div>
              <div
                className="credit"
                style={{ marginTop: '40px', marginBottom: '50px' }}
              >
                <LightbulbCircleIcon
                  color="error"
                  sx={{ marginRight: '5px' }}
                />
                <span style={{ marginRight: '5px' }}>
                  Apto Crédito{selectedPost.fitForCredit}
                </span>
                <Button
                  onClick={handleModalOpen}
                  style={{ backgroundColor: '#346CEE', borderRadius: '10px' }}
                  variant="contained"
                >
                  Simulá tu Crédito
                </Button>
              </div>
              <div
                className="description-property"
                style={{
                  lineHeight: '25px',
                  textAlign: 'left',
                  height: 'auto',
                  fontSize: '18.5px',
                  wordWrap: 'break-word',
                }}
              >
                <span>{selectedPost.description}</span>
              </div>
            </div>
            <div className="row-3" style={{ marginTop: '50px' }}>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  margin: '0px 0px 10px',
                }}
              >
                Mirá lo que ofrece esta propiedad
              </span>
              <Accordion sx={{ marginTop: '30px' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ListAltIcon
                    style={{ marginRight: '15px', marginTop: '15px' }}
                    color="error"
                  />
                  <Typography
                    style={{
                      fontSize: '17px',
                      lineHeight: '55px',
                      fontWeight: '600',
                    }}
                  >
                    Características generales
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '40px' }}
                >
                  <Typography width={'33%'} sx={{ marginBottom: '20px' }}>
                    Cantidad de plantas: 1
                  </Typography>
                  <Typography width={'33%'}>
                    Cobertura Cochera: cubierta
                  </Typography>
                  <Typography width={'33%'}>Gimnasio</Typography>
                  <Typography width={'33%'}>Parrilla</Typography>
                  <Typography width={'33%'}>Pileta</Typography>
                  <Typography width={'33%'}>Solarium</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <DryCleaningIcon
                    style={{ marginRight: '15px', marginTop: '15px' }}
                    color="error"
                  />
                  <Typography
                    style={{
                      fontSize: '17px',
                      lineHeight: '55px',
                      fontWeight: '600',
                    }}
                  >
                    Servicios
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '40px' }}
                >
                  <Typography width={'33%'}>Laundry</Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <ChairIcon
                    style={{ marginRight: '15px', marginTop: '15px' }}
                    color="error"
                  />
                  <Typography
                    style={{
                      fontSize: '17px',
                      lineHeight: '55px',
                      fontWeight: '600',
                    }}
                  >
                    Ambientes
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ display: 'flex', flexWrap: 'wrap', marginLeft: '40px' }}
                >
                  <Typography width={'33%'} sx={{ marginBottom: '20px' }}>
                    Cocina
                  </Typography>
                  <Typography width={'33%'}>Comedor</Typography>
                  <Typography width={'33%'}>Jardín</Typography>
                  <Typography width={'33%'}>Lavadero</Typography>
                  <Typography width={'33%'}>Patio</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <Paper
            className="contact-sticky"
            style={{
              backgroundColor: '#E3EEE7',
              marginLeft: '15px',
              marginTop: '60px',
              marginBottom: '40px',
              width: '30%',
              height: '100%',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
            }}
            elevation={4}
          >
            <div
              className="form-box"
              style={{ width: '100%', marginBottom: '30px' }}
            >
              <div
                style={{
                  fontSize: '18px',
                  lineHeight: '18px',
                  fontWight: '600',
                  textAlign: 'left',
                  margin: '10px 0px',
                }}
              >
                <span>
                  <b>
                    Contactate con la inmobiliaria Batista por la propiedad en
                    Santa Fe, Santa Fe
                  </b>
                </span>
              </div>
            </div>
            <div>
              <TextField
                label="Nombre"
                sx={{ width: '45%' }}
                color="error"
              ></TextField>
              <TextField
                label="Teléfo"
                color="error"
                sx={{ width: '45%', marginLeft: '10%', marginBottom: '30px' }}
                type="number"
              >
                Teléfono
              </TextField>
            </div>
            <div>
              <TextField
                label="Email"
                sx={{ width: '100%', marginBottom: '30px' }}
                color="error"
              ></TextField>
            </div>
            <TextField
              label="Mensaje"
              variant="outlined"
              multiline
              placeholder="Mensaje"
              minRows={3}
              style={{
                height: '100px',
                borderRadius: '10px',
                width: '100%',
                marginBottom: '30px',
              }}
              color="error"
            ></TextField>

            <Button
              variant="contained"
              color="error"
              sx={{
                width: '100%',
                height: '40px',
                borderRadius: '10px',
                marginBottom: '20px',
                fontWeight: '500',
              }}
            >
              Contactar
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                width: '100%',
                height: '40px',
                borderRadius: '10px',
                marginBottom: '20px',
                fontWeight: '500',
              }}
            >
              Contactar por Whatsapp
            </Button>
            <Typography>
              Al enviar estás aceptando los{' '}
              <a href="">
                Términos y Condiciones de Uso y la Política de Privacidad
              </a>
            </Typography>
          </Paper>
        </div>
        <FinancingModal open={showModal} onClose={() => setShowModal(false)} />
      </div>
    </>
  );
};

export default CostumerPropertyOffer;
