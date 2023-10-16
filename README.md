### React Practice

#### Summary
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
-- updated in batch if there are two setter being executed together (setA() -> setB() will batched behind the scene)

- communication
-- child to parent = events (simple callback function)

- control
-- uncontrolled (internal state not managed by react)
-- controlled (internal state being manage by react -> state)

- styles
-- global
-- local (styled component)

- lifecycles
-- mounting
--- componentWillMount
--- render
--- componentDidMount eq: useEffect(() => {  }, [])
-- updating
--- `will receive props` or `set state`
--- componentShouldUpdate
--- componentWillUpdate
--- render (re-render)
--- componentDidUpdate eq: useEffect(() => {  }, [stateA])
-- unmounting
--- componentWillUnmount eq: useEffect(() => { return () => {...} }, [])
-- error
--- componentDidCatch

- re-evaluate the component doesn't meant re-render the actual dom

3. Hooks
only usable on component or custom hooks
should be called on the top level (not inside other function or inside a branching statement)
can only be used on functional components (not class based components)

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
- useCallback (singleton for function so the function is not re-created everytime the component being re-evaluated)
-- without dependency -> []
-- with dependency -> [someState]
- useMemo (same like useCallback but for state)

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

-- or use through useContext hooks (can consume multiple context)

```js
  import AuthContext from "./store/AuthContext"

  const authCtx = React.useContext(AuthContext)
  
  authCtx.key

```

- optimization 
-- react memo 
--- by default only work component function (not class based)
--- only render component when the previous props are different than the new props
--- props are compared using `===` operator, therefore primitive value (string, number, boolean, etc) is behave differently than non-primitive value (object, array, function, etc)
--- the cost of comparing the props should be considered vs the cost of re-evaluating the component
