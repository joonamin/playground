import './TabButton.css'
export default function TabButton({ children, onSelect, isSelected = false }: { children: string | null, onSelect?: () => void, isSelected: boolean }) {
    console.log(`isSelected: ${isSelected}`)
    return (
        <li className='tab-btn' onClick={onSelect}>
            <button className={isSelected && 'active'}>{children}</button>
        </li>
    )
}
