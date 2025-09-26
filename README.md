## Answers to the following questions are given below: -
#### 1. What is JSX, and why is it used?
JSX stands for JavaScript XML, and it is a special syntax used in React to simplify building user interfaces. JSX allows you to write HTML-like code directly inside JavaScript, enabling you to create UI components more efficiently. Although JSX looks like regular HTML, it’s actually a syntax extension for JavaScript.

#### 2. What is the difference between State and Props? 
State: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
a) The Data is passed within the component only.
b) It is Mutable ( can be modified).
c) The state can be used only with the state components/class component (Before 16.0).
d) The state is both read and write.
Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
a) The Data is passed from one component to another.
b) It is Immutable (cannot be modified).
c) Props can be used with state and functional components.
d) Props are read-only.

#### 3. What is the useState hook, and how does it work?
The useState hook is a function that allows you to add state to a functional component. It is an alternative to the useReducer hook that is preferred when we require the basic update. useState Hooks are used to add the state variables in the components. For using the useState hook we have to import it in the component.

#### 4. How can you share state between components in React?
The React Context Provides simple and efficient way to share state across the React components. In this article, we will see how to share state across React Components with Contect API.

#### 5. How is event handling done in React?
In React, events are handled similarly to how they are handled in regular HTML. However, in React, event handling is done using JSX syntax, and React provides its own synthetic event system, which is compatible with most browser events.

User Action: The user interacts with the UI (e.g., clicks a button).
Event Triggered: The corresponding event is fired.
SyntheticEvent Created: React creates a synthetic event to normalize the behavior.
Cross-Browser Consistency: Ensures the event works the same across all browsers.

