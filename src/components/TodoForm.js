// src/TodoForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actionRedux';

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [mail, setMail] = useState('');
  const [id, setId] = useState(1);


  const handleAddTask = () => {
  
    if (text && mail) {
      addTask({ id: id, text, mail });
      setId(id + 1); 
      setText('');
      setMail('');
    }
  };

  return (
    
    <div className="container">
       
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Add a new user..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type="text" className="form-control" placeholder="Add a new email..."
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button"
              onClick={handleAddTask}>
              Add User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(TodoForm);
