import HookCustom from "../components/HookCustom"
import HookUseCallback from "../components/HookUseCallback"
import HookUseEffect from "../components/HookUseEffect"
import HookUseLayoutEffect from "../components/HookUseLayoutEffect"
import HookUseMemo from "../components/HookUseMemo"
import HookUseReducer from "../components/HookUseReducer"
import HookUseRef from "../components/HookUseRef"
import HookeUseState from "../components/HookUseState"

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <HookeUseState />
      <HookUseReducer />
      {/* <HookUseEffect /> */}
      <hr />
      <HookUseRef />
      <hr />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookCustom />
    </div>
  )
}

export default Home