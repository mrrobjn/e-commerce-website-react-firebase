import Head from "../components/Head";
import Search from "~/components/Search";
import '~~/layout/Header.scss'
const Header = ({ cartItem, setProductFilter, }) => {
  return (
    <section id="header">
      <Head/>
      <Search cartItem={cartItem} setProductFilter={setProductFilter}/>
    </section>
  );
};

export default Header;
