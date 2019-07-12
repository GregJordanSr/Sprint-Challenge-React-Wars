# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

1. What does it mean to think in react?

    It means to think in terms of re-usability.  React interacts with a virtual Dom that is more friendly than the actual Dom, this solves the problem of the entire page re-rendering. As a result, the pages load faster by keeping track of all incoming changes. Case in point, when I was making the calculator app it only re-rendered when I pressed the buttons, which re-rendered only the input information and not the entire calculator app.

1. Describe state.

    State is the information in React that holds the data that the app uses.


1. Describe props.

    These are the properties of information that is passed into the children components from the parent component in a top down fashion.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are any event in React the can or does interact with things outside the scope of the function that is being executed presently. An axios get request and manipulating the DOM are a few ways these side effects can happen.

    We sync effects in React to only fire the targeted state or props changes with a dependency array as the second argument in an useEffect hook.
