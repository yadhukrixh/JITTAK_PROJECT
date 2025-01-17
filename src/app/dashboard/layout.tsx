/**
 * Layout Component for rendering the page layout with navigation and header.
 * 
 * This component serves as a wrapper for the main page content. It includes the `NavBar` 
 * and `Header` components, which are displayed at the top of each page. The `children` 
 * prop represents the page-specific content that will be rendered below the header and 
 * navigation bar.
 * 
 * @param {React.ReactNode} children - The page-specific content that will be injected 
 * into the layout.
 * 
 * @returns {JSX.Element} - The rendered layout with navigation bar, header, and children.
 */
import Header from "@/themes/components/header/header";
import NavBar from "@/themes/components/nav-bar/nav-bar";
import './home.scss';

/**
 * A functional component that renders the page layout with a navigation bar and header.
 * 
 * This layout wraps the page content with a navigation bar at the top, followed by a header, 
 * and then the specific content passed through the `children` prop.
 * 
 * @component
 * @example
 * return <Layout>Page Content</Layout>;
 * 
 * @param {React.ReactNode} children - The page-specific content to be rendered.
 * 
 * @returns {JSX.Element} The layout consisting of `NavBar`, `Header`, and the page-specific content (`children`).
 */
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <Header />
      {children}
    </>
  );
}
