import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import HelloWorld from './src/components/hello-world'

export default class App extends React.Component {
  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }
  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate(nextProp, nextState) {
    return this.state.name !== nextState.name
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { name } = this.state

    return (
      <View style={ styles.container }>
        <HelloWorld name={ name } />
        <Text>{'name: ' + name}</Text>
        <TextInput
          placeholder={ 'type here' }
          onChangeText={ name => this.setState({ name }) }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
