/**
 * Created by shen on 2016/1/12.
 */
/**
 *
 * http://www.rmzxb.com.cn/js/detailPagePublicJs.js
 * ��js�ṩ������������ isIe isMobile
 *
 * �÷�
 * <script> writeAdv(true,true,"")</script>
 * ��һ���޶�pc���ڶ����޶��ƶ���
 * ע��
 * text��',��������"
 *
 * adv_250x250_1
 *
 sample:

<script>writeAdv(true,false,"adv_250x300_0")</script>

 */
/*
* ImageDetail  ��
* ArticleDetail  ��
*
* */
var advCollection={
	//����ҳ
	"adv_728x90_0" : '<div class="advContent"><div align="center"><script type="text/javascript">var cpro_id = "u1693387";</script><script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script></div></div>',



	"adv_728x90_1" : '<div class="advContent"><div style="position: relative; display: inline; border: none; padding: 0px; margin: 0px; visibility: visible; overflow: hidden;"><script type="text/javascript">	var allyes_siteid="1362", allyes_output=1, allyes_channedid="2276",allyes_ad_width="728",allyes_ad_height="90",allyes_adspaceid="342-910",allyes_host_addr="mmae.qtmojo.com";</script><script id="allyes_mm_ad_1362_2276_342-910" type="text/javascript" src="http://1.qtmojo.com/mediamax/MediaMax.js"></script></div></div>',

	"adv_728x90_2" : '<div class="advContent"><div style="height:40px"></div><script charset="gbk" src="http://p.tanx.com/ex?i=mm_58500226_6900940_24396084"></script></div>',

	"adv_250x250_0": '<div class="advContent"><div style="height:255;"><script charset="gbk" src="http://p.tanx.com/ex?i=mm_58500226_6900940_24368348"></script></div></div>',

	"adv_250x250_1": '<div class="advContent"><div style="height:255;"><script charset="gbk" src="http://p.tanx.com/ex?i=mm_58500226_6900940_24394056"></script></div></div>',

	"adv_250x250_2": '<div class="advContent"><div style="position: relative; display: inline; border: none; padding: 0px; margin: 0px; visibility: visible; overflow: hidden;"><script type="text/javascript">var allyes_siteid="1362", allyes_output=1, allyes_channedid="2276",allyes_ad_width="250",allyes_ad_height="250",allyes_adspaceid="342-914",allyes_host_addr="mmae.qtmojo.com";</script><script id="allyes_mm_ad_1362_2276_342-914" type="text/javascript" src="http://1.qtmojo.com/mediamax/MediaMax.js"></script></div></div>',

	"adv_250x300_0": '<div class="advContent"><div><script type="text/javascript">var cpro_id = "u1694565";</script><script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script></div></div>',

	//���ù��
	"adv_float_top_0": '<div class="advContent"><script type="text/javascript">var cpro_id="u2131508";</script><script src=" http://su.bdimg.com/static/dspui/js/uf.js" type="text/javascript"></script></div>',

	//ͼƬ����
	"adv_float_side_0": '<div class="advContent"><script type="text/javascript">var cpro_id = "u1680664";</script><script src="http://cpro.baidustatic.com/cpro/ui/f.js" type="text/javascript"></script></div>',

	"adv_1000x90_0": '<div class="advContent"><div><script type="text/javascript">var cpro_id = "u1698955";</script><script src="http://cpro.baidustatic.com/cpro/ui/c.js" type="text/javascript"></script></div></div>',
	//�б�ҳ
	"adv_listRight_0": '<div class="bw_250 mlrAuto" style="height:255;"><script charset="gbk" src="http://p.tanx.com/ex?i=mm_58500226_6900940_24714537"></script></div>',



	/*
	 * example:
	 * ,"name":'text'
	 *
	 * */

};
function writeAdv(advInPc, advInMobile, advTarget) {
	var advText=advCollection[advTarget];
	if(advInPc&& !isMobile) {
		document.write(advText);
	}
	if(advInMobile&&isMobile) {
		document.write(advText);
	}
	//document.close();
}
/*
 function adv002(advInPc, advInMobile) {
 var text='';
 if(advInPc&& !isMobile) {
 document.write(text);
 }
 if(advInMobile&&isMobile) {
 document.write(text);
 }
 }
 */
