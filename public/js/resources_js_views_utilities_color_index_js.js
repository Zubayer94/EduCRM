(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_utilities_color_index_js"],{

/***/ "./resources/js/views/utilities/color/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/views/utilities/color/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Card/Card.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Box/Box.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Typography/Typography.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Grid/Grid.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/CardHeader/CardHeader.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/Divider/Divider.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/CardContent/CardContent.js");
/* harmony import */ var _ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui-component/cards/SubCard */ "./resources/js/ui-component/cards/SubCard/index.js");
/* harmony import */ var _store_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/constant */ "./resources/js/store/constant.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var ColorBox = function ColorBox(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
      sx: {
        mb: 3
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        sx: {
          py: 4.5,
          bgcolor: props.bgcolor,
          color: '#ffffff'
        },
        children: [props.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
          variant: "subtitle1",
          color: "inherit",
          children: props.title
        }), !props.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.default, {
          sx: {
            p: 1.15
          }
        })]
      })
    }), props.data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
      container: true,
      justifyContent: "space-between",
      alignItems: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
          variant: "subtitle2",
          children: props.data.label
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
        item: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.default, {
          variant: "subtitle1",
          sx: {
            textTransform: 'uppercase'
          },
          children: props.data.color
        })
      })]
    })]
  });
};

var UIColor = function UIColor() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, {
      title: "Color Palette"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
        container: true,
        spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Primary Color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.light",
                  data: {
                    label: 'Blue-50',
                    color: '#E3F2FD'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.200",
                  data: {
                    label: 'Blue-200',
                    color: '#90CAF9'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.main",
                  data: {
                    label: 'Blue-500',
                    color: '#2196F3'
                  },
                  title: "primary.main"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.dark",
                  data: {
                    label: 'Blue-600',
                    color: '#1E88E5'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "primary.800",
                  data: {
                    label: 'Blue-800',
                    color: '#1565C0'
                  }
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Secondary Color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "secondary.light",
                  data: {
                    label: 'DeepPurple-50',
                    color: '#ede7f6'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "secondary.200",
                  data: {
                    label: 'DeepPurple-200',
                    color: '#b39ddb'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "secondary.main",
                  data: {
                    label: 'DeepPurple-500',
                    color: '#673ab7'
                  },
                  title: "secondary.main"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "secondary.dark",
                  data: {
                    label: 'DeepPurple-600',
                    color: '#5e35b1'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "secondary.800",
                  data: {
                    label: 'DeepPurple-800',
                    color: '#4527a0'
                  }
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Success Color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "success.light",
                  data: {
                    label: 'Green-A100',
                    color: '#b9f6ca'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "success.main",
                  data: {
                    label: 'Green-A500',
                    color: '#69f0ae'
                  },
                  title: "success.main"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "success.dark",
                  data: {
                    label: 'Green-A600',
                    color: '#00c853'
                  }
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Orange Color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "orange.light",
                  data: {
                    label: 'DeepOrange-50',
                    color: '#fbe9e7'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "orange.main",
                  data: {
                    label: 'DeepOrange-200',
                    color: '#ffab91'
                  },
                  title: "orange.main"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "orange.dark",
                  data: {
                    label: 'DeepOrange-800',
                    color: '#d84315'
                  }
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Error Color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "error.light",
                  data: {
                    label: 'Red-50',
                    color: '#ef9a9a'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "error.main",
                  data: {
                    label: 'Red-200',
                    color: '#f44336'
                  },
                  title: "error.main"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "error.dark",
                  data: {
                    label: 'Red-800',
                    color: '#c62828'
                  }
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Warning Color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "warning.light",
                  data: {
                    label: 'Amber-50',
                    color: '#b9f6ca'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "warning.main",
                  data: {
                    label: 'Amber-100',
                    color: '#ffe57f'
                  },
                  title: "warning.main"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "warning.dark",
                  data: {
                    label: 'Amber-500',
                    color: '#FFC107'
                  }
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_component_cards_SubCard__WEBPACK_IMPORTED_MODULE_1__.default, {
            title: "Grey Color",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
              container: true,
              spacing: _store_constant__WEBPACK_IMPORTED_MODULE_2__.gridSpacing,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.50",
                  data: {
                    label: 'Grey-50',
                    color: '#fafafa'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.100",
                  data: {
                    label: 'Grey-100',
                    color: '#f5f5f5'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.200",
                  data: {
                    label: 'Grey-200',
                    color: '#eeeeee'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.300",
                  data: {
                    label: 'Grey-300',
                    color: '#e0e0e0'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.500",
                  data: {
                    label: 'Grey-500',
                    color: '#9e9e9e'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.600",
                  data: {
                    label: 'Grey-600',
                    color: '#757575'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.700",
                  data: {
                    label: 'Grey-700',
                    color: '#616161'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "grey.900",
                  data: {
                    label: 'Grey-900',
                    color: '#212121'
                  }
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, {
                item: true,
                xs: 12,
                sm: 6,
                md: 4,
                lg: 2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ColorBox, {
                  bgcolor: "#fff",
                  data: {
                    label: 'Pure White',
                    color: '#ffffff'
                  }
                })
              })]
            })
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIColor);

/***/ })

}]);