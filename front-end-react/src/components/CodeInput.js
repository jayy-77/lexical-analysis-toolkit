import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import axios from 'axios'
import LexicalAnalysisTable from './LexicalAnalysisTable';
import LexicalDocumentation from './LexicalDocumentation';
import { Backdrop, CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab, selectTab } from '../features/tabs/tabsSlicer';
import { changeCode, selectCode } from '../features/tabs/codeSlicer';

function CodeInput() {
    const [text, setText] = useState('')
    const [state, setState] = useState('code_input')
    const [server_response, setResponse] = useState(null)
    const [open, setOpen] = useState(false);
    const tab = useSelector(selectTab)
    const code = useSelector(selectCode)
    const dispatch = useDispatch()
    const [tabName, setTabName] = useState("")

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    function code_input(e) {
        setText(e.target.value)
        dispatch(changeCode(e.target.value))
    }

    function http_request(end_point) {
        axios.post(`http://localhost:3002/${end_point}`, { code: text })
            .then(response => {
                setResponse(response.data)
                setState(end_point)
                handleClose()
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function token_table_req() {
        http_request("lexical-analysis")
        handleOpen()
    }

    function doc_generator_req(e) {
        http_request("doc_generator")
        handleOpen()
    }



    var code_style = { backgroundImage: `url('code-back.svg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }

    return (
        <>
            <div className='container'>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                {tab === 'code_input' && (<>
                    <textarea onChange={code_input} value={code} className="form-control border-primary bg-dark text-light mt-5" rows="25" style={!text ? code_style : null}></textarea>
                    <div class="btn-group d-flex mt-3" role="group" aria-label="Basic outlined example">

                        <button type="button" className="btn btn-outline-primary" onClick={() => {
                            dispatch(changeTab("Lexical Analysis Table"))
                            token_table_req()
                        }}> Lexical Analysis Table </button>

                        <button type="button" className="btn btn-outline-primary" onClick={() => {
                            doc_generator_req()
                            dispatch(changeTab("Lexical Documentation"))
                        }}> Doc Generator </button>

                        <input type="file" className="btn btn-outline-primary" />
                    </div>
                </>)}

                {state === 'lexical-analysis' && <LexicalAnalysisTable data={server_response} />}
                {state === 'doc_generator' && <LexicalDocumentation data={server_response} />}
                {console.log(tab)}
            </div>
        </>
    )
}

export default CodeInput