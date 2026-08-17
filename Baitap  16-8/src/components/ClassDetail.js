import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ClassDetail({ classes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const classItem = classes.find(c => c.id === parseInt(id));

  if (!classItem) {
    return <div>Class not found</div>;
  }

  return (
    <div className="detail-container">
      <button className="btn-back" onClick={() => navigate(-1)}>← Quay lại danh sách</button>
      
      <div className="detail-card">
        <h2>Chi tiết lớp: {classItem.name}</h2>
        <p><strong>Môn học (Subject):</strong> {classItem.subject}</p>
        <p><strong>Giảng viên (Lecturer):</strong> {classItem.lecturer}</p>
        <p><strong>Trạng thái (Status):</strong> <span className={`status-badge ${classItem.status.toLowerCase()}`}>{classItem.status}</span></p>
      </div>

      <h3>Danh sách sinh viên đã Enroll ({classItem.students.length}):</h3>
      
      {classItem.students.length > 0 ? (
        <table className="student-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {classItem.students.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Chưa có sinh viên nào đăng ký vào lớp học này.</p>
      )}
    </div>
  );
}

export default ClassDetail;
