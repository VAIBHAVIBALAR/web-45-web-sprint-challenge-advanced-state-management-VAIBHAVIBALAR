# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Scalable from any range of application, comparitively less complex than Redux, implementation cost is lower, consumer component instance can access all the data provided by the Provider Component at any level, the core part of React JS library so no need to import any additional libraries thus dependencies is reduced, code is easy to maintain and very reusable

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions- An action is a plain javascript object that has a type field. You can think of an action as an event that describes something that happened in the application.
reducers- A reducer is a function that recieves the currentt state and action object, decides how to update the state necessary, and returns the new state. It can be decribed as an event listener that handles events based on the recieved action(event) type.
store- The current Redux application state lives in an object called the store. The store is the single source of truth as the global state of aplication is stored as an aobject inside a single store.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that returns a function inside of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite state management system as it deals with single global object and keeps the code sorted.