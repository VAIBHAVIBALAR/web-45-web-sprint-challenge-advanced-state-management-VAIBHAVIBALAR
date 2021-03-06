import axios from 'axios';
export const SMURF_START = "SMURF_START";
export const SMURF_SUCCESS = "SMURF_SUCCESS";
export const SMURF_FAIL = "SMURF_FAIL";
export const SMURF_ADD = "SMURF_ADD";
export const ERROR = "ERROR";


export const getSmurfs = () =>{
    return(dispatch)=>{
       dispatch(smurfStart());
        axios.get('http://localhost:3333/smurfs')
        .then(res =>{
            dispatch(smurfSuccess(res.data))
        })
        .catch(err =>{
            dispatch(smurfFail(err));
        })
    }
}


export const smurfStart = () =>{
    return({
        type: SMURF_START,
    })
}

export const smurfSuccess = (sm) =>{
    return({
        type: SMURF_SUCCESS,
        payload: sm
    })
}

export const smurfFail = (error) =>{
    return({
        type:SMURF_FAIL, payload: error
    })
}

export const addSmurf = (smurf) => {
    return({
        type: SMURF_ADD,
        payload: smurf
    })
}

export const setError = (error) =>{
    return({
        type:ERROR,
        payload:error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.