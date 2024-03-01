export default function Sections({title, children, ...props}){
    return (
        <sections {...props}>
            <h2>{title}</h2>
            {children}
        </sections>

    );
}