const api = {
  // 校验用户是否具有资源访问权限
  visualPermissionPermHasPermission: {
    tips: '校验用户是否具有资源访问权限',
    url: '/visual-permission/{spaceHash}/perm/hasPermission',
    headers: { 'Content-Type': 'application/json' },
  },

  // 获取空间角色的权限配置
  visualPermissionGetRolePemConfig: {
    tips: '获取空间角色的权限配置',
    method: 'get',
    url: '/visual-permission/{spaceHash}/role/{roleId}/getRolePemConfig',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  },

  // 新增或修改空间角色的权限配置
  visualPermissionSaveOrUpdate: {
    tips: '新增或修改空间角色的权限配置',
    method: 'post',
    url: '/visual-permission/{spaceHash}/role/{roleId}/saveOrUpdate',
    headers: { 'Content-Type': 'application/json' },
  },
}
export default api
