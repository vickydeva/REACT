// const heading = document.createElement('h1');
// heading.innerHTML = 'Hello All!';
// const root = document.getElementById('root');
// root.appendChild(heading);

// creating HTML element using React...

// const heading = React.createElement(
//   'h1',
//   { id: 'head', class: 'general' },
//   'hi there from React!'
// ); // creates objects.
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading); // creates html elements and put it in the root i.e. (root id) --> div element.

// Nested and sibling HTML tags in React.

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement(
    'div',
    { id: 'child1' },
    React.createElement('h1', { id: 'main-head' }, 'this is the child 1')
  ),
  React.createElement(
    'div',
    { id: 'child2' },
    React.createElement('h1', { id: 'sec-head' }, 'this is the child 2')
  ),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
