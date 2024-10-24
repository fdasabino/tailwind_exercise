import Layout from "./components/Layout";
import Modal from "./sections/Modal";

function App() {
  return (
    <Layout>
      <Modal
        id={"model-s"}
        title="Model S"
        image={"bg-section4"}
        disclaimer={"0% APR Available"}
      />
      <Modal
        id={"model-3"}
        title="Model 3"
        image={"bg-section3"}
        disclaimer={"0% APR Available"}
      />
      <Modal
        id={"model-x"}
        title="Model X"
        image={"bg-section1"}
        disclaimer={"0% APR Available"}
      />
      <Modal
        id={"model-y"}
        title="Model Y"
        image={"bg-section2"}
        disclaimer={"0% APR Available"}
      />
    </Layout>
  );
}

export default App;
