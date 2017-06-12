(function ($, common) {
    //IE8兼容设置
    if (!window.location.origin) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    //给Array添加contains方法
    Array.prototype.contains = function (item) {
        return RegExp("\\b" + item + "\\b").test(this);
    };
    common.config = {
        sourceurl: "http://10.28.19.126:8012",
        downloadurl: "http://vmipsatfs.isoftstone.com:8012/download.ashx"
    };
    /*
    *授权方法
    */
    common.authFun = function (options, success, error) {
        if (options || options.url) {
            $.ajax({
                url: options.url,
                data: options.data,
                type: "post",
                headers: {
                    "Authorization": $.cookie.get("token"),
                    "key": options.auth
                },
                success: function (data) {
                    success(data);
                },
                error: function () {
                    error();
                }
            });
        } else {
            console.log("请设置url参数。。。。");
            return
        }
    };
    /*
    *未授权方法
    */
    common.unAuth = function (options, success, error) {
        if (options || options.url) {
            $.ajax({
                url: options.url,
                data: options.data,
                success: function (data) {
                    success(data);
                },
                error: function () {
                    error();
                }
            });
        } else {
            console.log("请设置url参数。。。。");
            return
        }

    };
    common.getNextNode = function (el) {
        if (el.nextSibling) {
            if (el.nextSibling.nodeType === 3) {
                return el.nextElementSibling;
            } else { return el.nextSibling; }
        } else {
            return el.nextSibling;
        }
    };
    common.showError = function (el, data) {
        var vid = $(el).attr("validid");
        var vm = $.vmodels[vid];
        if (!vm.validshow) {
            vm.validshow = true;
        }
        vm.errorinfo = data.getMessage();
        vm.validtype = 'error';
    };
    common.removeError = function (el) {
        var vid = $(el).attr("validid");
        var vm = $.vmodels[vid];
        vm.validtype = 'success';
    };
    /*
    *获取rul参数
    */
    common.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    };
    /*
    *删除左右两端的空格
    */
    common.trim = function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
    /*
   *删除左边的空格
   */
    common.ltrim = function (str) {
        return str.replace(/(^\s*)/g, "");
    }
    /*
   *删除右边的空格
   */
    common.rtrim = function (str) {
        return str.replace(/(\s*$)/g, "");
    }
    /*
    *获取部门放大镜
    */
    common.getDepartmentSelectList = function (options, success, error) {
        common.authFun(options, success, error);
    };
    /*
    *获取公司放大镜
    */
    common.getCompanySelectList = function (options, success, error) {
        common.authFun(options, success, error);
    };
    /*
    *获取员工放大镜
    */
    common.getEmployeeSelectList = function (options, success, error) {
        common.authFun(options, success, error);
    };
    /*
    *获取资源服务器url
    */
    common.getResourceUrl = function (sourceurl) {
        return common.config.sourceurl + sourceurl;
    }

    common.compareDate = function (firstdate, seconddate, num) {
        if (firstdate && firstdate) {
            var d = new Date(firstdate);
            var n = seconddate;
            var e = (n - d) / 1000;
            if (e <= parseInt(num * 24 * 60 * 60) && e > 0) {
                return true;
            } else {
                return false;
            }
        } else { return false }

    }

    /*下载文件方法*/
    common.download = function (prdname, updir, fname,vertualname) {
        var form = document.createElement("form");
        var element1 = document.createElement("input");
        var element2 = document.createElement("input");
        var element3 = document.createElement("input");
        var element4 = document.createElement("input");
	var element5 = document.createElement("input");
        element1.value = fname;
        element1.name = "fname";
        form.appendChild(element1);
        element2.value = prdname;
        element2.name = "prdname";
        form.appendChild(element2);
        element3.value = updir;
        element3.name = "updir";
        form.appendChild(element3);
        element4.value = vertualname;
        element4.name = "vertualname";
        form.appendChild(element4);
	element5.value = avalon.cookie!=undefined ? avalon.cookie.get("token"):'';
        element5.name = "token";
        form.appendChild(element5);
        form.method = "POST";
        form.action = common.config.downloadurl + "?token=" + (avalon.cookie != undefined ? avalon.cookie.get("token") : '');
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        return true;
    }

    common.getProducts = function (authproducts,callback) {
        var list = [];
        //avalon.getJSON(common.config.sourceurl+"/Scripts/Product.json?rd="+Math.random(), null, function (products) {
        avalon.ajax({
            url: "/Scripts/Product.json?rd=" + Math.random(),
            type: "get",
            success:function(products){
                avalon.each(authproducts, function (k, v) {
                    var item = {};
                    avalon.each(products.list, function (key, value) {
                        if (value.name == v.ProductName) {
                            item.name = value.name;
                            item.url = value.url;
                            list.push(item);
                            return false;
                        }
                    })
                })
                callback(list);
            }
        })   
    }

    common.getMenuList = function (productname, callback) {
        var url = "/Scripts/" + productname + ".json?rd=" + Math.random();
        avalon.ajax({
            url:url,
            type: "get",
            success: function (menulist) {
                callback(menulist.menulist);
            }
        })
    }
}(avalon, window.webapp = {}));