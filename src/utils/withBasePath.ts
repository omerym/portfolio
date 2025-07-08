// utils/withBasePath.ts
// Returns the correct static asset path for local and GitHub Pages (basePath)
export function withBasePath(path: string) {
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/portfolio')) {
        return `/portfolio${path.startsWith('/') ? path : '/' + path}`;
    }
    return path;
}
