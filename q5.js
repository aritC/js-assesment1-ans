//Q5. A detailed example implementation of event loop using multiple settimeouts

console.log("Start");

setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("3");
  }, 1000);
}, 1000);

setTimeout(() => {
  console.log("2");
}, 2000);

console.log("End");

/*

Explanation of the JavaScript Event Loop:

The event loop is a fundamental part of how JavaScript manages asynchronous tasks. It continuously checks for tasks in the callback queue and executes them one by one.
When a task is added to the event loop (e.g., via a setTimeout callback), it is not executed immediately. Instead, it waits for the call stack to be empty.
In this example, the main script is added to the call stack, and the functions are executed one by one. When a setTimeout callback is encountered, it is added to the callback queue.
Once the call stack is empty (all synchronous code is executed), the event loop checks the callback queue and moves the tasks from the queue to the call stack, executing the callbacks one by one.
This process continues until the callback queue is empty.

Below is a detailed breakdown of the code above to understand how event loop works.

1. When the code starts running, it immediately logs "Start" to the console.
2. Then, the first setTimeout function is called with a delay of 1000 milliseconds (1 second). This sets up an asynchronous operation that will execute the provided function after the specified delay. This is then pushed to the libuv library which handles all the async code.
3. Then the next line is executed which is also a setTimeout of 2000ms (2 seconds) and hence pushed to the libuv.
3. Finally the next line is executed, which logs "End" to the console. While all the above steps are happening the event loop keeps polling the callback queue to check if any callback is present or not.
4.Now, after 1 second the first setTimeout is completed so its function gets pushed on to the callback queue from where the event loop picks it up and places it on the stack for execution.
5. On execution of the first callback it finds another setTimeout of 1 second which it moves to the libuv api.
5. Then after 2 seconds of the program execution has passed the second setTimeout is completed and get pushed on to the queue. But also with it the inner setTimeout of the fist is also completed and hence it also gets pushed on to the queue.
6. Then the event loop places the callbacks one by one and process them in FIFO order and hence we get the below output

OUTPUT:
Start
End
(after 1 second) 1
(after 2 seconds) 2
(after 2 seconds) 3


*/
