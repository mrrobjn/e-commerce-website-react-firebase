import React, { useContext } from "react";
import { UserContext } from "~/context/UserContext";
import "~~/components/admin/AdminUser.scss";
const AdminUsers = () => {
  const users = useContext(UserContext);
  return (
    <div className="admin-user-container">
      <div className="heading">
        <h1>Quản lí khách hàng</h1>
      </div>
     <div className="table-container">
       <table>
         <thead>
           <tr>
             <th>#</th>
             <th>Email</th>
             <th>Họ và tên</th>
             <th>Số điện thoại</th>
             <th>Ngày sinh</th>
             <th>Vai trò</th>
           </tr>
         </thead>
         <tbody>
           {users?.map((user, index) => {
             return (
               <tr key={user.data.uid}>
                 <td className="index">{index + 1}</td>
                 <td className="email">{user.data.email}</td>
                 <td className="name">{user.data.name || ""}</td>
                 <td className="phone">{user.data.phoneNumber || ""}</td>
                 <td className="day-of-birth">{user.data.dayOfBirth || ""}</td>
                 <td className="role">{user.data.role || "user"}</td>
               </tr>
             );
           })}
         </tbody>
       </table>
     </div>
    </div>
  );
};

export default AdminUsers;
