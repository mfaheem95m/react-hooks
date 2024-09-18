import React, { useState, useEffect } from 'react';
import '../style/Home.css';

function UseState() {
    const [age, setAge] = useState(42);
    const [version, setVersion] = useState(0);
    const [name, setName] = useState('Taylor');
    const [form, setForm] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth'
    });

    return (
        <div className="Home">
            <header className="description">
                <p>useState is a React Hook that lets you add a state variable to your component.
                </p>
                <h3>Case 1</h3>

                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className='input'
                />
                <button className='my-button' onClick={() => setAge(age => age + 1)}>Age Increment</button>
                <button className='my-button' onClick={() => setAge(age => age - 1)}>Age Decrement</button>
                <button className='my-button' onClick={() => {
                    setVersion(version => version + 1)
                    console.log('sdksd', version)
                }}>Reset</button>
                <p>Hello, {name}. You are {age}.</p>
                <h4>Description</h4>
                <p className='text'>
                    In this use case of the <code>useState</code> hook, we will discuss the difference between functional and direct state updates. When using <code>setAge(age + 1)</code>, you are setting the state based on a value that's not the most current if multiple updates are batched. React batches state updates within event handlers to optimize performance, meaning it won’t re-render the component after each individual state update but will wait until the end of the batch to perform the re-render. As a result, using direct state updates may lead to stale state values if multiple updates are involved.
                    <br /><br />
                    On the other hand, when using <code>setAge(age =&gt; age + 1)</code>, React calls the function with the most recent state value as its argument. This ensures that each state update is based on the latest value, making it more reliable when dealing with multiple updates in a batch. This functional approach is particularly useful for preventing issues with stale state values in scenarios with rapid or multiple state updates.
                </p>

                <h3>Case 2</h3>
                <h4>Description</h4>
                <p className='text'>
                    <p className='text'>
                        <code>
                            {`function handleClick() { 
       setName('Robin') 
       console.log(name); 
        Still "Taylor"! 
    }`}
                        </code> calling the set function to update the state that cannot change the state in already existing code it will effect from next render that's why it's returning the old value  but not the new one
                    </p>

                </p>


                <h3>Case 3</h3>
                <h4>Updating objects and arrays in state</h4>
                <label>
                    First name:
                    <input
                        value={form.firstName}
                        onChange={e => {
                            setForm({
                                ...form,
                                firstName: e.target.value
                            });
                        }}
                        className='input'
                    />
                </label>

                <p>
                    {form.firstName}

                </p>

                <p className='text'>
                    <code>
                        🚩 Don't mutate an object in state like this:
                        <br />
                        form.firstName = 'Taylor';
                    </code>
                    <br />
                    <code>
                        Instead, replace the whole object by creating a new one:
                        <br />
                        <br />
                        ✅ Replace state with a new object
                        <br />
                        setForm({`{`}
                        <br />
                        ...form,
                        <br />
                        firstName: 'Taylor'
                        <br />
                        {`}`});
                    </code>
                </p>
                <h3>Case 4</h3>
                <h4>Avoiding recreating the initial state </h4>
                <p className='text'>we can create the initial state out of the react component and pass the reference of that function not call the function just pass the reference it would help in avoiding the recreation of state after every rerender it would only call the referenced function in first render only  <code>const [todos, setTodos] = useState(createInitialTodos());</code> calling createInitialTodos(), which means that the function will execute every time the component renders<code>useState(createInitialTodos);</code> we can pass the function reference to use state</p>
                <h3>Case 5</h3>
                <h4>Resetting state with a key </h4>
                <p className='text'> component that displays a counter. When you click a button, the counter increments. We also have a reset button that, when clicked, resets the counter to zero by changing the key of the counter component.
                    <code>  const [resetKey, setResetKey] = useState(0);
                        function handleReset() {
                            ` setResetKey(resetKey + 1); 
                             'Change the key to force reset'
                            `

                        } 'Counter key=resetKey' </code>
                    when we change the reset key when we click the button reset then the counter reset
                </p>
                <h3>Case 6</h3>
                <h4>Storing information from previous renders </h4>
                <AgeLabel age={age} key={version} />
                <p className='text'> in this use case of react hook use state when we are setting the state prevcount in child component <code> const [prevCount, setPrevCount] = useState(age);</code> so it sets the prevcount to age value at the time component first time renders and after every update in age value that is coming as a prop we need to synchronize with the updated value in useEffect .  </p>
                <h3>Case 7</h3>
                <h4>I’ve updated the state, but logging gives me the old value  </h4>
                <p className='text'>calling the set state for state update does not change the state value in current running code updating state request trigger a render with new state value if we need the updated state in currently running code then before passing to set state function we will store that in variable and use that updated state . <br /><br />
                    <code>function handleClick() {
                        `console.log(count);  // 0

                         setCount(count + 1); // Request a re-render with 1
                         console.log(count);  // Still 0!

                       setTimeout(() => {
                       console.log(count); // Also 0!
                        }, 5000);`
                    }
                    </code>
                    <br /><br />
                </p>
                <h3>Case 8</h3>
                <h4>I’ve updated the state, but the screen doesn’t update   </h4>
                <p className='text'>
                    when we want to want to update array or object in use state then don't mutate the array or object directly every time we need to create new object
                    <br /><br />
                    obj.x = 10;  // 🚩 Wrong: mutating existing object
                    setObj(obj); // 🚩 Doesn't do anything
                    <br /><br />
                    <code>
                        ✅ Correct: creating a new object

                        setObj({`{`}
                        <br />
                        ...obj,
                        <br />
                        x: 10
                        <br />
                        {`}`});
                    </code>
                    <br /><br />
                    React will ignore your update if the next state is equal to the previous state, as determined by an Object.is comparison.
                </p>
            </header>
        </div >
    );
}

export default UseState;

function AgeLabel({ age }) {

    const [prevCount, setPrevCount] = useState(age);
    const [trend, setTrend] = useState(null);
    console.log(age, "r", trend)
    useEffect(() => {
        if (prevCount !== age) {
            setTrend(age > prevCount ? 'increasing' : 'decreasing');
            setPrevCount(age);
        }
    }, [age, prevCount]);

    return (
        <>
            <button className='my-button'>{age}{prevCount}</button>
            {trend && <p>The age is {trend}</p>}
        </>
    )
}