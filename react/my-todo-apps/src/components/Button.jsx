import { useState } from 'react'
export default function Button({label, isActive, handleOnClick}) {
    const [opacity, setOpacity] = useState(isActive ? '50%' : '100%')
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
        flipOpacity()
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        flipOpacity()
    }

    const flipOpacity = () => {
        if (isActive) {
            isActive = false;
            setOpacity('50%')
        } else {
            isActive = true;
            setOpacity('100%')
        }
    }

    const style = {
            width: '70px', height: '34px', overflow: 'hidden', textOverflow: 'ellipsis', padding: '11px 14px',
            borderRadius: '50px', borderColor: 'black', opacity: opacity, fontSize: '10px', fontWeight: 'bold',
            backgroundColor: '#2680DA', borderWidth: 0, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.2)',
            transition: 'transform 0.2s, opacity 0.2s',
            transform: isHovered ? 'scale(0.95)' : 'scale(1)'
    }

    return (
        <button style={style} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleOnClick}>
            {label}
        </button>
    )
}

export function IconButton({icon: Icon, handleOnClick, hasScaleEffect = true}) {
    const [isHovered, setIsHovered] = useState(false)
    const style = {
        width: '100%',
        height: '100%',
        background: 'none',
        border: 'none',
        transition: 'transform 0.2s, opacity 0.2s',
        transform: isHovered ? 'scale(0.95)' : 'scale(1)'
    }

    if (!hasScaleEffect) {
        delete style.transition
        delete style.transform
    }

    const handleMouseEnter = () => { setIsHovered(true) }
    const handleMouseLeave = () => { setIsHovered(false) }

    return (
        <button style={style} onClick={handleOnClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Icon/>
        </button>
    )
}