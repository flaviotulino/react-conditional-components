This project is inspired by [JSX-control-statements](https://github.com/AlexGilleran/jsx-control-statements).

The problem I found with that module was that I couldn't use it with Create React App, because it is a Babel Plugin and if you use CRA you cannot edit your 
webpack/Babel config unless you eject the app.

This simple module provides

- `<If>` statement

```javascript
....
<If condition={/* your condition here */}>
  ... some other component(s)
</If>
```

- `<Choose>`, `<When` and `<Otherwise>` statements
If you have more complex condition, you should be using the <Choose />

```javascript
<Choose>
  <When condition={trueCondtition}>
    ... stuff here ...
  </When>
  <When condition={anotherTrueCondition}>
    ... other stuff here ...
  </When>

  <When condition={falsyCondition}>
    ... this won't be visible ...
  </When>

  <Otherwise>
    ... this will be visibile only if ALL of the previous conditions are
    false
  </Otherwise>
</Choose>
```

> Note
You must have at least one <When> statement if you wrap it into a <Choose>.