Departments to add:
- Sales
- Engineering
- Finance
- Legal

Roles:
- Employee
- Supervisor
- Manager

Joins:
- department.id -> role.department_id
- employee.role_Id -> role.title
- employee.manager_id -> role.title.supervisor 

At minimum, be able to:
- Add depts, roles, ee's
- View depts, roles, ee's
- Update ee roles