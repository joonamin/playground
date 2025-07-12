import { IconButton } from './Button.jsx'
import { TabBarIcon } from './Icon.jsx'
import { useTodoListContext } from '../context/TodoContext.jsx'

const style = {
    display: 'flex',
    width: '695px',
    height: '50px',
    alignItems: 'center',
    border: '1px solid black',
}
export default function TabBar({ label }) {
    const { isOpened, setIsOpened } = useTodoListContext()
    return (
        <div style={style}>
            <p style={{fontWeight: 'bold', fontSize: '25px', margin: '0 auto', color: '#2680DA'}}>{label}</p>
            <div className='button-container'>
                <IconButton icon={() => TabBarIcon({opened: isOpened, hasScaleEffect: false})} handleOnClick={() => setIsOpened(!isOpened)} />
            </div>
        </div>
    )
}