### React Practice

1. JSX (Javascript XML -> HTML)
- format
-- .js working with javascript
-- .tsx working with typescript

2. Components
- props 
-- default props by object default value
-- children props (slots in vue) -> composition
-- multiple children props (map props)
-- single & multiple children props

- states (react hooks)
-- usable only inside component
-- initialized once and check existing state when re-rendered (state update)
-- two way binding using state (value & listener handler)

- communication
-- child to parent = events (simple callback function)

- control
-- uncontrolled (internal state not managed by react)
-- controlled (internal state being manage by react -> state)

- styles
-- global
-- local (styled component)

- lifecycles
-- mounting (will mount -> render -> did mount)
-- updating (will receive props or set state -> should update ? -> will update -> re-render)
-- unmounting (will unmount)

3. Hooks
only usable on component or custom hooks
should be called on the top level (not inside other function or inside a branching statement)

- useState (component state)
- useRef (connection to real html dom) -> good for reading value
-- built in jsx = ref
-- custom component = forward ref (useImperativeHandle)
- useEffect (do something when some state change)
-- run once after component being evaluated (without dependency -> [])
-- run when some data changed (with dependency -> [someState])
-- clean up function (run when component being unmounted from the dom or before side effect fn run) -> (return () => { /* clean up implementation */ })
-- always add state being used inside the effect fn as the effect dependency
-- avoid infinite loop
-- avoid performance reduction (e.g: not hit http api every time the component being evaluated)
- useReducer (merging several state into one state)
-- wanted to use the last state snapshot
-- avoid depending on other outdated state
- useContext (make it easy to working with context -> no need context provider)

4. Others
- wrapper (avoid `div doup`)
-- wrapper component
-- react fragment (`<React.Fragment></React.Fragment>` or `<></>`)

- portals (avoid bad html structure or real dom structure)

- context (shared state between component)
-- not optimized for high frequent update data
-- create context -> `React.createContext({ key: 'val' })`
-- wrap in context provider -> `<AuthContext.Provider value={ key: 'val' }>...</AuthContext.Provider>`
-- use through context consumer -> 

```js
  <AuthContext.Consumer>
    {
      (ctx) => {
        return (
          ctx.key // val
          {/* component */}
        )
      }
    }
  </AuthContext.Consumer>
```

-- or use through useContext hooks

```js
  import AuthContext from "./store/AuthContext"

  const authCtx = React.useContext(AuthContext)
  
  authCtx.key

```
