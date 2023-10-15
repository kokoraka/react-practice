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

3. Hooks
- useState (component state)
- useEffect (mounted event)
- useRef (connection to real html dom) -> good for reading value

4. Others
- wrapper (avoid `div doup`)
-- wrapper component
-- react fragment (`<React.Fragment></React.Fragment>` or `<></>`)

- portals (avoid bad html structure or real dom structure)
