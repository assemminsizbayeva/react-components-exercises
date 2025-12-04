
export function Menu({ links = [] }) {
    return (
        <nav>
            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '20px'
            }}>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={`#${link.toLowerCase()}`}>{link}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}