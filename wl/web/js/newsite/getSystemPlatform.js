//ƽ̨���豸�Ͳ���ϵͳ
function getSystemPlatform(){
	var system ={
		win : false,
		mac : false,
		xll: false
	};
	//���ƽ̨
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	//��ת��䣬������ֻ����ʾ��Զ���ת��wap.baidu.comҳ��
	  if(system.win||system.mac||system.xll){
		  return "computer";
	}else{//�ֻ���
	 //window.location.href="�ֻ�վ����";
	  return "mobile";
	}
}