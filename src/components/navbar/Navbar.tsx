import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
        <svg
            className={styles.logo}
            viewBox="0 0 228 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.6973 30.4405V29.7603C18.6973 24.9891 18.6973 22.6034 19.5542 21.6978C20.2949 20.915 21.3861 20.5681 22.4429 20.7795C23.6654 21.024 25.043 22.9716 27.7983 26.867L32.2997 33.2311C35.0549 37.1264 36.4326 39.074 37.6551 39.3185C38.7119 39.5299 39.8031 39.183 40.5438 38.4002C41.4007 37.4946 41.4007 35.109 41.4007 30.3377V28.8747M18.6973 35.9206C21.2915 35.9206 23.3945 38.0236 23.3945 40.6179C23.3945 43.2121 21.2915 45.3151 18.6973 45.3151C16.103 45.3151 14 43.2121 14 40.6179C14 38.0236 16.103 35.9206 18.6973 35.9206ZM40.6178 14C43.2121 14 45.3151 16.1031 45.3151 18.6973C45.3151 21.2915 43.2121 23.3946 40.6178 23.3946C38.0236 23.3946 35.9206 21.2915 35.9206 18.6973C35.9206 16.1031 38.0236 14 40.6178 14Z"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <circle
                cx="30"
                cy="30"
                r="28.3636"
                stroke="black"
                stroke-width="4"
            />
            <path
                d="M81.5373 23.3302V46H74.8203V13.1288H82.5868L96.8604 34.5811V13.1288H103.577V46H96.6504L81.5373 23.3302ZM111.267 13.1288H132.803V19.5099H117.984V26.1849H131.25V32.566H117.984V39.6609H132.887V46H111.267V13.1288ZM142.924 46H135.242L147.08 29.0816L135.913 13.1288H143.89L151.152 23.792L158.499 13.1288H166.434L155.183 29.0396L167.021 46H159.087L151.068 34.1613L142.924 46ZM190.148 13.1288H196.865V32.734C196.865 41.3401 192.331 46.4618 183.599 46.4618C174.825 46.4618 170.459 41.2561 170.459 32.9859V13.1288H177.302L177.26 32.8179C177.26 37.4778 179.905 39.9127 183.641 39.9127C187.797 39.9127 190.148 37.226 190.148 32.9859V13.1288ZM214.536 26.1429C222.386 28.3679 226.038 31.0967 226.038 36.3443C226.038 39.325 224.989 41.8019 222.848 43.691C220.707 45.5802 217.768 46.5038 213.99 46.5038C207.819 46.5038 203.117 43.5231 201.144 38.7793L207.021 35.7566C208.322 38.6113 210.883 40.3326 214.2 40.3326C217.096 40.3326 219.196 38.8632 219.196 36.8481C219.196 35.8826 218.776 35.1269 217.894 34.5811C217.055 33.9934 215.417 33.3217 212.982 32.608C209.162 31.4745 206.475 30.1311 204.964 28.6198C203.285 26.9826 202.445 24.9675 202.445 22.5326C202.445 19.6359 203.579 17.2849 205.804 15.4378C208.029 13.5486 210.757 12.625 213.906 12.625C219.405 12.625 223.562 15.1859 225.451 19.7198L219.825 22.7845C218.692 20.0977 216.635 18.7543 213.612 18.7543C210.925 18.7543 209.246 20.1396 209.246 22.1128C209.246 24.0859 210.799 25.0934 214.536 26.1429Z"
                fill="black"
            />
        </svg>

        <nav className={styles.linksContainer}>
            <a href="#" className={styles.link}>Características</a>
            <a href="#" className={styles.link}>Precios</a>
            <a href="#" className={styles.link}>Acerca de</a>
            <a href="#" className={styles.link}>Contacto</a>
        </nav>
      </header>
  )
}

export default Navbar