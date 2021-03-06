	(function( window, undefined ) {
	var joy = window.joy || (window.joy = {});
	lang=joy.lang; 	
	lang.wlCmOrg={
			orgTypeEk:"类型",
			search:"查询",
			searchContent:"请输入编号或名称查询",
				orgCd:"编号",
			 orgName:"名称",
			 mobile:"移动电话",
			 addr:"地址",
			 isEnableFlag:"状态",
			 isEnableFlagModifyLOCK:"启用",
			 isEnableFlagModifyUSE:"停用",
			 memo:"备注",
	     	isEnableFlagLOCKTitle:"您确定要启用当前单位?",
			isEnableFlagkModifyUSETitle:"您确定要禁用当前单位?",
			existOrgCd:"单位编号已存在，请重新输入",
			fax:"传真",
			tel:"办公电话",
			contact:"联系人",
			email:"电子邮件"
		
	};
	lang.wlCmStorage={
			storageCd:"编号",
			storageName:"名称",
			isInFlag:"默认进货仓库",
			isOutFlag:"默认出库仓库",
			addr:"地址",
			isEnableFlag:"状态",
			 memo:"备注",
			storageName:"名称",
			search:"查询",
			searchContent:"请输入编号或名称查询",
			 isEnableFlagModifyLOCK:"启用",
			 isEnableFlagModifyUSE:"停用",
	     	isEnableFlagLOCKTitle:"您确定要启用当前仓库?",
			isEnableFlagkModifyUSETitle:"您确定要禁用当前仓库?",
			  existStorageCd:"编号已存在，请重新输入",
				existInStorage:"默认进货仓库已存在，是否替换为默认进货仓库？",
				existOutstorage:"默认出库仓库已存在，是否替换为默认出库仓库？"
	};
	lang.wlCmCategory={
			name:"类别名称",
			description:"描述",
			sequ:"序号",
			isEnableFlag:"状态",
			rootType:"根类型",
			paretWindowTitle:"根类型选择",
			isEnableFlagModifyLOCK:"启用",
			isEnableFlagModifyUSE:"停用",
		    isEnableFlagLOCKTitle:"您确定要启用当前物料类别?",
			isEnableFlagkModifyUSETitle:"您确定要禁用当前物料类别?",
			isLastFlag:"末级节点",
			isShowAgency:"是否显示给经销商"

	};
	
	lang.wlCmItem={
			repeatName:"属性",
			hasRepeat:"存在重复，请检查！！！",
			chooseOneRecord:"你只能选择一个产品进行属性配置添加！！！",
			add:"添加",
			itemChoose:"物料选择",
			price:"销售价(元)",
			itemCd:"物料编码",
			itemName:"物料名称",
			spec:"规格型号",
			baseUnitName:"计量单位",
			isEnableFlag:"状态",
			 isEnableFlagModifyLOCK:"启用",
			 isEnableFlagModifyUSE:"停用",
	     	isEnableFlagLOCKTitle:"您确定要启用这些物料?",
			isEnableFlagkModifyUSETitle:"您确定要禁用这些物料?",
			category:"物料类别",
			categoryType:"类别",
			manuItemCd:"厂商编码",
			manuItemName:"厂商品名",
			manuSpec:"厂商型号",
			upperLimit:"库存上限",
			lowerLimit:"库存下限",
			memo:"备注",
			upperLessThanLowerLimit:"库存上限不允许小于库存下限，请检查！",
			existItemCd:"物料编码已存在，请重新输入！",
			existmanuItemCd:"厂商编码已存在，请重新输入！",
			existBarCd:"条形码已存在，请重新输入！",
			barCd:"条形码",
			picUpload:"图片上传",
			picNone1:"此处显示物料图片",
			picNone2:"您还未上传物料图片！",
			itemImg:"物料图片(规格大小：640*480)",
			isScanFlag:"出入库强制扫序号",
			itemCdUse:"使用中的物料将不能修改！",
			isShowAgency:"是否显示给经销商",
			customAttribute:"自定义属性",
			attrName:"属性名称",
			attrValue:"属性值",
			sequ:"序号",
			addAttr:"新增属性",
			customAttribute:"自定义属性",
			addAttrVal:"导入属性",
			languageTypeEk:"语言类型"
	};

	lang.wlCmStorageArea={
				 storageAreaName:"库区名称",
	                         storageId:"仓库",
	                      isEnableFlag:"状态",
	                      isEnableFlagModifyLOCK:"启用",
	         			 isEnableFlagModifyUSE:"停用",
	         	     	isEnableFlagLOCKTitle:"您确定要启用当前库区?",
	         			isEnableFlagkModifyUSETitle:"您确定要禁用当前库区?"
				
		};
	
})(this);