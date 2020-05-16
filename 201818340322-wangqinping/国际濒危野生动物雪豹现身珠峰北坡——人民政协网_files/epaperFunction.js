 $(function () {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var date = today.getDate();
            /*添加年*/
            var yearCount = parseInt(year) - 1990;
            var yearOp = "";
            for (i = 0; i < yearCount; i++) {
                yearOp += "<option value='" + (parseInt(year) - i) + "'>" + (parseInt(year) - i) + "</option>";
            }
            $("#year").append(yearOp);
            /*添加月*/
            var monthOp = "";
            for (i = 1; i <= 12; i++) {
                if (month == i) {
                    monthOp += "<option value='" + i + "' selected='selected'>" + i + "</option>";
                } else {
                    monthOp += "<option value='" + i + "'>" + i + "</option>";
                }
            }
            $("#month").append(monthOp);
            /*添加日*/
            var dayCount = getDay(year, month);
            var dayOp = "";
            for (i = 1; i <= dayCount; i++) {
                if (date == i) {
                    dayOp += "<option value='" + i + "' selected='selected'>" + i + "</option>";
                } else {
                    dayOp += "<option value='" + i + "'>" + i + "</option>";
                }
            }
            $("#day").append(dayOp);

            $("#year").change(function () {
                var _year = $("#year").val();
                var _month = $("#month").val();
                var _dayCount = getDay(_year, _month);
                var _dayOp = "";
                for (i = 1; i <= _dayCount; i++) {
                    _dayOp += "<option value='" + i + "'>" + i + "</option>";
                }

                $("#day").children().remove();
                $("#day").append(_dayOp);
            });

            $("#month").change(function () {
                var _year = $("#year").val();
                var _month = $("#month").val();
                var _dayCount = getDay(_year, _month);
                var _dayOp = "";
                for (i = 1; i <= _dayCount; i++) {
                    _dayOp += "<option value='" + i + "'>" + i + "</option>";
                }

                $("#day").children().remove();
                $("#day").append(_dayOp);
            });


            $("#toEpaper").click(function () {
                var time = $("#year").val() + "-" + $("#month").val() + "-" + $("#day").val();
                var url = "http://dzb.rmzxb.com/index.aspx?date=";
                window.open(url + time, "_blank");
            });
        });

        function look() {
            var time = $("#year").val() + "-" + $("#month").val() + "-" + $("#day").val();
            var url = "http://dzb.rmzxb.com/index.aspx?date=";
            window.parent.open(url + time, "_blank");
        }

        function getDay(year, month){
            if(month ==1 || month==3 || month==5 || month == 7 || month == 8 || month == 10 || month == 12){
                return 31;
            }else if(month ==4 || month==6 || month==9 || month == 11){
                return 30;
            }else if(month == 2){
                if((year % 4 == 0 && year % 100 !=0) || year % 400 == 0){
                    return 28;
                }else{
                    return 29;
                }
            }
        }