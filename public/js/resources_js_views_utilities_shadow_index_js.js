(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_utilities_shadow_index_js"],{

/***/ "./resources/js/views/utilities/shadow/index.js":
/*!******************************************************!*\
  !*** ./resources/js/views/utilities/shadow/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/CardHeader/CardHeader.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Divider/Divider.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui-component/cards/SubCard */ "./resources/js/ui-component/cards/SubCard/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ColorBox = function ColorBox(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
      sx: {
        mb: 3,
        boxShadow: props.shadow
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        sx: {
          py: 4.5,
          bgcolor: props.bgcolor,
          color: 'grey.900'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
          sx: {
            color: 'inherit'
          },
          children: ["boxShadow: ", props.shadow]
        })
      })
    })
  });
};

var UtilitisShadow = function UtilitisShadow() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
      title: "Basic Shadow"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
        container: true,
        spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Basic Shadow",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "0"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "1"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "2"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "3"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "4"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "5"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "6"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "7"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "8"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "9"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "10"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "11"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "12"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "13"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "14"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "15"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "16"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "17"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "18"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "19"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "20"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "21"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "22"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "23"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  shadow: "24"
                })
              })]
            })
          })
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UtilitisShadow);

/***/ })

}]);