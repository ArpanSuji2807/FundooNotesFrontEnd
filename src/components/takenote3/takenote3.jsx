import React from "react";
import './takenote3.css'
//import Pin from '../assets/pin.png'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorPopper from "../colorpopper/colorpopper";
import { ArchiveNotes, TrashNotes, UpdateColorNotes, UpdateNotes } from "../../service/dataservice";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextareaAutosize } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Takenote3 = (props) => {
    const [note, setNote] = React.useState({})
    const [open, setOpen] = React.useState(false);
    const handleOpen = (note) => {
        setNote({ ...note, Title: note.Title, Description: note.Description });
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const changeTitle = (event) => {
        setNote({ ...note, Title: event.target.value })
    }

    const changeDescription = (event) => {
        setNote({ ...note, Description: event.target.value })
    }

    const noteUpdate = () => {
        UpdateNotes(note, note._id).then((res) => {
            console.log(res);
            props.GetNote()
        }).catch((error) => {
            console.log(error);
        })
        handleClose()
    }

    const takeColorpopper = (color) => {
        let data = {
            Title: props.note.Title,
            Description: props.note.Description,
            Color: color
        }
        UpdateColorNotes(data, props.note._id).then((res) => {
            console.log(res)
            props.GetNote()
        }).catch((err) => {
            console.log(err);
        })
    }

    const takeArchive = () => {
        ArchiveNotes(props.note._id).then((res) => {
            console.log(res);
            props.GetNote()
        }).catch((err) => {
            console.log(err);
        })
    }

    const takeTrash = () => {
        TrashNotes(props.note._id).then((res) => {
            console.log(res);
            props.GetNote()
        }).catch((err) => {
            console.log(err);
        })
    } 
    return (<div>
        <div className="noteBody">
            <div style={{ backgroundColor: props.note.Color }} className="firstNotes">
                <Tooltip title="Select note">
                    <CheckCircleRoundedIcon id='note3_select-note' />
                </Tooltip>
                <div onClick={() => handleOpen(props.note)} className="notesTitle">
                    <div style={{ backgroundColor: props.note.Color }} className="notesTitle1">{props.note.Title}</div>
                    <div className="notesPin">
                        <Tooltip title="Pin note">
                            <IconButton id='note3_pin-note' aria-label="pin-note" size='small'>
                                <PushPinOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div onClick={() => handleOpen(props.note)} className="notesDescription">
                    <div style={{ backgroundColor: props.note.Color }} className="notesDescription1" >{props.note.Description}</div>
                </div>
                <div style={{ backgroundColor: props.note.Color }} className="notesIcon">
                    <Tooltip title="Remind me">
                        <IconButton className="icons">
                            <AddAlertOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Collaborator">
                        <IconButton className="icons">
                            <PersonAddAltOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Background options">
                        <IconButton className="icons">
                            <ColorPopper takeColorpopper={takeColorpopper} action='update' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Add Image">
                        <IconButton className="icons">
                            <InsertPhotoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Archive">
                        <IconButton className="icons">
                            <ArchiveOutlinedIcon onClick={takeArchive} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton className="icons">
                            <DeleteOutlineOutlinedIcon onClick = {takeTrash} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={{ backgroundColor: props.note.Color }} className="modelInnerBox" sx={style}>
                <div className="modal_box1">
                    <div id="modal-modal-title" variant="h6" component="h2">
                        <TextareaAutosize className="modelInput"   type='text' defaultValue={note.Title} style={{ backgroundColor: props.note.Color }} onChange={changeTitle}></TextareaAutosize>
                    </div>
                    <div className="modal_box1_pin-icon">
                        <Tooltip title="Pin note">
                            <IconButton id='modal_pin-note' aria-label="pin-note" size='small'>
                                <PushPinOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className="modal_box2" id="modal-modal-description">
                    <TextareaAutosize className="modelInput" type='text' defaultValue={note.Description} style={{ backgroundColor: props.note.Color }} onChange={changeDescription}></TextareaAutosize>
                </div>
                <div className="modal_box3">
                    <div className="modal_icon-group">
                        <Tooltip title="Remind me">
                            <IconButton className="icons3">
                                <AddAlertOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Collaborator">
                            <IconButton className="icons3">
                                <PersonAddAltOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Background options">
                            <IconButton className="icons3">
                                <ColorPopper takeColorpopper={takeColorpopper} action='update' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Add Image">
                            <IconButton className="icons3">
                                <InsertPhotoOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Archive">
                            <IconButton className="icons3">
                                <ArchiveOutlinedIcon onClick={takeArchive} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More">
                            <IconButton className="icons3">
                                <MoreVertOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div onClick={noteUpdate} className='modal_closeButton'>
                        <Button size="small" className="buttonclose">Close</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    </div>)
}
export default Takenote3;