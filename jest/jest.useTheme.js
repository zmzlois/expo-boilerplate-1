// jest.mock('@/Hooks', () => {
//     return {
//       __esModule: true,
//       useOnboard: () => {
//         return { isVisible: true }
//       },
//       useTheme: jest.fn(() => {
//         return {
//                 "Fonts": {
//                   "textSmall": {
//                     "fontSize": 16,
//                     "color": "#212529"
//                   },
//                   "textRegular": {
//                     "fontSize": 20,
//                     "color": "#212529"
//                   },
//                   "textLarge": {
//                     "fontSize": 40,
//                     "color": "#212529"
//                   },
//                   "titleSmall": {
//                     "fontSize": 32,
//                     "fontWeight": "bold",
//                     "color": "#212529"
//                   },
//                   "titleRegular": {
//                     "fontSize": 40,
//                     "fontWeight": "bold",
//                     "color": "#212529"
//                   },
//                   "titleLarge": {
//                     "fontSize": 80,
//                     "fontWeight": "bold",
//                     "color": "#212529"
//                   },
//                   "textCenter": {
//                     "textAlign": "center"
//                   },
//                   "textJustify": {
//                     "textAlign": "justify"
//                   },
//                   "textLeft": {
//                     "textAlign": "left"
//                   },
//                   "textRight": {
//                     "textAlign": "right"
//                   }
//                 },
//                 "Gutters": {
//                   "tinyBMargin": {
//                     "marginBottom": 5
//                   },
//                   "tinyTMargin": {
//                     "marginTop": 5
//                   },
//                   "tinyRMargin": {
//                     "marginRight": 5
//                   },
//                   "tinyLMargin": {
//                     "marginLeft": 5
//                   },
//                   "tinyVMargin": {
//                     "marginVertical": 5
//                   },
//                   "tinyHMargin": {
//                     "marginHorizontal": 5
//                   },
//                   "tinyBPadding": {
//                     "paddingBottom": 5
//                   },
//                   "tinyTPadding": {
//                     "paddingTop": 5
//                   },
//                   "tinyRPadding": {
//                     "paddingRight": 5
//                   },
//                   "tinyLPadding": {
//                     "paddingLeft": 5
//                   },
//                   "tinyVPadding": {
//                     "paddingVertical": 5
//                   },
//                   "tinyHPadding": {
//                     "paddingHorizontal": 5
//                   },
//                   "smallBMargin": {
//                     "marginBottom": 10
//                   },
//                   "smallTMargin": {
//                     "marginTop": 10
//                   },
//                   "smallRMargin": {
//                     "marginRight": 10
//                   },
//                   "smallLMargin": {
//                     "marginLeft": 10
//                   },
//                   "smallVMargin": {
//                     "marginVertical": 10
//                   },
//                   "smallHMargin": {
//                     "marginHorizontal": 10
//                   },
//                   "smallBPadding": {
//                     "paddingBottom": 10
//                   },
//                   "smallTPadding": {
//                     "paddingTop": 10
//                   },
//                   "smallRPadding": {
//                     "paddingRight": 10
//                   },
//                   "smallLPadding": {
//                     "paddingLeft": 10
//                   },
//                   "smallVPadding": {
//                     "paddingVertical": 10
//                   },
//                   "smallHPadding": {
//                     "paddingHorizontal": 10
//                   },
//                   "regularBMargin": {
//                     "marginBottom": 15
//                   },
//                   "regularTMargin": {
//                     "marginTop": 15
//                   },
//                   "regularRMargin": {
//                     "marginRight": 15
//                   },
//                   "regularLMargin": {
//                     "marginLeft": 15
//                   },
//                   "regularVMargin": {
//                     "marginVertical": 15
//                   },
//                   "regularHMargin": {
//                     "marginHorizontal": 15
//                   },
//                   "regularBPadding": {
//                     "paddingBottom": 15
//                   },
//                   "regularTPadding": {
//                     "paddingTop": 15
//                   },
//                   "regularRPadding": {
//                     "paddingRight": 15
//                   },
//                   "regularLPadding": {
//                     "paddingLeft": 15
//                   },
//                   "regularVPadding": {
//                     "paddingVertical": 15
//                   },
//                   "regularHPadding": {
//                     "paddingHorizontal": 15
//                   },
//                   "largeBMargin": {
//                     "marginBottom": 30
//                   },
//                   "largeTMargin": {
//                     "marginTop": 30
//                   },
//                   "largeRMargin": {
//                     "marginRight": 30
//                   },
//                   "largeLMargin": {
//                     "marginLeft": 30
//                   },
//                   "largeVMargin": {
//                     "marginVertical": 30
//                   },
//                   "largeHMargin": {
//                     "marginHorizontal": 30
//                   },
//                   "largeBPadding": {
//                     "paddingBottom": 30
//                   },
//                   "largeTPadding": {
//                     "paddingTop": 30
//                   },
//                   "largeRPadding": {
//                     "paddingRight": 30
//                   },
//                   "largeLPadding": {
//                     "paddingLeft": 30
//                   },
//                   "largeVPadding": {
//                     "paddingVertical": 30
//                   },
//                   "largeHPadding": {
//                     "paddingHorizontal": 30
//                   }
//                 },
//                 "Images": {
//                   "logo": 3
//                 },
//                 "Layout": {
//                   "column": {
//                     "flexDirection": "column"
//                   },
//                   "columnReverse": {
//                     "flexDirection": "column-reverse"
//                   },
//                   "colCenter": {
//                     "flexDirection": "column",
//                     "alignItems": "center",
//                     "justifyContent": "center"
//                   },
//                   "colVCenter": {
//                     "flexDirection": "column",
//                     "alignItems": "center"
//                   },
//                   "colHCenter": {
//                     "flexDirection": "column",
//                     "justifyContent": "center"
//                   },
//                   "row": {
//                     "flexDirection": "row"
//                   },
//                   "rowReverse": {
//                     "flexDirection": "row-reverse"
//                   },
//                   "rowCenter": {
//                     "flexDirection": "row",
//                     "alignItems": "center",
//                     "justifyContent": "center"
//                   },
//                   "rowVCenter": {
//                     "flexDirection": "row",
//                     "justifyContent": "center"
//                   },
//                   "rowHCenter": {
//                     "flexDirection": "row",
//                     "alignItems": "center"
//                   },
//                   "center": {
//                     "alignItems": "center",
//                     "justifyContent": "center"
//                   },
//                   "alignItemsCenter": {
//                     "alignItems": "center"
//                   },
//                   "alignItemsStart": {
//                     "alignItems": "flex-start"
//                   },
//                   "alignItemsStretch": {
//                     "alignItems": "stretch"
//                   },
//                   "justifyContentCenter": {
//                     "justifyContent": "center"
//                   },
//                   "justifyContentAround": {
//                     "justifyContent": "space-around"
//                   },
//                   "justifyContentBetween": {
//                     "justifyContent": "space-between"
//                   },
//                   "scrollSpaceAround": {
//                     "flexGrow": 1,
//                     "justifyContent": "space-around"
//                   },
//                   "scrollSpaceBetween": {
//                     "flexGrow": 1,
//                     "justifyContent": "space-between"
//                   },
//                   "selfStretch": {
//                     "alignSelf": "stretch"
//                   },
//                   "fill": {
//                     "flex": 1
//                   },
//                   "fullSize": {
//                     "height": "100%",
//                     "width": "100%"
//                   },
//                   "fullWidth": {
//                     "width": "100%"
//                   },
//                   "fullHeight": {
//                     "height": "100%"
//                   },
//                   "mirror": {
//                     "transform": [
//                       {
//                         "scaleX": -1
//                       }
//                     ]
//                   },
//                   "rotate90": {
//                     "transform": [
//                       {
//                         "rotate": "90deg"
//                       }
//                     ]
//                   },
//                   "rotate90Inverse": {
//                     "transform": [
//                       {
//                         "rotate": "-90deg"
//                       }
//                     ]
//                   }
//                 },
//                 "Common": {
//                   "button": {
//                     "base": {
//                       "alignItems": "center",
//                       "justifyContent": "center",
//                       "paddingHorizontal": 30,
//                       "height": 40,
//                       "backgroundColor": "#E14032"
//                     },
//                     "rounded": {
//                       "alignItems": "center",
//                       "justifyContent": "center",
//                       "paddingHorizontal": 30,
//                       "height": 40,
//                       "backgroundColor": "#E14032",
//                       "borderRadius": 20
//                     },
//                     "outline": {
//                       "alignItems": "center",
//                       "justifyContent": "center",
//                       "paddingHorizontal": 30,
//                       "height": 40,
//                       "backgroundColor": "rgba(0,0,0,0)",
//                       "borderWidth": 2,
//                       "borderColor": "#E14032"
//                     },
//                     "outlineRounded": {
//                       "alignItems": "center",
//                       "justifyContent": "center",
//                       "paddingHorizontal": 30,
//                       "height": 40,
//                       "backgroundColor": "rgba(0,0,0,0)",
//                       "borderRadius": 20,
//                       "borderWidth": 2,
//                       "borderColor": "#E14032"
//                     }
//                   },
//                   "backgroundPrimary": {
//                     "backgroundColor": "#E14032"
//                   },
//                   "backgroundReset": {
//                     "backgroundColor": "rgba(0,0,0,0)"
//                   },
//                   "textInput": {
//                     "borderWidth": 1,
//                     "borderColor": "#212529",
//                     "backgroundColor": "#FFFFFF",
//                     "color": "#212529",
//                     "minHeight": 50,
//                     "textAlign": "center",
//                     "marginTop": 10,
//                     "marginBottom": 10
//                   }
//                 },
//                 "Colors": {
//                   "transparent": "rgba(0,0,0,0)",
//                   "inputBackground": "#FFFFFF",
//                   "white": "#ffffff",
//                   "text": "#212529",
//                   "primary": "#E14032",
//                   "success": "#28a745",
//                   "error": "#dc3545",
//                   "background": "#FFFFFF",
//                   "iconBorderTabBar": "black"
//                 },
//                 "NavigationColors": {
//                   "primary": "#E14032"
//                 },
//                 "FontSize": {
//                   "small": 16,
//                   "regular": 20,
//                   "large": 40
//                 },
//                 "MetricsSizes": {
//                   "tiny": 5,
//                   "small": 10,
//                   "regular": 15,
//                   "large": 30
//                 },
//                 "darkMode": false,
//                 "NavigationTheme": {
//                   "dark": false,
//                   "colors": {
//                     "primary": "#E14032",
//                     "background": "rgb(242, 242, 242)",
//                     "card": "rgb(255, 255, 255)",
//                     "text": "rgb(28, 28, 30)",
//                     "border": "rgb(216, 216, 216)",
//                     "notification": "rgb(255, 59, 48)"
//                   }
//               }
//         }
//       }),
     
//     }
//   })