import React from 'react';

class FullstackAssignment1 extends React.Component {
  constructor(props) {
      super(props);
      // Initialize the state with an array of color states for each item
      this.state = {
          items: ['Who is Better?', 'Lebron', 'Jordan'],
          colorIndices: [0, 0, 0] // Each item starts with the index of 0
      };
      this.colors = ['ui blue label', 'ui red label', 'ui green label', 'ui orange label'];
  }

  // Function to change the color of the item at the specified index
  changeItemColor = (index) => {
      this.setState(prevState => {
          let newColorIndices = [...prevState.colorIndices];
          newColorIndices[index] = (newColorIndices[index] + 1) % this.colors.length;
          return { colorIndices: newColorIndices };
      });
  }

  render() {
      return (
          <div className='ui unstackable items'>
              {this.state.items.map((item, index) => (
                  <ChildComponent 
                      key={index}
                      label={item}
                      labelColorClass={this.colors[this.state.colorIndices[index]]}
                      onChangeColor={() => this.changeItemColor(index)}
                  />
              ))}
          </div>
      );
  }
}

class ChildComponent extends React.Component {
  render() {
      const { label, labelColorClass, onChangeColor } = this.props;
      return (
          <div className='item' style={{ padding: '10px', border: '1px solid #ddd', marginBottom: '10px' }}>
              <div className={labelColorClass} style={{ marginBottom: '5px' }}>
                  {label}
              </div>
              <button className='ui button' onClick={onChangeColor}>
                  Hit Me!
              </button>
          </div>
      );
  }
}

export default FullstackAssignment1;


