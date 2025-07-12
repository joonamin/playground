export function DeleteItemIcon() {
    return (
        <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <path stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16m-4 0-.27-.812c-.263-.787-.394-1.18-.637-1.471a2 2 0 0 0-.803-.578C13.938 3 13.524 3 12.694 3h-1.388c-.829 0-1.244 0-1.596.139a2 2 0 0 0-.803.578c-.243.29-.374.684-.636 1.471L8 6m10 0v10.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 21 14.88 21 13.2 21h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 18.72 6 17.88 6 16.2V6m8 4v7m-4-7v7'/>
        </svg>
    )
}

export function EditItemIcon() {
    return (
        <svg width='100%' height='100%' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
            <path d='M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13' stroke='#000000' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
        </svg>
    )
}

export function SaveItemIcon() {
    return (
        <svg height='100%' width='100%' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 506.4 506.4' fill='#000000'>
            <g id='SVGRepo_bgCarrier' strokeWidth={0}></g>
            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
            <g id='SVGRepo_iconCarrier'>
                <circle style={{ fill: '#000000' }} cx='253.2' cy='253.2' r='249.2'></circle>
                <path style={{ fill: '#F4EFEF' }} d='M372.8,200.4l-11.2-11.2c-4.4-4.4-12-4.4-16.4,0L232,302.4l-69.6-69.6c-4.4-4.4-12-4.4-16.4,0 L134.4,244c-4.4,4.4-4.4,12,0,16.4l89.2,89.2c4.4,4.4,12,4.4,16.4,0l0,0l0,0l10.4-10.4l0.8-0.8l121.6-121.6 C377.2,212.4,377.2,205.2,372.8,200.4z'></path>
                <path d='M253.2,506.4C113.6,506.4,0,392.8,0,253.2S113.6,0,253.2,0s253.2,113.6,253.2,253.2S392.8,506.4,253.2,506.4z M253.2,8 C118,8,8,118,8,253.2s110,245.2,245.2,245.2s245.2-110,245.2-245.2S388.4,8,253.2,8z'></path>
                <path d='M231.6,357.2c-4,0-8-1.6-11.2-4.4l-89.2-89.2c-6-6-6-16,0-22l11.6-11.6c6-6,16.4-6,22,0l66.8,66.8L342,186.4 c2.8-2.8,6.8-4.4,11.2-4.4c4,0,8,1.6,11.2,4.4l11.2,11.2l0,0c6,6,6,16,0,22L242.8,352.4C239.6,355.6,235.6,357.2,231.6,357.2z M154,233.6c-2,0-4,0.8-5.6,2.4l-11.6,11.6c-2.8,2.8-2.8,8,0,10.8l89.2,89.2c2.8,2.8,8,2.8,10.8,0l132.8-132.8c2.8-2.8,2.8-8,0-10.8 l-11.2-11.2c-2.8-2.8-8-2.8-10.8,0L234.4,306c-1.6,1.6-4,1.6-5.6,0l-69.6-69.6C158,234.4,156,233.6,154,233.6z'></path>
            </g>
        </svg>
    )
}

export function TabBarIcon({ opened }) {
    if (!opened) {
        return (
            <svg width='50%' height='50%' viewBox='0 0 1024 1024' className='icon'  version='1.1' xmlns='http://www.w3.org/2000/svg'><path d='M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z' fill='#D9D9D9' /></svg>
        )
    }
    return (
        <svg width='50%' height='50%' viewBox='0 0 1024 1024' className='icon' version='1.1' xmlns='http://www.w3.org/2000/svg' fill='#D9D9D9'><g id='SVGRepo_bgCarrier' strokeWidth='0'></g><g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g><g id='SVGRepo_iconCarrier'><path d='M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z' fill='#D9D9D9'></path></g></svg>
    )
}
