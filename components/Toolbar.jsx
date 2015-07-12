
import React from 'react'
import Button from './Button.jsx'
import Input from './Input.jsx'
import Table from './Table.jsx'
import { scale } from '../data'

class Toolbar extends React.Component {

  render () {
    let props = this.props

    function toggleGrid () {
      props.toggle('grid')
    }

    function toggleSnap () {
      props.toggle('snap')
    }

    let s = {
      container: {
        padding: scale[3],
      }
    }

    return (
      <div style={s.container}>
        <Table pad>
          <Table.Cell>
            <Button
              primary={props.grid}
              onClick={toggleGrid}>
              Grid
            </Button>
          </Table.Cell>
          <Table.Cell>
            <Button
              primary={props.snap}
              onClick={toggleSnap}>
              Snap
            </Button>
          </Table.Cell>
          {/*
          <Table.Cell>
            <Input
              type='number'
              label='Grid 1'
              name='resolution1'
              value={props.resolution1}
              max={64}
              onChange={props.handleChange} />
          </Table.Cell>
          <Table.Cell>
            <Input
              type='number'
              label='Grid 2'
              name='resolution2'
              value={props.resolution2}
              max={64}
              onChange={props.handleChange} />
          </Table.Cell>
          */}
          <Table.Cell fill />
          <Table.Cell>
            <Input
              type='number'
              label='Zoom'
              name='zoom'
              step={.5}
              min={.5}
              max={64}
              value={props.zoom}
              onChange={props.handleChange} />
          </Table.Cell>
        </Table>
      </div>
    )
  }

}

export default Toolbar

