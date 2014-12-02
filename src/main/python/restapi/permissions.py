import org.codehaus.jettison.json.JSONObject
import os
def exportSecurityToJSON():

	roles = dict()
	#for role in roleService.list():
	for role in roleService.listMyRoles():
		permissions = dict()
		roleMap = permissionService.getGrantedPermissions(role)
		for key in roleMap.keys():
			permissions[key] = list(permissionService.getGrantedPermissions(role).get(key))
		roles[role] = permissions		
	return roles
response.entity = exportSecurityToJSON()
