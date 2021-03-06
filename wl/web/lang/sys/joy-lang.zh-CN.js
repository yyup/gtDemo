(function( window, undefined ) {
	var joy = window.joy || (window.joy = {});
	lang=joy.lang;
	lang.wlCmUser={
			pageTitle:"用户管理",
			name:"姓名",
			loginName:"登录名",
			password:"密码",
			department:"部门",
			sex:"性别",
			ename:"英文名",
			nationality:"国籍",
			code:"人员编号",
			identityCard:"身份证号码",
			birthday:"生日",
			nativePlace:"籍贯",
			party:"党派",
			tel:"办公室电话",
			fax:"办公室传真",
			mobileTel:"手机号码",
			email:"电子邮件",
			joinDate:"来本单位日期",
			joinType:"来本单位方式",
			boss:"上级",
			assistant:"助理",
			ip:"IP",
			sequ:"显示顺序号",
			type:"类型",
			state:"状态",
			isProgrammer:"是否程序员",
			isAdmin:"是否管理员",
			loginDate:"登录时间",
			windowTitle:"用户信息",
			sequShot:"排序",
			level:"等级",
			departmentwindowTitle:"选择部门",
			dutyroleTitle:"设置角色",
			group:"角色",
			addGroup:"添加角色",
			modifyPwd:"重置密码",
			modifyPwdTitle:"您确定要重置当前账号密码?"
	};
	lang.wlCmDepartment={
			pageTitle:"组织机构管理",
			name:"名称",
			state:"状态",
			sequ:"顺序",
			parent:"上级机构",
			leader:"机构负责人",
			code:"机构代码",
			fullName:"机构全称",
			mainLevel:"机构级别",
			subLevel:"机构级别2",
			property:"机构属性",
			address:"地址",
			postCode:"邮编",
			canton:"行政区域",
			tel:"电话",
			fax:"传真",
			explains:"说明",
			memo:"备注" ,
			windowTitle:"机构信息",
			parentWindowTitle:"选择上级机构",
			faxError:"传真输入错误"
	};
	lang.wlCmDutyrole={
			windowTitle:"编辑内容",
			detailWindowTitle:"详细内容",
			pageTitle:"角色管理",
			name:"名称",
			code:"代码",
			sequ:"排序",
			state:"有效",
			description:"说明",
			remarks:"备注",
			security:"权限"
	};
	lang.wlCmSecurityManage={
			pageTitle:"权限模块注册",
			name:"名称",
			value:"权限代码",
			state:"状态",
			sequ:"顺序",
			parent:"父权限", 
			type:"类型", 
			explains:"说明",
			memo:"备注" ,
			windowTitle:"权限信息",
			url:"相关网址",
			query:"请求参数",
			add:"确定",
			addUrl:"添加网址",
			urlwindowTitle:"模块请求网址",
			parentWindowTitle:"选择父级模块/权限"
	};
	lang.wlCmSecurity={
			pageTitle:"权限设置",
			security:"权限",
			type:"类型",
			department:"组织机构",
			owner:"拥有者",
		    windowTitle:"分配权限",
		    securityName:"功能名称:",
		    securityList:"拥有权限:",
		    securityOwner:"权限拥有者:",
		    ownerType:"权限拥有者类型",
		    departmentChoice:"机构:",
		    choiceUser:"选择人员...",
		    choiceGroup:"选择角色...",
		    choice:"请选择...",
		    choiceModule:"权限模块",
		    add:"分配权限",
		    moduelSet:"权限设置",
		    departmentwindowTitle:"所属机构"
		    	
	};
	lang.wlCmMenu={
			pageTitle:"菜单管理",
			name:"名称",
			state:"状态",
			sequ:"顺序",
			parent:"上级菜单",
			value:"网址",
			target:"目标",
			security:"查看权限",
			explains:"说明",
			memo:"图标",
			choice:"请选择..."  ,
			windowTitle:"编辑内容",
			detailTitle:"菜单详细"
	};
	lang.wlCmLog={
			windowTitle:"编辑内容",
			detailWindowTitle:"详细内容",
			pageTitle:"日志管理",  
			user:"操作人",
			content:"操作内容",
			ip:"IP地址",
			nodeTime:"操作时间",
			pcName:"机器名称",
			memo:"备注",
			systemName:"系统名称",
			moduleName:"模块名称",
			userName:"用户名称",
			startTime:"起始时间",
			endTime:"结束时间"
	}; 
	lang.wlCmType={
			pageTitle:"字典管理", 
			name:"名称",
			code:"代码",
			is_parent:"根节点",
			parent:"所属上级",
			type:"类型",
			sequ:"排序",
			value:"值",
			state:"有效",
			explains:"说明",
			memo:"备注",
			security_level:"安全级别",
			choice:"请选择..." ,
			windowTitle:"编辑内容",
			detailTitle:"字典详细"
	}; 
	lang.wlCmDocPath={
			pageTitle:"文件路径管理",
			windowTitle:"文件路径编辑",
			detailTitle:"文件路径详细",
			sourceCode:"来源代号",
			path:"存放路径",
			explains:"说明"
	};
	lang.wlCmParameterSetting={			
			name:"参数名称",
			setKey:"参数KEY",
			setValue:"参数值"
	};
	
})(this);