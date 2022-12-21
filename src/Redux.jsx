import { useDispatch, useSelector } from "react-redux";
import Delete from './Delete'


function Redux() {

    const dispatch = useDispatch()

    const text = useSelector(state => state)


    const handlerChange = () => {
        dispatch({
            type: 'Change',
            payload: 12345
        })
    }


    return (

        <div>
            <div>
                Значение стейта: {text}
            </div>
            <button onClick={handlerChange}>Click</button>
            <Delete />
        </div>

    )
}

export default Redux;