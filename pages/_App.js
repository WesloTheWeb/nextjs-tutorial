import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

/* In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
If you were to navigate from the homepage to the /posts/first-post page, global styles from the homepage would affect /posts/first-post unintentionally.

You can place the global CSS file anywhere and use any name. So let’s do the following:
*/