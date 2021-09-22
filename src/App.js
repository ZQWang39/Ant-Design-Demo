import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./components/common/Header.jsx";
import Home from "./views/Home";
import AppFooter from "./components/home/AppFooter";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
