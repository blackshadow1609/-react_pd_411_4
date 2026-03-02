import './Form.css';
import { useState } from 'react';

function Form(props) {

    let [value, setValue] = useState('');
    let { addTask } = props;

    let sendSubmit = e => {
        e.preventDefault();
        addTask(value);
        setValue('');
    }

    // return (
    //     <form onSubmit={sendSubmit}>
    //         <div className='input'>
    //             <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
    //             <button onClick={() => setValue('')}>X</button>
    //         </div>
    //         <input type="submit" />
    //     </form>
    // )

    return (
        <form onSubmit={sendSubmit}>
            <div className='input'>
                <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
                <button type="button" onClick={(e) => { e.preventDefault(); setValue(''); }}>X</button>
            </div>
            <input type="submit" />
        </form>
    )
}
export default Form;