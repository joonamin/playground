// Rest property 를 사용하여 남은 [key: value] pair에 대해서 속성을 그룹화하여 한번에 가져올 수 있다.
export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}