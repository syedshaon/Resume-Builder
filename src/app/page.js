// This page is only a fallback and should not actually be rendered
// The middleware will redirect "/" to "/en" before this page gets rendered
export default function Home() {
  return null; // Empty component as middleware should handle the redirect
}
