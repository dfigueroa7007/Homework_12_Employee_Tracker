Departments to add:
- Engineering (Dept.1)
- Finance (Dept.2)
- Legal (Dept.3)
- Sales (Dept.4)

Roles:
- Employee (101)
- Supervisor (102)
- Manager (103)

Joins:
- role.department_id --> department.id
- employee.role_id --> role.title
- employee.manager_id --> 

At minimum, be able to:
- Add depts, roles, EE's
- View depts, roles, EE's
- Update EE roles

Functions required:
- View all EE
- View all EE by dept
- View all EE by manager
- Add EE
- Remove EE
- Update EE role
- Update EE manager