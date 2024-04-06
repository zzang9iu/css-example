import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Avartar from "./components/Avartar";

function AppProfile() {
  const image =
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80";
  const handleClick = (e) => {
    console.log(e);
    alert("버튼 클릭");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={() => {}}>
        <input />
      </form>
      <Avartar image={image} isNew={true} />
      <Profile
        {...{ a: 1, b: 2 }}
        image={image}
        name="정헌"
        title="웨이버스"
        isNew={true}
      />
      <Profile image={image} name="hhhh" title="웨이버스" />
      <Profile image={image} name="ㅊㅊ" title="웨이버스" />
      <Profile image={image} name="ㄴㄴ" title="웨이버스" />
    </>
  );
}

export default AppProfile;
