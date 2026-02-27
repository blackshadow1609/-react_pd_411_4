import './Modal.css';
import { useState } from 'react';

function Modal() {
    let [open, setOpen] = useState(false);
    let image = "https://i.pinimg.com/736x/fa/9b/8f/fa9b8f3a8d38137a4871340dce75b182.jpg";

    return (
        <div>
            <img src={image} className='small' style={{ display: open ? "none" : "block" }} onClick={() => setOpen(true)} />

            {
                open &&
                (
                    <div>
                        <div>
                            <img src={image} className='big' onClick={() => setOpen(false)} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Modal;