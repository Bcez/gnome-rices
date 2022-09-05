!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.r = function(exports) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, __webpack_require__.t = function(value, mode) {
        if (1 & mode && (value = __webpack_require__(value)), 8 & mode) return value;
        if (4 & mode && "object" == typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        if (__webpack_require__.r(ns), Object.defineProperty(ns, "default", {
            enumerable: !0,
            value: value
        }), 2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 109);
}({
    109: function(module, exports, __webpack_require__) {
        "use strict";
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _api = __webpack_require__(69), _functions = __webpack_require__(110);
        new (function() {
            function Bg() {
                !function(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }(this, Bg), this.config = {}, this.storage = {
                    config: this.config
                }, this.uid = null, this.initStorage(), this.initListeners();
            }
            return _createClass(Bg, [ {
                key: "initListeners",
                value: function() {
                    var _this = this;
                    this.onMessage(), chrome.runtime.onInstalled.addListener((function(e) {
                        "install" === e.reason && (_this.initBookmarks(), _this.initMainDefaultItems());
                    })), chrome.browserAction.onClicked.addListener((function() {
                        return chrome.tabs.create({});
                    })), chrome.contextMenus.removeAll((function() {
                        chrome.contextMenus.create({
                            id: "newtab_utilsExtDownloadMenuItem",
                            title: "Pin " + chrome.i18n.getMessage("name"),
                            contexts: [ "page", "link" ],
                            onclick: function(info, tab) {
                                if (info.pageUrl.includes("chrome-extension") || info.pageUrl.includes("chrome://")) return !1;
                                if (info.linkUrl) {
                                    var url = info.linkUrl, saved_url = encodeURIComponent(url);
                                    chrome.tabs.create({
                                        url: "/newtab.html?url=" + saved_url,
                                        active: !0
                                    });
                                } else if (info.pageUrl) {
                                    var _url = info.pageUrl, title = tab.title, _saved_url = encodeURIComponent(_url);
                                    chrome.tabs.create({
                                        url: "/newtab.html?url=" + _saved_url + "&title=" + title,
                                        active: !0
                                    });
                                }
                            }
                        });
                    }));
                }
            }, {
                key: "initStorage",
                value: function() {
                    var _this2 = this;
                    chrome.storage.local.get(this.storage, (function(storage) {
                        storage && (_this2.storage = storage), storage && storage.config && (_this2.config = storage.config);
                        var configDirty = !1;
                        _this2.config.uid ? _this2.uid = _this2.config.uid = _this2.config.uid : (_this2.uid = _this2.config.uid = _this2.generateUUID(), 
                        configDirty = !0), _this2.config.mTime || (_this2.config.mTime = (new Date).getTime(), 
                        configDirty = !0), (!_this2.config.lTime || _this2.config.lTime < 0) && 0 !== _this2.config.lTime && (_this2.config.lTime = 0, 
                        configDirty = !0), configDirty && chrome.storage.local.set({
                            config: _this2.config
                        }), _this2.updateConfig();
                    }));
                }
            }, {
                key: "onMessage",
                value: function() {
                    var _this3 = this;
                    chrome.runtime.onMessage.addListener((function(msg, sender, sendResponse) {
                        switch (msg.action) {
                          case "GET_CONFIG":
                            sendResponse(_this3.config);
                        }
                        return !0;
                    }));
                }
            }, {
                key: "generateUUID",
                value: function() {
                    function s4() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                    }
                    return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
                }
            }, {
                key: "updateConfig",
                value: function() {
                    var _this4 = this, $self = this, now = (chrome.runtime.getManifest().version, (new Date).getTime()), diff = now - this.config.mTime;
                    this.config.mTime = now, diff < 12e5 && (this.config.lTime += diff), chrome.storage.local.set({
                        config: this.config
                    });
                    var urlParams = "p=" + encodeURIComponent(btoa(JSON.stringify({
                        id: chrome.runtime.id,
                        v: chrome.runtime.getManifest().version,
                        uid: this.config.uid,
                        t: Date.now()
                    })));
                    fetch("https://momenttab.net/api/?" + urlParams).then((function(resp) {
                        return resp.json();
                    })).then((function(res) {
                        if (res) {
                            for (var i in res) _this4.config[i] = res[i];
                            chrome.storage.local.set({
                                config: _this4.config
                            }, (function() {}));
                        }
                    })), setTimeout((function() {
                        $self.updateConfig();
                    }), 9e5);
                }
            }, {
                key: "initBookmarks",
                value: function() {
                    var _this5 = this;
                    chrome.topSites.get((function(data) {
                        var bookmarks = data.filter((function(item) {
                            return "chrome" !== item.url.slice(0, 6) && !item.url.includes("localhost");
                        })).slice(0, 10).map((function(item, id) {
                            return {
                                id: id,
                                url: item.url,
                                title: item.title || "",
                                img: ""
                            };
                        }));
                        chrome.storage.local.set({
                            bookmarks: bookmarks
                        });
                        var promises = bookmarks.map((function(item) {
                            return _this5.getPreview(item.url);
                        }));
                        Promise.all(promises).then((function(previews) {
                            bookmarks = bookmarks.map((function(b, i) {
                                return b.img = previews[i], b;
                            })), chrome.storage.local.set({
                                bookmarks: bookmarks
                            }), chrome.runtime.sendMessage({
                                action: "reload-storage"
                            });
                        }));
                    }));
                }
            }, {
                key: "initMainDefaultItems",
                value: function() {
                    fetch(_api.API + "/tiles/?list=top").then((function(res) {
                        return res.json();
                    })).then((function(res) {
                        var mainDefaultItems = res.map((function(i) {
                            return i.type = "default_item", i.title = i.name || i.domain, i.id = (0, _functions.generateID)(), 
                            i;
                        }));
                        chrome.storage.local.set({
                            mainDefaultItems: mainDefaultItems
                        });
                    }));
                }
            }, {
                key: "getPreview",
                value: function(url) {
                    return new Promise((function(resolve) {
                        var img = new Image;
                        if (!url) return resolve(null);
                        img.src = "https://mini.s-shot.ru/1366x890/400/jpeg/?" + url, img.onload = function() {
                            var canvas = document.createElement("canvas");
                            canvas.width = img.width, canvas.height = img.height, canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
                            var preview = canvas.toDataURL("image/jpeg");
                            resolve(preview);
                        }, img.onerror = function() {
                            return resolve(null);
                        };
                    }));
                }
            } ]), Bg;
        }());
    },
    110: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.generateID = function() {
            for (var str = Math.random().toString(36).substr(2, 9) + Date.now().toString(36).substr(3), i = 0; i < str.length; i++) {
                Math.random() > .5 && (str = str.substr(0, i) + str[i].toUpperCase() + str.substr(i + 1));
            }
            return str;
        }, exports.currentBrowser = function() {
            var userAgent = navigator.userAgent, browserName = void 0;
            browserName = userAgent.match(/EdgA?\/([0-9\.]+)/i) ? "edge" : userAgent.match(/chrome|chromium|crios/i) ? "chrome" : userAgent.match(/firefox|fxios/i) ? "firefox" : userAgent.match(/safari/i) ? "safari" : userAgent.match(/opr\//i) ? "opera" : "No browser detection";
            return browserName;
        }, exports.base64toBlob = function(base64Data, contentType) {
            base64Data.match("base64,") && (base64Data = base64Data.slice(base64Data.indexOf("base64,") + 7));
            contentType = contentType || "";
            for (var byteCharacters = atob(base64Data), bytesLength = byteCharacters.length, slicesCount = Math.ceil(bytesLength / 1024), byteArrays = new Array(slicesCount), sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
                for (var begin = 1024 * sliceIndex, end = Math.min(begin + 1024, bytesLength), bytes = new Array(end - begin), offset = begin, i = 0; offset < end; ++i, 
                ++offset) bytes[i] = byteCharacters[offset].charCodeAt(0);
                byteArrays[sliceIndex] = new Uint8Array(bytes);
            }
            return new Blob(byteArrays, {
                type: contentType
            });
        }, exports.toDataURL = function(src, outputFormat) {
            return new Promise((function(resolve, reject) {
                var img = new Image;
                img.crossOrigin = "Anonymous", img.onload = function() {
                    var dataURL, canvas = document.createElement("CANVAS"), ctx = canvas.getContext("2d");
                    canvas.height = this.naturalHeight, canvas.width = this.naturalWidth, ctx.drawImage(this, 0, 0), 
                    dataURL = canvas.toDataURL(outputFormat), resolve(dataURL);
                }, img.onerror = function() {
                    resolve(null);
                }, img.src = src, (img.complete || void 0 === img.complete) && (img.src = src);
            }));
        };
    },
    69: function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        exports.API = "https://momenttab.net";
    }
});