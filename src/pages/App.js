import React, { Component } from 'react';
import { Tabs } from 'antd'

import TodoList from '../components/TodoList'
import 'antd/dist/antd.css'
import './App.css'

class App extends Component {
  static tabKeys = {
    ALL_TASK_TAB: 'all-task-tab',
    PENDING_TASK_TAB: 'pending_task-tab',
    COMPLETED_TASk_TAB: 'completed_task_tab'
  }

  handleTabSwitch = (tabKey) => {
    this.setState({
      activeTabKey: tabKey,
    })
  }

  get getAllTasks() {
    return (
      <Tabs.TabPane
        tab="All Tasks"
        key={ App.tabKeys.ALL_TASK_TAB }
      >
        <TodoList />
      </Tabs.TabPane>
    )
  }

  get getPendingTasks() {
    return (
      <Tabs.TabPane
        tab="Pending Tasks"
        key={ App.tabKeys.PENDING_TASK_TAB }
      >
        <div>Pending Tasks....</div> 
      </Tabs.TabPane>
    )
  }

  get getCompletedTasks() {
    return (
      <Tabs.TabPane
        tab="Completed Tasks"
        key={ App.tabKeys.COMPLETED_TASk_TAB }
      >
        <div>Completed Tasks....</div> 
      </Tabs.TabPane>
    )
  }

  render() {
    return (
      <div>
      <header className="App-header">
        <Tabs onChange={ this.handleTabSwitch }>
          { this.getAllTasks }
          { this.getPendingTasks }
          { this.getCompletedTasks }
        </Tabs>
      </header>
    </div>
    )
  }
}

export default App
