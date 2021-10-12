import styles from './layout.module.css';

// export default function Layout({ children }) {
//     return (
//         <div>
//             {children}
//         </div>
//     );
// };

// Using children prop, allows content to be inside within the opening and closing tag.
// Alternative way to write

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
};

export default Layout;