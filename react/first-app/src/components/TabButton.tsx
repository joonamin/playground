import './TabButton.css'
export default function TabButton({ children }: { children: string | null }) {
    function handleClick() {
        console.log(`hello world!`)
    }

    return (
        <li className='tab-btn' onClick={handleClick}>
            <button>{children}</button>
        </li>
    )
}
