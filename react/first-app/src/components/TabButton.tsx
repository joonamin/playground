import './TabButton.css'
export default function TabButton({ children, onSelect }: { children: string | null, onSelect?: () => void }) {

    return (
        <li className='tab-btn' onClick={onSelect}>
            <button>{children}</button>
        </li>
    )
}
