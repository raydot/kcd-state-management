// https://reactjs.org/docs/lifting-state-up.html

/**
 * The takeaway:
 * "There should be a single "source of truth" for any data that
 * changed in a React application.""
 */

import React from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water will boil!</p>;
  }
  return <p>The water will not boil.</p>;
}

// Some changes made to handle state in Calculator.
// See the comment above TemperatureInput() for the
// gritty details.
export class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.state = { temperature: '' };
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  // handleChange(e) {
  //   this.setState({ temperature: e.target.value });
  // }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    // const temperature = this.state.temperature;
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      // This has been extracted to TemperatureInput()
      // <fieldset>
      //   <legend>Enter temperature in degrees Celsius:</legend>
      //   <input value={temperature} onChange={this.handleChange} />
      //   <BoilingVerdict celsius={parseFloat(temperature)} />
      // </fieldset>

      // Old way, dumb components
      // <div>
      //   <TemperatureInput scale='c' />
      //   <TemperatureInput scale='f' />
      // </div>

      // New way, smart components managed with props
      <div>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

// Let's have it also work with Fahrenheit input, and keep
// the values in sync:
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

// Let's make a few small changes to "lift" the temperature
// value and event handler to the Calculator component where
// it can be passed right back to <TemperatureInput> but also
// kept in sync because their values are how calculated from
// the state of the parent.  Original code has been commented.
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // "If something can be derived from props or state, it
    // probably shouldn't be in the state...instead of storing
    // [two values] we just store the last edited temperature and
    // its scale.  The value of the other can be calculated from the
    // render() method.
    this.state = { temperature: '' };
  }

  handleChange(e) {
    // No more autonomy, now it's going to have to report
    // changes to Calculator
    //this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // Let's pass this in instead of maintaining it here:
    // const temperature = this.state.temperature;
    const temperature = this.props.temperature;

    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in degrees {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

/**
 * Good start, but:
 *  1.  The temperatures don't sync
 *  2.  We can no longer display BoilingVerdict from Calculator
 *
 *  Let's fix that!  Starting with creating some conversion functions.
 */

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Here's the function that ties the two together:
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
