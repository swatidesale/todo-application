import React, { Component } from 'react'
import { Modal, Form, Input, Button, message, DatePicker } from 'antd'
import { connect } from 'react-redux'
import moment from 'moment'

import { addTodo, updateTodo } from '../../actions'

class CreateModal extends Component {
  state = {
    isSavingInProgress: false,
    dateAdded: ''
  }

  async wait(duration = 1000) {
    const { onCancel } = this.props
    await new Promise(resolve => setTimeout(resolve, duration));
    this.setState({ isSavingInProgress: false })
    onCancel()
  }
  
  handleFormSubmit = (values) => {
    const { dispatch, isAddTodo, todo } = this.props
    this.setState({ isSavingInProgress: true })
    this.wait(2000)

    if(isAddTodo && Object.keys(todo).length) {
      const todos = {
        action: values.action,
        date_added: values.date_added.format('YYYY/MM/DD')
      }
      dispatch(updateTodo(todo, todos))
    } else if(isAddTodo) {
      const todos = {
        action: values.action,
        date_added: values.date_added.format('YYYY/MM/DD')
      }
      dispatch(addTodo(todos))
    }
  }

  handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    this.setState({ isSavingInProgress: false })
    message.error('Something went wrong please try again!')
  }

  render() {
    const { title, onCancel, isAddTodo, todo, buttonText } = this.props
    const { isSavingInProgress } = this.state

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    }

    return(
      <Modal
        visible={ isAddTodo }
        title={ title }
        onCancel={ onCancel }
        footer={ false }
      >
        <Form
           {...layout}
           name="basic"
           initialValues={{ remember: true }}
           onFinish={ this.handleFormSubmit }
           onFinishFailed={ this.handleFinishFailed }
        >
          <Form.Item
            label="Action"
            name="action"
            rules={[{ required: true, message: 'Please input your action' }]}
            initialValue={ todo ? todo.action : '' }
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date Added"
            name="date_added"
            rules={[{ required: true, message: 'Please select date' }]}
            initialValue={ moment(todo ? todo.date_added : '')  }
          >
            <DatePicker onChange={this.onChange} format='YYYY/MM/DD'/>
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              loading={ isSavingInProgress }
            >
              { buttonText }
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    )
  }
}
 
const connectedCreateModal = connect(state => ({
  users: state.user,
}))(CreateModal)

export default connectedCreateModal
