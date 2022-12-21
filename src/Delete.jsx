import { useDispatch } from "react-redux";

function Delete() {

    const dispatch = useDispatch()

    const remove = () => {
        dispatch({
            type: 'Delete'
        })
    }


    return (
        <div>
            <button onClick={remove}>Delete</button>
        </div >
    )
}


export default Delete;