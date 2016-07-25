# react component approach #

## way to create components ##
- ES5 createClass
- ES6 class
- ES5 stateless function
- ES6 stateless function
- many more...

### ES5 class component ###

  ```Javascript
  var HelloWorld = React.createClass({
    render: function() {
      return (
        <h1>Hello World</h1>
      );
    }
  });
  ```

### ES6 class component ###
- react in ES6
  - **No autobind**
    Works fine with ES5 createClass
    ```Javascript
    <div onClick={this.handleClick}></div>
    ```
    require explicit bind with ES6 Class
    ```Javascript
    <div onClick={this.handleClick.bind(this)}></div>
    ```
    for performance reasons bind in constructor
    ```Javascript
    class Contacts estens React.Component {
      constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    }
    ```
  - PropTypes declared separately
  - Default props declared separately
  - set initial state in constructor

### ES5 Stateless Functional Component ###

    ```Javascript
    var  HelloWorld = function(props) {
      return (
        <h1>Hello World</h1>
      );
    };
    ```

### ES6 Stateless Functional Component ###

    ```Javascript
    const HelloWorld = (props) => {
      return (
        <h1>Hello World</h1>
      );
    };
    ```

  **9 Benefits from stateless functional components**
      - No class needed
      - Avoid 'this' keyword
      - Enforced best practice (don't support states!) 
      - high signal-to-noise ratio
      - enhanced code completion / intellisense
      - bloated components are obious
      - easy to understand
      - easy test
      - performance
  
  **Use stateless functional componets when possible**
  
|  class component | stateless components  |
|---|---|
|  State | Everywhere else |
|  Refs | |
|  Lifecycle methods | |
|  Child functions (for performance) | |

## other ways to create components ##
- Object.create
- Mixins
- Parasitic Components
- StampIt

more info: [on this link](bit.ly/react-define-component)

## Container vs Presentation Component ##

|  Container | Presentation  |
|---|---|
|  little to no markup | Nearly all markup |
|  pass data and actions down | receive data and actions via props |
| knows about Redux | doesn't know about Redux |
| often stateful | typically functional components |

  - Jargon ..
  Container == smart, stateful, Controller View
  Presentational == dumb, stateless, View
