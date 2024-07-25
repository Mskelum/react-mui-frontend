import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Backdrop, Stack, styled, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function AddPost() {

    const style = {
        position: 'absolute',
        alignItems: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const UserBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
    })

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ position: 'fixed', bottom: 30, marginLeft: 2 }} bgcolor={'background.default'} color={'text.primary'} >
            <div>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={handleOpen} />
                </Fab>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style} bgcolor={'background.default'} color={'text.primary'} >
                            <Typography id="transition-modal-title" variant="h6" component="h2" textAlign='center'>
                                Create a post
                            </Typography>
                            <UserBox>
                                <Avatar
                                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="User Profile"
                                    style={{ width: '40px', height: '40px' }}
                                />
                                Ms kelum
                            </UserBox>
                            <TextField sx={{ width: '100%' }}
                                id="outlined-multiline-static"
                                label=""
                                multiline
                                rows={4}
                                placeholder='type here'
                            />
                            <Stack direction="row" spacing={2} gap={1} mt={2} mb={3}>
                                <Button variant="contained" startIcon={<SendIcon />}>
                                    Post
                                </Button>
                            </Stack>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </Box>


    );
}
