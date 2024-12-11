function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a href={href} className="hover:text-blue-200 transition-colors">
            {children}
        </a>
    );
}

export default NavLink;