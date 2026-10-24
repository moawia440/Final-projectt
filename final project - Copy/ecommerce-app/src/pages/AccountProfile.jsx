import React, { useState } from 'react';

const AccountProfile = ({ user, onUpdateProfile }) => {
  const [formData, setFormData] = useState({
    firstName: user?.firstName || 'Md',
    lastName: user?.lastName || 'Rimel',
    email: user?.email || 'rimel1111@gmail.com',
    address: user?.address || 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة!');
      return;
    }
    // استدعاء دالة تحديث البيانات
    onUpdateProfile(formData);
    alert('تم حفظ التغييرات بنجاح!');
  };

  return (
    <div className="profile-container">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label>First Name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div>
            <label>Last Name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Email</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label>Address</label>
            <input name="address" value={formData.address} onChange={handleChange} />
          </div>
        </div>

        <h3>Password Changes</h3>
        <input name="currentPassword" type="password" placeholder="Current Password" onChange={handleChange} />
        <input name="newPassword" type="password" placeholder="New Password" onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm New Password" onChange={handleChange} />

        <div className="actions">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default AccountProfile;