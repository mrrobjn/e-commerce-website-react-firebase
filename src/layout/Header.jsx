import Head from "../components/Head";
import Search from "~/components/Search";
import '~~/layout/Header.scss'
const Header = () => {
  return (
    <section id="header">
      <Head/>
      <Search/>
    </section>
  );
};

export default Header;
