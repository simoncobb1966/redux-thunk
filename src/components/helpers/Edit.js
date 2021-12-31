import React, { useState } from 'react';

const Edit = ({ strValue, funcSubmit }) => {

    const [strEditedvalue, setEditedValue] = useState(strValue);
    const [bShowEdit, setBShowEdit] = useState(false);

    const onChange = (event) => {
        setEditedValue(event.target.value);
    }

    const submit =()=>{
        setBShowEdit(false);
        funcSubmit(strEditedvalue);
    }


    return (
        <>
        {false === bShowEdit &&
        <button 
        type='button'
        onClick={()=>setBShowEdit(true)}
        >
        Edit
        </button>
        }
        {true === bShowEdit &&
            <>
            <input
                value={strEditedvalue}
                type='text'
                onChange={onChange}
                onBlur={submit}
                ref={function(input) {
                    if (input != null) {
                      input.focus();
                    }
                  }}
            />
            <button
                type='button'
                onClick={submit}
            >Submit</button>   
            </>
        }
        </>
        )
}

export default Edit