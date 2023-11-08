import About from "../about";
import Profile from "../profile";
import SignIn from "../sign-in";
import LogOut from "../log-out";
import Books from "../books";
import Movies from "../movies";
import SignUp from "../sign-up";

export const paths = {
  LogOut: "/log-out",
  SignIn: "/sign-in",
  Profile: "/profile",
  About: "/about",
  Books: "/books",
  Movies: "/movies",
  SignUp: "/sign-up",
  Home: "/",
};

export interface NavLinkProps {
  title: string;
  path: string;
  component: () => JSX.Element;
}

export const navLinks = [
  { title: `Log Out`, path: paths.LogOut, component: LogOut },
  { title: "Sign In", path: paths.SignIn, component: SignIn },
  { title: "Sign Up", path: paths.SignUp, component: SignUp },
  { title: "About", path: paths.About, component: About },
  { title: "Home", path: paths.Home, component: About },
  { title: "Profile", path: paths.Profile, component: Profile },
  { title: "Books", path: paths.Books, component: Books },
  { title: "Movies", path: paths.Movies, component: Movies },
] as NavLinkProps[];

export const loginLinks = [
  { title: "Sign In", path: paths.SignIn, component: SignIn },
  { title: "Sign Up", path: paths.SignUp, component: SignUp },
  { title: "About", path: paths.About, component: About },
] as NavLinkProps[];

export const userLinks = [
  { title: "About", path: paths.About, component: About },
  { title: "Books", path: paths.Books, component: Books },
  { title: "Movies", path: paths.Movies, component: Movies },
] as NavLinkProps[];
