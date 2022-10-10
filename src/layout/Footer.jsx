function Footer() {
    return <footer className="page-footer light-blue darken-3">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} React App
                <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
            </div>
        </div>
    </footer>
}

export {Footer}