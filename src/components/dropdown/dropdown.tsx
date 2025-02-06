import "./dropdown.css";

interface Dropdown {
    className: string
}

const Dropdown = ({className}: Dropdown) => {


    return (
    <select className={className}>
        <option>2024/2025</option>
        <option>2023/2024</option>
    </select>
    );
}

export default Dropdown;