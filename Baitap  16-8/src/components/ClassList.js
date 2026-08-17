import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function ClassList({ classes, setClasses }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // State for Add/Edit Form
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState('');
  const [newSubject, setNewSubject] = useState('Software Development Project');
  const [newLecturer, setNewLecturer] = useState('');
  const [newStatus, setNewStatus] = useState('OPEN');

  const searchQuery = searchParams.get('q') || '';
  const subjectFilter = searchParams.get('subject') || 'All Subjects';
  const statusFilter = searchParams.get('status') || 'All';

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams(prev => {
      if (value) prev.set('q', value);
      else prev.delete('q');
      return prev;
    });
  };

  const handleSubjectChange = (e) => {
    const value = e.target.value;
    setSearchParams(prev => {
      if (value !== 'All Subjects') prev.set('subject', value);
      else prev.delete('subject');
      return prev;
    });
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setSearchParams(prev => {
      if (value !== 'All') prev.set('status', value);
      else prev.delete('status');
      return prev;
    });
  };

  const handleEdit = (c) => {
    setEditingId(c.id);
    setNewName(c.name);
    setNewSubject(c.subject);
    setNewLecturer(c.lecturer);
    setNewStatus(c.status);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewName('');
    setNewLecturer('');
    setNewStatus('OPEN');
  };

  const handleAddOrEditClass = () => {
    if (!newName || !newLecturer) {
      alert("Vui lòng nhập đầy đủ tên lớp và giảng viên.");
      return;
    }
    
    if (editingId) {
      setClasses(classes.map(c => 
        c.id === editingId ? { ...c, name: newName, subject: newSubject, lecturer: newLecturer, status: newStatus } : c
      ));
      setEditingId(null);
    } else {
      const newClass = {
        id: Date.now(),
        name: newName,
        subject: newSubject,
        lecturer: newLecturer,
        enrolled: 0,
        status: newStatus,
        students: []
      };
      setClasses([...classes, newClass]);
    }
    
    // clear form
    setNewName('');
    setNewLecturer('');
    setNewStatus('OPEN');
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa lớp học này không?")) {
      setClasses(classes.filter(c => c.id !== id));
    }
  };

  const filteredClasses = classes.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.lecturer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = subjectFilter === 'All Subjects' || c.subject === subjectFilter;
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    return matchesSearch && matchesSubject && matchesStatus;
  });

  const uniqueSubjects = ['All Subjects', ...Array.from(new Set(classes.map(c => c.subject)))];

  return (
    <div>
      {/* Add form */}
      <div className="add-form">
         <div className="form-row">
           <input placeholder="Tên lớp..." value={newName} onChange={e => setNewName(e.target.value)} />
           <select value={newSubject} onChange={e => setNewSubject(e.target.value)}>
             {uniqueSubjects.filter(s => s !== 'All Subjects').map(s => <option key={s} value={s}>{s}</option>)}
           </select>
           <input placeholder="Giảng viên..." value={newLecturer} onChange={e => setNewLecturer(e.target.value)} />
         </div>
         <div className="form-row">
           <label><input type="radio" name="newStatus" value="OPEN" checked={newStatus === 'OPEN'} onChange={e => setNewStatus(e.target.value)} /> OPEN</label>
           <label><input type="radio" name="newStatus" value="CLOSED" checked={newStatus === 'CLOSED'} onChange={e => setNewStatus(e.target.value)} /> CLOSED</label>
         </div>
         <div>
           <button onClick={handleAddOrEditClass} className="btn-add">{editingId ? "Cập nhật lớp" : "Thêm lớp"}</button>
           {editingId && <button onClick={cancelEdit} className="btn-back" style={{marginLeft: '10px', marginBottom: 0}}>Hủy</button>}
         </div>
      </div>

      {/* Filter and Search */}
      <div className="filter-row">
        <input 
          placeholder="Tìm kiếm theo class name hoặc Lecture..." 
          value={searchQuery} 
          onChange={handleSearchChange} 
          className="search-input"
        />
        <select value={subjectFilter} onChange={handleSubjectChange} className="subject-select">
          {uniqueSubjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <div className="status-filter">
          Status: 
          <label><input type="radio" value="All" checked={statusFilter === 'All'} onChange={handleStatusChange} /> All</label>
          <label><input type="radio" value="OPEN" checked={statusFilter === 'OPEN'} onChange={handleStatusChange} /> OPEN</label>
          <label><input type="radio" value="CLOSED" checked={statusFilter === 'CLOSED'} onChange={handleStatusChange} /> CLOSED</label>
        </div>
      </div>

      {/* Table */}
      <table className="class-table">
        <thead>
          <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>SUBJECT</th>
            <th>LECTURER</th>
            <th>ENROLL</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {filteredClasses.map((c, index) => (
            <tr key={c.id}>
              <td>{index + 1}</td>
              <td>{c.name}</td>
              <td>{c.subject}</td>
              <td>{c.lecturer}</td>
              <td>{c.enrolled}</td>
              <td><span className={`status-badge ${c.status.toLowerCase()}`}>{c.status}</span></td>
              <td>
                <button className="btn btn-detail" onClick={() => navigate(`/detail/${c.id}`)}>Detail</button>
                <button className="btn btn-edit" onClick={() => handleEdit(c)}>Edit</button>
                <button className="btn btn-delete" onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClassList;
