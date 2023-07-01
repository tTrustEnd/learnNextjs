export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        <header> Header templace</header>
        {children}
        <footer>Footer templace</footer>
    </div>
}