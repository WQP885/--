﻿/*
 * 顶部地区切换
 * 
 * Author ：laoshancun
 * 
 * Date:2015年9月21日
 * 
 * 华律topbar修改
 * 修改时间：2017年3月17日10:10:04
 * 
 */  
(function ($, undefined) {
    var base = window['App'] || {};
    base.newHeader = {};
    window['App'] = base;
    var city = {
        "华北": { "北京": 110000, "天津": 120000, "石家庄": 130100, "唐山": 130200, "秦皇岛": 130300, "呼和浩特": 150100, "太原": 140100 },
        "华东": { "上海": 310000, "杭州": 330100, "南京": 320100, "合肥": 340100, "南昌": 360100, "福州": 350100, "济南": 370100, "青岛": 370200, "厦门": 350200, "苏州": 320500, "无锡": 320200, "台州": 331000, "温州": 330300 },
        "华南": { "广州": 440100, "惠州": 441300, "汕头": 440500, "深圳": 440300, "东莞": 441900, "佛山": 440600, "南宁": 450100, "三亚": 460001 },
        "华中": { "郑州": 410100, "武汉": 420100, "长沙": 430100, "岳阳": 430600 },
        "西南": { "成都": 510100, "重庆": 500000, "贵阳": 520100, "昆明": 530100, "拉萨": 540100, "遵义": 520300, "广元": 510800, "绵阳": 510700 },
        "西北": { "西安": 610100, "兰州": 620100, "银川": 640100, "西宁": 630100, "乌鲁木齐": 650100 },
        "东北": { "哈尔滨": 230100, "长春": 220100, "沈阳": 210100, "大连": 210200 },
        "北京": { "北京": 110000, "朝阳区": 110105, "海淀区": 110108, "西城区": 110102, "丰台区": 110106, "东城区": 110101,   "昌平区": 110221, "石景山区": 110107, "通州区": 110112, "大兴区": 110224, "顺义区": 110113, "房山区": 110111, "密云区": 110228, "怀柔区": 110227, "延庆区": 110229, "门头沟区": 110109, "平谷区": 110226 },
        "天津": { "天津": 120000, "南开区": 120104, "和平区": 120101, "红桥区": 120106, "河西区": 120103, "河东区": 120102, "滨海新区": 120321, "河北区": 120105, "津南区": 120112, "北辰区": 120113, "东丽区": 120110, "西青区": 120111, "蓟州区": 120225, "武清区": 120222, "静海区": 120223, "宝坻区": 120224, "宁河区": 120221, "塘沽区": 120107, "汉沽区": 120108, "开发区": 120226 },
        "重庆": { "重庆": 500000, "渝中区": 500103, "江北区": 500105, "沙坪坝区": 500106, "渝北区": 500112, "大渡口区": 500104, "九龙坡区": 500107, "南岸区": 500108, "北碚区": 500109, "巴南区": 500113, "万州区": 500101, "涪陵区": 500102, "合川区": 500382, "永川区": 500383, "长寿区": 500221, "黔江区": 500239, "江津区": 500381, "南川区": 500384, "綦江区": 500222, "彭水县": 500243, "璧山区": 500227, "开州区": 500234, "忠县": 500233, "秀山县": 500241, "潼南区": 500223, "铜梁区": 500224, "大足区": 500225, "荣昌区": 500226, "垫江县": 500231, "武隆区": 500232, "丰都县": 500230, "城口县": 500229, "梁平区": 500228, "巫溪县": 500238, "巫山县": 500237, "奉节县": 500236, "云阳县": 500235, "石柱县": 500240, "酉阳县": 500242 },
        "上海": { "上海": 310000, "浦东新区": 310115, "黄浦区": 310101, "静安区": 310106, "徐汇区": 310104, "长宁区": 310105, "闵行区": 310112, "杨浦区": 310110, "普陀区": 310107, "虹口区": 310109, "宝山区": 310113, "松江区": 310117, "嘉定区": 310114, "金山区": 310116, "青浦区": 310229, "奉贤区": 310226, "崇明区": 310230 },
        "A": { "阿坝": 513200, "阿克苏": 652900, "阿拉善盟": 152900, "阿勒泰": 654300, "阿里": 542500, "安康": 612400, "安庆": 340800, "鞍山": 210300, "安顺": 522500, "安阳": 410500 },
        "B": { "白城": 220800, "百色": 452600, "白山": 220600, "白银": 620400, "巴南区": 500113, "蚌埠": 340300, "保定": 130600, "宝鸡": 610300, "保山": 533000, "宝山区": 310113, "包头": 150200, "宝坻区": 120224, "巴彦淖尔盟": 152800, "巴音郭楞": 652800, "巴中": 513700, "北辰区": 120113, "北海": 450500, "北碚区": 500109, "本溪": 210500, "毕节": 522400, "滨州": 372300, "博尔塔拉": 652700 },
        "C": { "沧州": 130900, "长春": 220100, "常德": 430700, "昌都": 542100, "昌吉": 652300, "长宁区": 310105, "昌平区": 110221, "长沙": 430100, "长寿区": 500221, "长治": 140400, "常州": 320400, "朝阳": 211300, "朝阳区": 110105, "潮州": 445100, "承德": 130800, "成都": 510100, "城口县": 500229, "郴州": 431000, "赤峰": 150400, "池州": 342900, "崇明区": 310230,  "崇左市": 451400, "楚雄": 532300, "滁州": 341100 },
        "D": { "大渡口区": 500104, "大理": 532900, "大连": 210200, "丹东": 210600, "大庆": 230600, "大堂区": 820003, "大同": 140200, "大兴安岭": 232700, "大兴区": 110224, "达州": 513000, "大足区": 500225, "德宏": 533100, "德阳": 510600, "德州": 371400, "垫江县": 500231, "定西": 622400, "迪庆": 533400, "东城区": 110101, "东丽区": 120110, "东营": 370500, "东莞": 441900, "敦化": 222500 },
        "E": { "鄂尔多斯": 152700, "恩施": 422800, "鄂州": 420700 },
        "F": { "防城港": 450600, "房山区": 110111, "丰都县": 500230, "奉节县": 500236, "风顺堂区": 820005, "丰台区": 110106, "奉贤区": 310226, "佛山": 440600, "涪陵区": 500102, "抚顺": 210400, "阜新": 210900, "阜阳": 341200, "福州": 350100, "抚州": 362500 },
        "G": { "甘南": 623000, "赣州": 360700, "甘孜": 513300, "高雄": 830110, "广安": 511600, "广元": 510800, "广州": 440100, "贵港": 450800, "桂林": 450300, "贵阳": 520100, "果洛": 632600, "固原": 642200 },
        "H": { "哈尔滨": 230100, "海北": 632200, "滨海新区": 120321, "海淀区": 110108, "海东": 632100, "海口": 460100, "海南州": 632500, "海西": 632800, "哈密": 652200, "邯郸": 130400, "汉沽区": 120108, "杭州": 330100, "汉中": 610700, "河北区": 120105, "鹤壁": 410600, "河池": 452700, "合川区": 500382, "河东区": 120102, "合肥": 340100, "鹤岗": 230400, "黑河": 231100, "衡水": 131100, "衡阳": 430400, "和平区": 120101, "和田": 653200, "河西区": 120103, "河源": 441600, "菏泽": 372900, "贺州": 452400, "省直辖": 469000, "红河": 532500, "虹口区": 310109, "红桥区": 120106, "花地玛堂区": 820001, "淮安": 320800, "淮北": 340600, "怀化": 431200, "淮南": 340400, "怀柔区": 110227, "花莲县": 830270, "黄冈": 421100, "黄南": 632300, "黄浦区": 310101, "黄山": 341000, "黄石": 420200, "呼和浩特": 150100, "惠州": 441300, "葫芦岛": 211400, "呼伦贝尔市": 152100, "湖州": 330500 },
        "J": { "嘉定区": 310114, "嘉模堂区": 820006, "佳木斯": 230800, "吉安": 362400, "江北区": 500105, "江津区": 500381, "江门": 440700, "焦作": 410800, "嘉兴": 330400, "嘉义市": 830170, "嘉义县": 830240, "嘉峪关": 620200, "揭阳": 445200, "吉林市": 222600, "即墨": 373000, "济南": 370100, "金昌": 623100, "晋城": 140500, "静安区": 310106, "景德镇": 360200, "静海区": 120223, "荆门": 420800, "荆州": 421000, "金华": 330700, "济宁": 370800, "津南区": 120112, "基隆市": 830150, "金山区": 310116, "晋中": 142400, "锦州": 210700, "吉首": 434000, "九江": 360400, "九龙": 840110, "九龙坡区": 500107, "酒泉": 622100, "鸡西": 230300, "蓟州区": 120225, "济源市": 412900 },
        "K": { "开发区": 120226, "开封": 410200, "开州区": 500234, "喀什": 653100, "克拉玛依": 650200, "克孜勒苏柯尔克孜": 653000, "昆明": 530100 },
        "L": { "来宾": 452800, "莱芜": 371200, "廊坊": 131000, "兰州": 620100, "拉萨": 540100, "乐山": 511100, "梁平区": 500228, "凉山": 513400, "连云港": 320700, "聊城": 371500, "辽阳": 211000, "辽源": 220400, "丽江": 533200, "临沧": 533500, "临汾": 142600, "临夏": 622900, "临沂": 371300, "林芝": 542600, "丽水": 332500, "六安": 342400, "六盘水": 520200, "柳州": 450200, "陇南": 622600, "龙岩": 350800, "娄底": 432500, "路氹城": 820008, "洛阳": 410300, "吕梁": 142900 },
        "M": { "马鞍山": 340500, "茂名": 440900, "眉山": 513800, "梅州": 441400, "门头沟区": 110109, "绵阳": 510700, "苗栗县": 830200, "密云区": 110228, "牡丹江": 231000 },
        "N": { "南岸区": 500108, "南昌": 360100, "南充": 511300, "南川区": 500384, "南京": 320100, "南开区": 120104, "南宁": 450100, "南平": 350700, "南沙群岛": 460038, "南通": 320600, "南投县": 830220, "南阳": 411300, "那曲": 542400, "内江": 511000, "宁波": 330200, "宁德": 352200, "宁河区": 120221, "怒江": 533300 },
        "P": { "盘锦": 211100, "攀枝花": 510400, "彭水县": 500243, "平顶山": 410400, "屏东县": 830250, "平谷区": 110226, "平凉": 622700, "萍乡": 360300, "澎湖县": 830290, "浦东新区": 310115, "普洱": 532700, "莆田": 350300, "普陀区": 310107 },
        "Q": { "黔东南": 522600, "潜江": 429005, "黔江区": 500239, "黔南": 522700, "黔西南": 522300, "青岛": 370200, "青浦区": 310229, "庆阳": 622800, "清远": 441800, "秦皇岛": 130300, "钦州": 450700, "琼海": 460200, "齐齐哈尔": 230200, "七台河": 230900, "泉州": 350500, "曲靖": 530300 },
        "R": { "日喀则": 542300, "日照": 371100, "荣昌区": 500226 },
        "S": { "三门峡": 411200, "三明": 350400, "三沙市": 461000, "三亚": 460001, "商洛": 612500, "商丘": 411400, "上饶": 362300, "上虞": 332600, "山南": 542200, "汕头": 440500, "汕尾": 441500, "韶关": 440200, "绍兴": 330600, "邵阳": 430500, "沙坪坝区": 500106, "圣安多尼堂区": 820002, "圣方济各堂区": 820007, "省直辖": 429000, "沈阳": 210100, "深圳": 440300, "石河子": 659001, "石家庄": 130100, "石景山区": 110107, "市区": 820100, "市区": 840100, "十堰": 420300, "石柱县": 500240, "石嘴山": 640200, "双鸭山": 230500, "顺义区": 110113, "沭阳": 321600, "朔州": 140600, "四平": 220300, "松江区": 310117, "松原": 220700, "绥化": 232300, "遂宁": 510900, "随州": 429001, "宿迁": 321300, "苏州": 320500, "宿州": 341300 },
        "T": { "塔城": 654200, "泰安": 370900, "台北": 830100, "台东县": 830280, "台南市": 830140, "太原": 140100, "台中市": 830130, "泰州": 321200, "台州": 331000, "塘沽区": 120107, "唐山": 130200, "桃园县": 830180, "天门": 429006, "天水": 620500, "铁岭": 211200, "铜川": 610200, "通化": 220500, "铜梁区": 500224, "通辽": 153000, "铜陵": 340700, "铜仁": 522200, "通州区": 110112, "吐鲁番": 652100 },
        "W": { "望德堂区": 820004, "万州区": 500101, "潍坊": 370700, "威海": 371000, "渭南": 610500, "文山": 532600, "温州": 330300, "乌海": 150300, "武汉": 420100, "芜湖": 340200, "乌兰察布盟": 152600, "武隆区": 500232, "乌鲁木齐": 650100, "武清区": 120222, "巫山县": 500237, "武威": 622300, "无锡": 320200, "巫溪县": 500238, "吴忠": 640300, "梧州": 450400 },
        "X": { "厦门": 350200, "西安": 610100, "湘潭": 430300, "湘西": 433100, "襄阳": 420600, "咸宁": 427000, "仙桃": 429004, "咸阳": 610400, "孝感": 420900, "西城区": 110102, "锡林郭勒盟": 152500, "兴安盟": 152200, "新北市": 830120, "省直辖": 659000, "邢台": 130500, "新竹市": 830160, "新竹县": 830190, "西宁": 630100, "新界": 840120, "新乡": 410700, "信阳": 411500, "新余": 360500, "忻州": 142200, "西青区": 120111, "西沙群岛": 460037, "西双版纳": 532800, "秀山县": 500241, "宣城": 342500,"许昌": 411000, "徐汇区": 310104, "徐州": 320300 },
        "Y": { "雅安": 513100, "延安": 610600, "延边": 222400, "盐城": 320900, "阳江": 441700, "杨浦区": 310110, "阳泉": 140300, "扬州": 321000, "延庆区": 110229, "烟台": 370600, "宜宾": 511500, "宜昌": 420500, "伊春": 230700, "宜春": 362200, "伊犁": 654000, "宜兰县": 830260, "银川": 640100, "营口": 210800, "鹰潭": 360600, "益阳": 430900, "永川区": 500383, "永州": 431100, "酉阳县": 500242, "渝北区": 500112, "岳阳": 430600, "榆林": 612700, "玉林": 450900, "运城": 142700, "云浮": 445300, "云林县": 830230, "云阳县": 500235, "玉树": 632700, "玉溪": 530400, "渝中区": 500103 },
        "Z": { "枣庄": 370400, "彰化县": 830210, "张家界": 430800, "张家口": 130700, "张掖": 622200, "漳州": 350600, "湛江": 440800, "肇庆": 441200, "昭通": 532100, "通辽市": 152300, "郑州": 410100, "镇江": 321100, "中山": 442000, "中卫市": 640500, "忠县": 500233, "周口": 412700, "舟山": 330900, "珠海": 440400, "驻马店": 412800, "株洲": 430200, "淄博": 370300, "自贡": 510300, "资阳": 513900, "遵义": 520300, "漯河": 411100, "綦江区": 500222, "潼南区": 500223, "璧山区": 500227, "闵行区": 310112, "濮阳": 410900, "泸州": 510500, "衢州": 330800, "亳州": 343000 }
    };
    var tabs = [["华北", "华东", "华南", "华中", "西南", "西北", "东北"], ["北京", "天津", "重庆", "上海"], ["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["G"],["H"], ["J"], ["K"], ["L"], ["M"], ["N"], ["P"], ["Q"], ["R"], ["S"], ["T"], ["W"], ["X"], ["Y"], ["Z"]];
 

    base.newHeader.init = function () {

        var defaultSetting = {
            'showType': 'both',
            'width': 'small'
        };
        this.showType =   defaultSetting.showType; 
        this.width =  defaultSetting.width;

        base.newHeader.show();
         
    };
     
    //添加切换城市点击事件
    base.newHeader.changeCity = function (cityId) {
        var endtiem = 60 * 60 * 24 * 3;
        new Cookie().set('IPNAME','0'+ cityId.toString() , endtiem, '/', '.64365.com');
        window.location.reload();
    };
  
    base.newHeader.show = function () {  
            base.newHeader.city(); 
    };
    //初始化城市选择
    base.newHeader.city = function () { 
        var citylist = $('#citylist');
        var html = '';

        $.each(tabs, function (i, v) {
            var subhtml = '';
            html += '<div class="item">';
            var key = '';
            $.each(v, function (m, n) {
                var downhtml = '';
                $.each(city[n], function (x, y) {
                    downhtml += '<span id="' + y + '">' + x + '</span>';
                });
                subhtml += '<dl><dt>' + n + '</dt><dd>' + downhtml + '</dd></dl>';
                if (i == 0) {
                    key = '热门城市';
                } else if (i == 1) {
                    key = '直辖市';
                } else {
                    key = n;
                }
            });

            if (key == $('#tab_list').children('span').text()) {
                $('#tab_list').children('span').addClass('cur');
            }
            html += subhtml+ '</div>';
        });
        citylist.html(html);
    };

    $('#citylist').on('click', 'span', function () {
        var id = $(this).attr('id') || 0;
        base.newHeader.changeCity(id);
    });
})(jQuery);


$(function () {
    window.App.newHeader.init();
});